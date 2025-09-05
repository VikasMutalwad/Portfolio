import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import emailjs from "emailjs-com";

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
// ContactForm component - separated from main Index
const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSending(true);

  try {
    await emailjs.sendForm(
      "service_v6j1i45",
      "template_b0rdih4",
      e.currentTarget,
      "knZ0oPYR0jKRitTY_"
    );
    alert("Message sent successfully!");
    e.currentTarget.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Failed to send message, please try again.");
  } finally {
    setSending(false);
  }
};


  return (
    <form onSubmit={sendEmail} className="space-y-6" name="contact">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Your Name</label>
          <Input
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent/20 bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email Address</label>
          <Input
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent/20 bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Subject</label>
        <Input
          name="subject"
          type="text"
          placeholder="What's this about?"
          required
          className="border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent/20 bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Message</label>
        <Textarea
          name="message"
          placeholder="Tell me about your project, idea, or just say hello!"
          rows={6}
          required
          className="border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent/20 bg-background/50 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-gradient-tech hover:shadow-glow transition-all duration-300 group"
      >
        <MessageSquare className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
        {sending ? "Sending..." : "Send Message"}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};


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

  // Additions from resume
  { name: "JavaScript", level: 80, icon: Zap, description: "Dynamic Web Applications" },
  { name: "TypeScript", level: 70, icon: Code2, description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", level: 85, icon: Star, description: "Utility-first CSS framework" },
  { name: "React", level: 85, icon: Sparkles, description: "Frontend Framework" },
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-primary rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Welcome to my portfolio</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Hi, I'm <span className="bg-gradient-tech bg-clip-text text-transparent">Vikas</span>
                  </h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-lg md:text-xl text-muted-foreground">
                    <span>Computer Engineering Student</span>
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>Programmer</span>
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>Problem Solver</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Aspiring Software Developer with a passion for crafting elegant solutions 
                  through clean code and innovative thinking.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="/Vikas_Mutalwad.pdf" download="Vikas_Mutalwad_Resume.pdf">
                    <Button variant="default" size="lg" className="bg-gradient-tech hover:shadow-glow transition-all duration-300 group">
                     <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="border-accent/30 hover:border-accent hover:bg-accent/5 group"
                  >
                    <MessageSquare className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </Button>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                  <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="text-sm">Scroll to explore</span>
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center animate-scale-in">
                <div className="relative group">
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-tech rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Main Image */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-tech border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-500">
                    <img 
                      src="/lovable-uploads/myphoto.png"
                      alt="Vikas Mutalwad - Professional Profile"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 animate-float">
                    <div className="bg-gradient-tech p-4 rounded-full shadow-glow hover:shadow-tech transition-all duration-300 cursor-pointer">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 animate-float" style={{animationDelay: '1s'}}>
                    <div className="bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-soft border border-accent/20">
                      <Rocket className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -left-8 animate-float" style={{animationDelay: '2s'}}>
                    <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg shadow-soft border border-accent/20">
                      <Terminal className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-background/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-tech-light/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-tech rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">Get to know me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate about technology and driven by curiosity to solve complex problems
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Story Card */}
              <div className="lg:col-span-2 space-y-6 animate-slide-in">
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Sparkles className="h-6 w-6 text-accent" />
                      My Journey
                    </h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        I am a dedicated Computer Engineering student at Government Polytechnic Pune, 
                        currently in my 3rd year. My academic journey began with achieving 94.20% in 
                        my 10th grade, setting a strong foundation for my technical pursuits.
                      </p>
                      <p className="leading-relaxed">
                        My passion for programming ignited early, and I've since devoted myself to 
                        mastering various technologies. From low-level system programming in C to 
                        modern web development, I love exploring how code can solve real-world problems.
                      </p>
                      <p className="leading-relaxed">
                        I believe in continuous learning and am always eager to embrace new challenges 
                        that push the boundaries of my technical skills.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Education & Stats */}
              <div className="space-y-6 animate-fade-in">
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                      <h3 className="text-xl font-semibold">Education</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                        <h4 className="font-semibold text-primary">Computer Engineering</h4>
                        <p className="text-sm text-muted-foreground">Government Polytechnic Pune</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="bg-accent/10 text-accent">3rd Year</Badge>
                          <Badge variant="outline">Current</Badge>
                      </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-primary">10th Grade</h4>
                        <p className="text-sm text-muted-foreground">Secondary Education</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-green-500 hover:bg-green-600">94.20%</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      Quick Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Years of Learning</span>
                        <span className="font-semibold">3+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Programming Languages</span>
                        <span className="font-semibold">6</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Current Focus</span>
                        <span className="font-semibold text-accent">Web Dev</span>
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
                  style={{animationDelay: `${index * 100}ms`}}
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
                        <span className="font-medium">{skill.level >= 80 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}</span>
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
            
            {/* Skills Summary */}
            <div className="bg-background/60 backdrop-blur-sm border border-accent/10 rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Skills Overview</h3>
                <p className="text-muted-foreground">Constantly evolving and learning new technologies</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">80%</div>
                  <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">∞</div>
                  <div className="text-sm text-muted-foreground">Growth Mindset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-tech rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-accent rounded-full blur-3xl opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">Academic Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Core Competencies</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential subjects mastered through comprehensive coursework and practical learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Data Structures & Algorithms", icon: Terminal, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20", borderColor: "border-blue-200 dark:border-blue-800" },
                { name: "Object Oriented Programming", icon: Code2, color: "text-purple-500", bgColor: "bg-purple-50 dark:bg-purple-950/20", borderColor: "border-purple-200 dark:border-purple-800" },
                { name: "Operating System", icon: Globe, color: "text-green-500", bgColor: "bg-green-50 dark:bg-green-950/20", borderColor: "border-green-200 dark:border-green-800" },
                { name: "Database Management System", icon: Star, color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-950/20", borderColor: "border-orange-200 dark:border-orange-800" },
                { name: "Computer Network", icon: Zap, color: "text-cyan-500", bgColor: "bg-cyan-50 dark:bg-cyan-950/20", borderColor: "border-cyan-200 dark:border-cyan-800" },
                { name: "Cyber Security", icon: Sparkles, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-950/20", borderColor: "border-red-200 dark:border-red-800" },
                { name: "IOT and Robotics", icon: Rocket, color: "text-indigo-500", bgColor: "bg-indigo-50 dark:bg-indigo-950/20", borderColor: "border-indigo-200 dark:border-indigo-800" }
              ].map((competency, index) => (
                <Card 
                  key={competency.name} 
                  className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 hover:shadow-glow transition-all duration-500 animate-scale-in group" 
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 ${competency.bgColor} ${competency.borderColor} border rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <competency.icon className={`h-6 w-6 ${competency.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                          {competency.name}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-tech rounded-full animate-progress-bar" 
                          style={{
                            width: '90%',
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Advanced understanding through coursework
                    </p>
                  </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Competency Stats */}
            <div className="mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground">Strong foundation in computer science fundamentals</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Core Subjects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">90%</div>
                  <div className="text-sm text-muted-foreground">Avg. Mastery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Years Study</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        {/* MedCare – AI Health Assistant Kit */}
        <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">MedCare – AI Health Assistant Kit</h3>
            <p className="text-muted-foreground mb-2">
              Full-stack AI-powered health assistant for real-time vitals monitoring, multi-role access, and SOS simulation.
            </p>
            <div className="mb-2 text-sm text-accent font-medium">Tech: React.js, Flask, Python, JS</div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Complete</Badge>
          </CardContent>
        </Card>
        {/* Web Scraper Application */}
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
        {/* Radar Detection System */}
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
        {/* Example: Web Development (existing card) */}
        <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group">
          <CardContent className="p-8 text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Development Project</h3>
            <p className="text-muted-foreground mb-4">
              A full-stack web application using modern technologies like React, Node.js, and databases.
            </p>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              In Development
            </Badge>
          </CardContent>
        </Card>
        {/* Example: Algorithm Visualizer (existing card) */}
        <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 animate-scale-in group" style={{animationDelay: '0.2s'}}>
          <CardContent className="p-8 text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                <Terminal className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <Code2 className="h-3 w-3 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Algorithm Visualizer</h3>
            <p className="text-muted-foreground mb-4">
              Interactive tool to visualize sorting and searching algorithms with step-by-step animations.
            </p>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Planning
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* GitHub Section (unchanged) */}
      <div className="bg-background/60 backdrop-blur-sm border border-accent/10 rounded-2xl p-8 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
        <div className="mb-6">
          <Github className="h-16 w-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Follow My Journey</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stay updated with my latest projects and contributions on GitHub.
            I'll be sharing my code and learning progress regularly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/VikasMutalwad" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5 group">
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View GitHub Profile
            </Button>
          </a>
          <Button variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5 group">
            <Star className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Star My Repos
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-tech rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">Let's connect</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-tech mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss opportunities, collaborations, or just have a chat about technology? 
                I'd love to hear from you!
              </p>
            </div>
           </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6 animate-slide-in">
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Mail className="h-6 w-6 text-accent" />
                    </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Email Me</h4>
                        <p className="text-sm text-muted-foreground mb-2">Drop me a line anytime</p>
                        <a 
                          href="mailto:muttalwadvikas@gmail.com" 
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          muttalwadvikas@gmail.com
                        </a>
                    </div>
                  </div>
                </CardContent>
                </Card>
                
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Phone className="h-6 w-6 text-accent" />
                    </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">Call Me</h4>
                        <p className="text-sm text-muted-foreground mb-2">Let's have a conversation</p>
                        <a 
                          href="tel:+919322807300" 
                          className="text-accent hover:underline text-sm font-medium"
                        />
                          +91 9322807300
                      </div>
                    </div>
                   </CardContent>
                </Card>
                
                <Card className="bg-background/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground mb-2">Professional networking</p>
                        <a 
                          href="https://www.linkedin.com/in/vikas-mutalwad-19585a326" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline text-sm font-medium flex items-center gap-1"
                        >
                          Connect with me
                          <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <ContactForm />

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
