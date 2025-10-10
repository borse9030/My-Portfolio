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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
    { icon: Code, href: 'https://github.com', 'aria-label': 'Code' },
    { icon: Linkedin, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 uppercase">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/40 backdrop-blur-md shadow-2xl rounded-3xl">
            <CardContent className="p-8 md:p-12 space-y-6 flex flex-col justify-center h-full">
              <div>
                <h3 className="text-xl font-headline font-bold uppercase mb-4">Contact Me</h3>
                <p className="text-foreground/80 font-bold uppercase text-sm leading-relaxed">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.</p>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                  {socialLinks.map((link, index) => (
                      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="text-foreground/80 hover:text-foreground transition-colors">
                          <link.icon className="w-8 h-8" />
                      </a>
                  ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/40 backdrop-blur-md shadow-2xl rounded-3xl">
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
                          <Input placeholder="Your Name" {...field} className="bg-gray-200/80 border-0 placeholder:text-gray-500 font-bold" />
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
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-gray-200/80 border-0 placeholder:text-gray-500 font-bold"/>
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
                          <Textarea placeholder="Your Message..." rows={4} {...field} className="bg-gray-200/80 border-0 placeholder:text-gray-500 font-bold" />
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
