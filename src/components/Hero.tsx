import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <p className="text-lg text-muted-foreground mb-4 animate-float">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Komal
          </h1>
          <div className="text-2xl md:text-3xl text-foreground mb-8">
            I'm a <span className="text-primary font-semibold">Developer</span>
          </div>
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Software Developer, Data Analyst & Full Stack Developer passionate about building scalable web applications, 
          AI-powered solutions, and solving real-world problems with code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 animate-pulse-glow"
            onClick={() => onNavigate('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
            onClick={() => onNavigate('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary hover:text-primary-glow transition-colors"
            onClick={() => window.open('https://github.com/KomalDhiman7', '_blank')}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary hover:text-primary-glow transition-colors"
            onClick={() => window.open('https://linkedin.com/in/komal-dhiman-580935289', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary hover:text-primary-glow transition-colors"
            onClick={() => window.open('mailto:komaldhiman773@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary hover:text-primary-glow transition-colors"
            onClick={() => window.open('tel:+919592439095', '_blank')}
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;