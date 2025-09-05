import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, Mail, Phone, Linkedin, Download, User, BookOpen, Trophy,
  Briefcase, MessageSquare, ExternalLink, Github, Sparkles, Terminal,
  Rocket, Globe, Star, ChevronDown, ArrowRight, Zap
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const skills = [
    { name: "C", level: 85, icon: Terminal, description: "System Programming & Data Structures" },
    { name: "C++", level: 80, icon: Code2, description: "Object-Oriented Programming & Algorithms" },
    { name: "Python", level: 75, icon: Sparkles, description: "Data Science & Web Development" },
    { name: "Java", level: 70, icon: Zap, description: "Enterprise Applications & Backend" },
    { name: "HTML", level: 90, icon: Globe, description: "Modern Web Structure & Semantics" },
    { name: "CSS", level: 85, icon: Star, description: "Responsive Design & Animations" },
    { name: "JavaScript", level: 80, icon: Code2, description: "Frontend & Backend Development" },
    { name: "React", level: 75, icon: Rocket, description: "Dynamic UI & State Management" },
    { name: "Node.js", level: 70, icon: Terminal, description: "Backend APIs & Services" },
    { name: "MySQL", level: 80, icon: Database, description: "Database Design & Queries" },
    { name: "Tailwind CSS", level: 85, icon: Star, description: "Utility-First Styling Framework" },
    { name: "Git & GitHub", level: 80, icon: Github, description: "Version Control & Collaboration" }
  ];

  const projects = [
    {
      title: "MedCare – AI-Based Health Assistant",
      description: "Full-stack AI-powered health kit for real-time monitoring of vitals with role-based access for patients, doctors, and nurses.",
      stack: ["React.js", "Flask", "Python", "JavaScript", "CSS"],
      github: "https://github.com/2306126/Vicky-/medcare"
    },
    {
      title: "Web Scraper Application",
      description: "Built a scalable scraper with Node.js backend for fetching structured data and React frontend for live visualization.",
      stack: ["JavaScript", "Node.js", "React.js"],
      github: "https://github.com/2306126/Vicky-/web-scraper"
    },
    {
      title: "Radar Detection System",
      description: "Designed an ultrasonic/radar system for distance measurement and object tracking with Arduino + Python visualization.",
      stack: ["Arduino", "Python", "Sensors", "Embedded Systems"],
      github: "https://github.com/2306126/Vicky-/radar-detection"
    }
  ];

  const features = [
    { icon: Rocket, title: "Fast Learner", description: "Quick to adapt and master new technologies" },
    { icon: Code2, title: "Problem Solver", description: "Love tackling complex coding challenges" },
    { icon: Star, title: "Detail Oriented", description: "Focus on clean, efficient code" },
    { icon: Globe, title: "Team Player", description: "Collaborate effectively in group projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b shadow-soft' 
          : 'bg-background/60 backdrop-blur-md border-b-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-tech bg-clip-text text-transparent">
              Vikas Mutalwad
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "certifications", "achievements", "participation", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent/10 ${
                    activeSection === section 
                      ? "text-accent font-medium bg-accent/5" 
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-tech"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-tech-light/30 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Briefcase className="h-6 w-6 text-accent mx-auto mb-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <Card key={proj.title} className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                    <p className="text-muted-foreground mb-4">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">{tech}</Badge>
                      ))}
                    </div>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5 group">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <BookOpen className="h-6 w-6 text-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "C++ Programming (Infosys Springboard)",
              "Relational Database Management System (Infosys Springboard)",
              "Introduction to Oracle: SQL (Infosys Springboard)",
              "HTML & CSS for Beginners with HTML5 (Infosys Springboard)"
            ].map((cert) => (
              <Card key={cert} className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30">
                <CardContent className="p-6 text-center">
                  <Star className="h-6 w-6 text-accent mx-auto mb-3" />
                  <p>{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="relative py-20 bg-tech-light/30 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="h-6 w-6 text-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
            <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">350+ DSA Problems Solved</h3>
                <p className="text-muted-foreground">
                  Solved challenges on <strong>LeetCode</strong>, <strong>GeeksforGeeks</strong>, and <strong>CodeStudio</strong> to enhance problem-solving skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Participation */}
      <section id="participation" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-6 w-6 text-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Participation</h2>
            <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Brain Teaser</h3>
                <p className="text-muted-foreground text-sm">Technical Event at Pimpri Chinchwad Polytechnic</p>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Project & Poster Exhibition</h3>
                <p className="text-muted-foreground text-sm">Bharati Vidyapeeth College of Engineering, Pune</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
