import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Database, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      skills: ['Python', 'JavaScript', 'C++', 'SQL']
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      skills: ['React.js', 'Flask', 'HTML5', 'CSS3', 'RESTful APIs']
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      skills: ['MySQL', 'SQLite', 'DBMS']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Postman', 'UiPath']
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20',
      skills: ['OpenCV', 'Machine Learning', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20',
      skills: ['AWS', 'CI/CD', 'Docker', 'Cloud Deployment']
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className={`bg-card/50 border ${category.borderColor} hover:border-primary/50 transition-all duration-300 hover:scale-105 group`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 ${category.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">CS Fundamentals</h4>
              <p className="text-sm text-muted-foreground">Data Structures & Algorithms, OOP, Operating Systems, SDLC</p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">Development</h4>
              <p className="text-sm text-muted-foreground">Full-Stack Web Development, UI/UX Design, Responsive Design</p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">Methodologies</h4>
              <p className="text-sm text-muted-foreground">Agile, Git Workflow, Testing, Debugging</p>
            </div>
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">Soft Skills</h4>
              <p className="text-sm text-muted-foreground">Team Collaboration, Problem-Solving, Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;