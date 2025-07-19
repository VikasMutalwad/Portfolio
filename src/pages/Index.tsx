import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  User, 
  BookOpen, 
  Trophy,
  Briefcase,
  MessageSquare,
  ExternalLink,
  Github
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    { name: "C", level: 85, icon: "C" },
    { name: "C++", level: 80, icon: "C++" },
    { name: "Python", level: 75, icon: "Python" },
    { name: "Java", level: 70, icon: "Java" },
    { name: "HTML", level: 90, icon: "HTML" },
    { name: "CSS", level: 85, icon: "CSS" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Vikas Mutalwad</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-accent ${
                    activeSection === section ? "text-accent font-medium" : "text-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-primary">
                  Hi, I'm <span className="text-accent">Vikas</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-tech-gray">
                  Computer Engineering Student | Programmer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Aspiring Software Developer with a Passion for Code and Innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button variant="default" size="lg" className="bg-gradient-tech">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-tech border-4 border-accent/20">
                    <img 
                      src="/lovable-uploads/1c3131a5-dfc5-43f5-b3c0-02b3249409c3.png"
                      alt="Vikas Mutalwad - Professional Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 animate-float">
                    <div className="bg-gradient-tech p-3 rounded-full shadow-glow">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-tech-light/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-tech mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a student of Computer Engineering at Government Polytechnic Pune, 
                  with a strong interest in programming and technology. I have completed 
                  my 10th grade with 94.20% and am currently in my 3rd year of a diploma 
                  in Computer Science.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in technology started early, and I've developed a passion 
                  for problem-solving through code. I'm constantly learning new technologies 
                  and building projects to enhance my skills.
                </p>
              </div>
              
              <div className="space-y-6 animate-fade-in">
                <Card className="border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <BookOpen className="h-8 w-8 text-accent" />
                      <h3 className="text-xl font-semibold">Education</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Computer Engineering Diploma</h4>
                        <p className="text-sm text-muted-foreground">Government Polytechnic Pune</p>
                        <p className="text-sm text-accent">3rd Year (Current)</p>
                      </div>
                      <div>
                        <h4 className="font-medium">10th Grade</h4>
                        <p className="text-sm text-muted-foreground">94.20%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-gradient-tech mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="border-accent/20 hover:shadow-soft transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-tech h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-tech-light/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects</h2>
              <div className="w-20 h-1 bg-gradient-tech mx-auto"></div>
            </div>
            
            <Card className="border-accent/20 animate-scale-in">
              <CardContent className="p-12">
                <Briefcase className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Projects Coming Soon</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm currently working on exciting projects that showcase my programming skills. 
                  Stay tuned for updates!
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-tech mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 animate-slide-in">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">muttalwadvikas@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91 9322807300</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Linkedin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/vikas-mutalwad-19585a326" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline flex items-center"
                        >
                          View Profile
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <Card className="border-accent/20 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="border-muted focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="border-muted focus:border-accent"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="border-muted focus:border-accent"
                      />
                    </div>
                    <Button className="w-full bg-gradient-tech">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Vikas Mutalwad. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-80">Built with passion and technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
