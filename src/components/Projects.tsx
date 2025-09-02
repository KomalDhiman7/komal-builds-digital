import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Brain, Heart } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-Stack', 'Frontend', 'AI/ML', 'Web Development'];

  const projects = [
    {
      title: 'Outfique – Personal Stylist',
      description: 'A full-stack fashion-tech web app that recommends AI-generated outfits based on weather, mood, and user wardrobe. Features responsive React frontend, Flask backend REST APIs, OpenCV image processing, and JWT authentication.',
      type: 'Full-Stack',
      status: 'Completed',
      technologies: ['React.js', 'Flask', 'Python', 'OpenCV', 'SQLite', 'JWT', 'OpenWeatherMap API'],
      features: [
        'AI-powered outfit recommendations',
        'Weather-based suggestions',
        'Image processing with OpenCV',
        'User authentication & management',
        'Responsive design'
      ],
      icon: Globe,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Mood Tracker',
      description: 'A clean, responsive mood-tracking web app developed for CodeCircuit Hackathon 2025. Features interactive UI elements, mood input system, and emoji-based feedback for mental well-being check-ins.',
      type: 'Frontend',
      status: 'Completed',
      technologies: ['React', 'CSS', 'JavaScript'],
      features: [
        'Interactive mood tracking',
        'Emoji-based feedback system',
        'Clean and intuitive UI',
        'Mental well-being focus',
        'Hackathon winner project'
      ],
      icon: Heart,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A responsive chat application with real-time messaging using WebSockets. Features user authentication, group chats, and persistent storage with dynamic front-end components.',
      type: 'Full-Stack',
      status: 'In Progress',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      features: [
        'Real-time messaging with WebSocket',
        'User authentication & authorization',
        'Group chat functionality',
        'Persistent message storage',
        'Dynamic front-end components'
      ],
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      title: 'Hand Gesture Cursor Control',
      description: 'Enhanced hand tracking module for cursor control using computer vision with MediaPipe Framework and OpenCV for real-time gesture recognition through hand gestures.',
      type: 'AI/ML',
      status: 'Completed',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      features: [
        'Real-time gesture recognition',
        'Computer vision implementation',
        'Hand tracking accuracy',
        'Cursor control system',
        'MediaPipe integration'
      ],
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in web development, AI, and software engineering
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary/30 hover:border-primary hover:bg-primary/10'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${project.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`mt-1 ${
                            project.status === 'Completed' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-orange-400/20 text-orange-400'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-muted/50 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open('https://github.com/KomalDhiman7', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://github.com/KomalDhiman7', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;