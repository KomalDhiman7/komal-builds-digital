import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch("https://formspree.io/f/xwpoywre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error("Formspree error");
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'komaldhiman773@gmail.com',
      href: 'mailto:komaldhiman773@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9592439095',
      href: 'tel:+919592439095'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jalandhar, Punjab, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or potential 
                collaborations. Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional Info */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Professional Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Role:</span>
                  <span className="font-medium">Software Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Education:</span>
                  <span className="font-medium">B.Tech CSE Student</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-primary">Open to Opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
            

              <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium mb-2 block">Your Name</label>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Your Name"
        required
        className="bg-background/50"
      />
    </div>
    <div>
      <label className="text-sm font-medium mb-2 block">Email Address</label>
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="name@example.com"
        required
        className="bg-background/50"
      />
    </div>
  </div>

  <div>
    <label className="text-sm font-medium mb-2 block">Subject</label>
    <Input
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Let's work together"
      required
      className="bg-background/50"
    />
  </div>

  <div>
    <label className="text-sm font-medium mb-2 block">Message</label>
    <Textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Tell me about your project or opportunity..."
      rows={6}
      required
      className="bg-background/50 resize-none"
    />
  </div>

  <Button 
    type="submit" 
    size="lg" 
    disabled={isLoading}
    className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
  >
    {isLoading ? (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
        Sending...
      </>
    ) : (
      <>
        <Send className="h-4 w-4 mr-2" />
        Send Message
      </>
    )}
  </Button>
</form>


              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Prefer direct contact? Email me at</p>
                <a 
                  href="mailto:komaldhiman773@gmail.com" 
                  className="text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  komaldhiman773@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;