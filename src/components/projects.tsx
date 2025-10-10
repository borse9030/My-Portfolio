
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/borse9030/repos");
        if (!res.ok) {
          throw new Error(`GitHub API responded with ${res.status}`);
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          // Handle cases where the API returns an error object
          console.error("Error fetching repos: API did not return an array.", data);
          setRepos([]);
          return;
        }
        const sorted = data
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, 6);
        setRepos(sorted);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          🚀 My Latest GitHub Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.05, y: -5 }}
              className="h-full"
            >
              <Card className="bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={`https://opengraph.githubassets.com/1/borse9030/${repo.name}`}
                    alt={`${repo.name} project preview`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl font-bold mb-2 uppercase">{repo.name}</h3>
                  <p className="text-foreground/80 font-bold mb-4 flex-grow text-sm h-20">
                    {repo.description
                      ? repo.description.slice(0, 120) + (repo.description.length > 120 ? '...' : '')
                      : "No description available."}
                  </p>
                  <div className="flex justify-center items-center gap-4 mb-6 text-sm">
                      <Badge variant="secondary" className="bg-white/20 text-black rounded-full px-3 py-1 text-xs font-semibold">
                        💻 {repo.language || "N/A"}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-black rounded-full px-3 py-1 text-xs font-semibold">
                        ⭐ {repo.stargazers_count}
                      </Badge>
                  </div>

                  <div className="flex justify-center gap-4 mt-auto">
                    <Button asChild variant="default" className="bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/80 shadow-md">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">GITHUB</a>
                    </Button>
                    {repo.homepage && (
                       <Button asChild variant="default" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full hover:opacity-90 shadow-md">
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/80 shadow-lg hover:scale-105 transition-transform">
                <a
                    href="https://github.com/borse9030"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View More on GitHub →
                </a>
            </Button>
      </div>
      </div>
    </section>
  );
}
