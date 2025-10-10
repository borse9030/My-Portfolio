"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
    { icon: Mail, text: "bhavesh@example.com", href: "mailto:bhavesh@example.com" },
    { icon: Phone, text: "+1 (123) 456-7890", href: "tel:+11234567890" },
    { icon: MapPin, text: "Mumbai, India", href: "#" },
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
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h3 className="text-2xl font-headline font-semibold">Get in Touch</h3>
             <p className="text-muted-foreground">I'm currently available for freelance work and open to new opportunities. Feel free to reach out to me.</p>
             <div className="space-y-4">
                {contactInfo.map((info, index) => (
                    <a key={index} href={info.href} className="flex items-center gap-4 text-muted-foreground hover:text-primary-foreground transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                        <span>{info.text}</span>
                    </a>
                ))}
             </div>
          </div>
          <div>
            <Card className="p-6 md:p-8 bg-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your Email" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your Message" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">Send Message</Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
