"use client";

import { useMemo, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useCollection, useFirestore, useMemoFirebase, useAuth, useUser } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { WithId } from '@/firebase/firestore/use-collection';
import { Skeleton } from '@/components/ui/skeleton';
import { signInAnonymously } from 'firebase/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface Message {
  name: string;
  email: string;
  message: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  } | null;
}

function MessageCard({ message }: { message: WithId<Message> }) {
  const date = message.createdAt ? new Date(message.createdAt.seconds * 1000).toLocaleString() : 'Date not available';

  return (
    <Card className="bg-white/20 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{message.name}</CardTitle>
            <CardDescription>{message.email}</CardDescription>
          </div>
          <p className="text-xs text-foreground/60">{date}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{message.message}</p>
      </CardContent>
    </Card>
  );
}

export default function MessageAnalysis() {
  const firestore = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (auth && !user && !isUserLoading) {
      signInAnonymously(auth).catch((error) => {
        console.error("Anonymous sign-in failed:", error);
      });
    }
  }, [auth, user, isUserLoading]);

  const messagesQuery = useMemoFirebase(() => {
    if (!firestore || !user?.uid) return null;
    return query(
      collection(firestore, 'users', user.uid, 'messages'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore, user?.uid]);

  const { data: messages, isLoading, error } = useCollection<Message>(messagesQuery);

  const showLoadingState = isLoading || isUserLoading;

  return (
    <section id="message-analysis" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-white/10 backdrop-blur-md p-8 md:p-12 shadow-2xl rounded-3xl max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 uppercase">
            Your Submitted Messages
          </h2>
          <div className="space-y-4 min-h-[200px]">
            {showLoadingState && !error && (
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            )}

            {error && (
               <Alert variant="destructive">
                 <AlertCircle className="h-4 w-4" />
                 <AlertTitle>Error Fetching Messages</AlertTitle>
                 <AlertDescription>
                   Could not load your messages due to a permission error. Please ensure you are logged in and have access.
                 </AlertDescription>
               </Alert>
            )}

            {!showLoadingState && !error && messages && messages.length > 0 && (
              messages.map((msg) => <MessageCard key={msg.id} message={msg} />)
            )}
            
            {!showLoadingState && !error && (!messages || messages.length === 0) && (
              <div className="border-2 border-dashed border-gray-400/50 rounded-2xl min-h-[200px] flex items-center justify-center p-8">
                <p className="text-foreground/60 font-bold uppercase tracking-wider">
                  Your submitted messages will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
