import { useState, useEffect } from "react";
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
  Github,
  Sparkles,
  Terminal,
  Rocket,
  Globe,
  Star,
  ChevronDown,
  ArrowRight,
  Zap
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // === Skills array with resume additions ===
  const skills = [
    { name: "C", level: 85, icon: Terminal, description: "System Programming & Data Structures" },
    { name: "C++", level: 80, icon: Code2, description: "Object-Oriented Programming & Algorithms" },
    { name: "Python", level: 75, icon: Sparkles, description: "Data Science & Web Development" },
    { name: "Java", level: 70, icon: Zap, description: "Enterprise Applications & Backend" },
    { name: "HTML", level: 90, icon: Globe, description: "Modern Web Structure & Semantics" },
    { name: "CSS", level: 85, icon: Star, description: "Responsive Design & Animations" },

    // Resume additions
    { name: "JavaScript", level: 80, icon: Zap, description: "Dynamic Web Applications" },
    { name: "Tailwind CSS", level: 85, icon: Star, description: "Utility-first CSS framework" },
    { name: "React", level: 85, icon: Sparkles, description: "Frontend Framework" },
    { name: "TypeScript", level: 75, icon: Code2, description: "Type-safe JavaScript" },
    { name: "Node.js", level: 75, icon: Terminal, description: "Backend Development" },
    { name: "MySQL", level: 70, icon: Globe, description: "Relational Database Management" },
    { name: "Git & GitHub", level: 90, icon: Github, description: "Version Control & Collaboration" },
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
              {["home", "about", "skills", "projects", "contact"].map((section) => (
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

      {/* ...All other unchanged sections above... */}

      {/* Skills Section */}
      <section id="skills" className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-tech rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent rounded-full blur-3xl opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">What I know</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Technical Skills</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies I've mastered through hands-on learning and practical application
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 hover:shadow-glow transition-all duration-500 animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <skill.icon className="h-5 w-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold">
                        {skill.level}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium">
                          {skill.level >= 80 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-tech h-full rounded-full transition-all duration-1000 ease-out relative group-hover:shadow-inner"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Skills summary remains unchanged */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-tech-light/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-56 h-56 bg-gradient-tech rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-accent rounded-full blur-3xl opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">My work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Exciting projects in development that will showcase my programming skills and creativity
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Existing project cards... */}

              {/* Resume projects added below */}
              <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">MedCare – AI Health Assistant Kit</h3>
                  <p className="text-muted-foreground mb-2">
                    Full-stack AI-powered assistant kit for real-time vitals monitoring, multi-role access, and SOS simulation.
                  </p>
                  <div className="mb-2 text-sm text-accent font-medium">Tech: React.js, Flask, Python, JS</div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Complete</Badge>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                      <Terminal className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Radar Detection System</h3>
                  <p className="text-muted-foreground mb-2">
                    Radar prototype for object detection and tracking, using ultrasonic/RF sensors with live visualization in Python.
                  </p>
                  <div className="mb-2 text-sm text-accent font-medium">Tech: Arduino, Sensors, Python</div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Complete</Badge>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                      <Code2 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Web Scraper Application</h3>
                  <p className="text-muted-foreground mb-2">
                    Developed a scraper with Node.js backend and React frontend to extract, process, and display web data dynamically.
                  </p>
                  <div className="mb-2 text-sm text-accent font-medium">Tech: JavaScript, Node.js, React.js</div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Complete</Badge>
                </CardContent>
              </Card>
              {/* ...existing cards can remain below or above... */}
            </div>
            {/* GitHub section remains unchanged */}
          </div>
        </div>
      </section>
      
      {/* ...All other unchanged sections below... */}

    </div>
  );
};

export default Index;
