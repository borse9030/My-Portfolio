"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Code, Linkedin } from 'lucide-react';
import SafeClient from "./safe-client";
import { useFirestore, useUser } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection, serverTimestamp } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
    { icon: Code, href: 'https://github.com/borse9030', 'aria-label': 'Code' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bhavesh-borse-49917b377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'aria-label': 'LinkedIn' },
];

export default function Contact() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const { user } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "You must be signed in to send a message. Please wait a moment and try again.",
      });
      return;
    }

    // Path to the user's specific messages sub-collection
    const messagesCollection = collection(firestore, 'users', user.uid, 'messages');
    addDocumentNonBlocking(messagesCollection, {
      ...values,
      createdAt: serverTimestamp(),
    });

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. Your message has been saved and will appear in the analysis section.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 uppercase">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl">
            <CardContent className="p-8 md:p-12 space-y-6 flex flex-col justify-center h-full">
              <div>
                <h3 className="text-xl font-headline font-bold uppercase mb-4">Contact Me</h3>
                <p className="text-foreground/80 font-bold uppercase text-sm leading-relaxed">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.</p>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                  {socialLinks.map((link, index) => (
                      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="text-foreground/80 hover:text-foreground transition-colors">
                          <SafeClient><link.icon className="w-8 h-8" /></SafeClient>
                      </a>
                  ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-xl font-headline font-bold uppercase mb-2">Contact Form</h3>
              <p className="text-foreground/80 font-bold uppercase text-sm mb-6">Fill out the form to send me a message.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline font-bold uppercase">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-white/20 border-0 placeholder:text-gray-500 font-bold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline font-bold uppercase">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-white/20 border-0 placeholder:text-gray-500 font-bold"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline font-bold uppercase">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your Message..." rows={4} {...field} className="bg-white/20 border-0 placeholder:text-gray-500 font-bold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground font-headline text-lg rounded-lg hover:bg-primary/90" size="lg">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
