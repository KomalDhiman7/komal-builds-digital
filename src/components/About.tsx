import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Code, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'AMCAT Score', value: '650+', description: '/800' },
    { icon: Code, label: 'Projects', value: '5+', description: 'Completed' },
    { icon: Users, label: 'Technologies', value: '15+', description: 'Mastered' },
    { icon: Star, label: 'LeetCode', value: '100+', description: 'Problems Solved' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Hello! I'm Komal Dhiman</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an aspiring Software Developer and B.Tech Computer Science student at 
                Chandigarh Group of Colleges, Landran. With a strong passion for creating 
                innovative solutions, my journey in technology has been driven by curiosity 
                and a desire to solve real-world problems through code.
              </p>
              
              <p>
                I specialize in full-stack development with expertise in Python, JavaScript, React, 
                Flask, and modern web technologies. Passionate about data structures, algorithms, 
                AI-powered applications, REST APIs, Machine Learning and building scalable web 
                applications that make a difference.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, participating in 
                hackathons like CodeCircuit Hackathon 2025, contributing to open-source projects 
                like freeCodeCamp, managing social media for tech communities, or working on 
                exciting projects that challenge me to grow as a developer.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Education</h4>
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="font-medium">Bachelor of Technology in Computer Science Engineering</p>
                <p className="text-primary">Chandigarh Group of Colleges (CGC), Landran</p>
                <p className="text-sm text-muted-foreground">2022-2026</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-1">{stat.description}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;