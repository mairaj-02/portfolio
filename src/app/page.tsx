"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ChevronDown,
  Zap,
  CircuitBoard,
  Cpu,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Github,
  Menu,
  X,
  Code,
  Calculator,
  Puzzle,
  Instagram,
  MessageCircle,
  Database,
  Wrench,
  Monitor,
  Server,
  HardDrive,
  Zap as Bolt,
  Palette,
  Terminal,
  Globe,
  FileText,
  MessageSquare,
} from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const scrollElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right"
    );
    scrollElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtMjAtMjBNMTAgNTBtNDAtNDBNMTAgMTBtNDAgNDBNMTAgMzBoNDBNMTAgMjBoNDBNMTAgNDBoNDBNMjAgMTB2NDBNMzAgMTB2NDBNNDAgMTB2NDBiLTEuNjY3LjAwMy0zLjMzMy0uMDAzLTUtLjAxIiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjMiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full nav-tech-bg-enhanced z-50">
          <div className="nav-icon-bg-enhanced"></div>
          <div className="container mx-auto px-4 py-3 relative z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Cpu className="h-16 w-16 text-blue-400 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-60 animate-ping-slow"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-30 animate-spin-super-slow"></div>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-pulse-glow">
                    Mairaj's Portfolio
                  </span>
                  <div className="text-sm md:text-base text-blue-400 font-bold tracking-widest animate-glow">
                    ⚡ ELECTRICAL ENGINEER ⚡
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-10">
                {[
                  "home",
                  "skills",
                  "experience",
                  "projects",
                  "education",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link-animate-enhanced ${
                      activeSection === section
                        ? "text-blue-400 nav-active"
                        : "text-gray-300"
                    }`}
                  >
                    <span className="nav-text-enhanced">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Navigation */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-blue-400"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gray-900/98 backdrop-blur-md border-l border-blue-500/30"
                >
                  <div className="flex flex-col space-y-8 mt-10">
                    {[
                      "home",
                      "skills",
                      "experience",
                      "projects",
                      "education",
                      "contact",
                    ].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`text-2xl font-bold transition-all duration-300 hover:text-blue-400 text-left nav-link-animate-enhanced ${
                          activeSection === section
                            ? "text-blue-400 nav-active"
                            : "text-gray-300"
                        }`}
                      >
                        <span className="nav-text-enhanced">
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative pt-12"
        >
          <div className="container mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-6 md:mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-orange-500 p-1 rounded-full">
                    <div className="bg-gray-900 p-6 md:p-8 rounded-full">
                      <CircuitBoard className="h-20 w-20 md:h-24 md:w-24 text-blue-400 animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-10 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                MUHAMMAD MAIRAJ
              </h1>

              <div className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 text-gray-300 font-bold">
                <span className="inline-block animate-pulse text-2xl md:text-3xl">
                  ⚡
                </span>
                <span className="mx-6 font-black text-blue-400">
                  ELECTRICAL ENGINEER
                </span>
                <span className="inline-block animate-pulse text-2xl md:text-3xl">
                  ⚡
                </span>
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl mb-14 md:mb-18 max-w-5xl mx-auto text-gray-300 leading-relaxed px-4 font-black">
                Innovating at the intersection of{" "}
                <span className="text-blue-400">AI</span>,{" "}
                <span className="text-orange-400">Data Analysis</span>, and{" "}
                <span className="text-blue-400">Electrical Systems</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-14 md:mb-18 px-4">
                <Button
                  onClick={() => scrollToSection("skills")}
                  className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-black py-8 px-16 md:px-20 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-2xl md:text-3xl animate-electric-pulse text-xl md:text-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10">EXPERTISE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-black py-8 px-16 md:px-20 rounded-full transition-all duration-300 transform hover:scale-105 text-2xl md:text-3xl text-xl md:text-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10">CONNECT</span>
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            <div className="animate-bounce mt-8 md:mt-16">
              <ChevronDown className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto animate-pulse" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            {/* Technical Expertise */}
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                TECHNICAL EXPERTISE
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Programming Languages",
                  icon: (
                    <Terminal className="h-16 w-16 text-blue-400 skill-icon-enhanced animate-pulse-slow" />
                  ),
                  skills: [
                    "Python",
                    "C/C++",
                    "JavaScript",
                    "R",
                    "MATLAB",
                    "TypeScript",
                    "SQL",
                  ],
                  level: 90,
                },
                {
                  title: "Electronics & Hardware",
                  icon: (
                    <CircuitBoard className="h-16 w-16 text-orange-400 skill-icon-enhanced animate-spin-slow" />
                  ),
                  skills: [
                    "Arduino",
                    "Raspberry Pi",
                    "BJTs",
                    "MOSFETs",
                    "Op-Amps",
                    "PCB Design",
                    "Sensors",
                  ],
                  level: 85,
                },
                {
                  title: "Software Tools",
                  icon: (
                    <Wrench className="h-16 w-16 text-blue-400 skill-icon-enhanced animate-pulse-glow" />
                  ),
                  skills: [
                    "AutoCAD",
                    "SolidWorks",
                    "VS Code",
                    "PSpice",
                    "Simulink",
                    "LabVIEW",
                    "Multisim",
                  ],
                  level: 80,
                },
                {
                  title: "Web Development",
                  icon: (
                    <Monitor className="h-16 w-16 text-orange-400 skill-icon-enhanced animate-float" />
                  ),
                  skills: [
                    "React",
                    "FastAPI",
                    "Flask",
                    "D3.js",
                    "Git",
                    "HTML/CSS",
                    "Node.js",
                  ],
                  level: 75,
                },
                {
                  title: "Data Analysis",
                  icon: (
                    <Database className="h-16 w-16 text-blue-400 skill-icon-enhanced animate-pulse-slow" />
                  ),
                  skills: [
                    "Machine Learning",
                    "Python",
                    "Jupyter",
                    "R",
                    "Data Visualization",
                    "Pandas",
                    "NumPy",
                  ],
                  level: 85,
                },
                {
                  title: "Equipment",
                  icon: (
                    <HardDrive className="h-16 w-16 text-orange-400 skill-icon-enhanced animate-spin-super-slow" />
                  ),
                  skills: [
                    "Oscilloscope",
                    "Signal Generator",
                    "DC Supply",
                    "Multimeter",
                    "Soldering",
                    "Logic Analyzer",
                    "Spectrum Analyzer",
                  ],
                  level: 88,
                },
              ].map((skill, index) => (
                <Card
                  key={skill.title}
                  className={`skill-card-enhanced scroll-animate ${
                    index % 2 === 0
                      ? "scroll-animate-left"
                      : "scroll-animate-right"
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="p-4 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-full">
                        {skill.icon}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-black text-white">
                        {skill.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-wrap justify-center gap-3">
                        {skill.skills.map((s) => (
                          <span
                            key={s}
                            className="skill-tag-enhanced text-lg font-bold py-3 px-5 text-center min-w-[120px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills & Languages Section */}
            <div className="text-center mb-16 mt-20">
              <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                SKILLS & LANGUAGES
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
              {/* Soft Skills Card */}
              <Card className="skill-card-enhanced scroll-animate scroll-animate-left">
                <CardHeader>
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="p-4 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-full">
                      <MessageCircle className="h-16 w-16 text-green-400 skill-icon-enhanced animate-pulse-glow" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-black text-white">
                      SOFT SKILLS
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Problem Solving",
                        "Team Leadership",
                        "Communication",
                        "Project Management",
                        "Critical Thinking",
                        "Time Management",
                      ].map((skill, index) => (
                        <div
                          key={skill}
                          className="flex justify-center items-center p-3 bg-gray-800/50 rounded-lg"
                        >
                          <span className="text-lg font-bold text-gray-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="skill-card-enhanced scroll-animate scroll-animate-right">
                <CardHeader>
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full">
                      <Globe className="h-16 w-16 text-purple-400 skill-icon-enhanced animate-pulse-slow" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-black text-white">
                      LANGUAGES
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          language: "English",
                          level: "Native",
                          icon: (
                            <svg
                              className="h-8 w-8 text-purple-400"
                              viewBox="0 0 64 64"
                              fill="none"
                            >
                              <path
                                d="M16 12C16 8.68629 18.6863 6 22 6H42C45.3137 6 48 8.68629 48 12V40C48 43.3137 45.3137 46 42 46H28L20 54V46H22C18.6863 46 16 43.3137 16 40V12Z"
                                fill="currentColor"
                                fillOpacity="0.2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <text
                                x="32"
                                y="35"
                                textAnchor="middle"
                                fill="currentColor"
                                fontSize="16"
                                fontWeight="bold"
                                fontFamily="Arial"
                              >
                                EN
                              </text>
                            </svg>
                          ),
                        },
                        {
                          language: "Urdu",
                          level: "Native",
                          icon: (
                            <svg
                              className="h-8 w-8 text-blue-400"
                              viewBox="0 0 64 64"
                              fill="none"
                            >
                              <rect
                                x="12"
                                y="12"
                                width="40"
                                height="32"
                                rx="4"
                                fill="currentColor"
                                fillOpacity="0.2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <text
                                x="20"
                                y="40"
                                textAnchor="middle"
                                fill="currentColor"
                                fontSize="14"
                                fontWeight="bold"
                                fontFamily="Arial"
                              >
                                ر
                              </text>
                              <text
                                x="44"
                                y="40"
                                textAnchor="middle"
                                fill="currentColor"
                                fontSize="14"
                                fontWeight="bold"
                                fontFamily="Arial"
                              >
                                د
                              </text>
                            </svg>
                          ),
                        },
                        {
                          language: "Mandarin",
                          level: "Beginner",
                          icon: (
                            <svg
                              className="h-8 w-8 text-orange-400"
                              viewBox="0 0 64 64"
                              fill="none"
                            >
                              <path
                                d="M16 12C16 8.68629 18.6863 6 22 6H42C45.3137 6 48 8.68629 48 12V40C48 43.3137 45.3137 46 42 46H28L20 54V46H22C18.6863 46 16 43.3137 16 40V12Z"
                                fill="currentColor"
                                fillOpacity="0.2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <text
                                x="32"
                                y="35"
                                textAnchor="middle"
                                fill="currentColor"
                                fontSize="16"
                                fontWeight="bold"
                                fontFamily="serif"
                              >
                                文
                              </text>
                            </svg>
                          ),
                        },
                      ].map((item, index) => (
                        <div
                          key={item.language}
                          className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="text-lg font-bold text-gray-300">
                              {item.language}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">
                            {item.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                EXPERIENCE
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto px-4 font-black">
                Real-world applications of electrical engineering and software
                development expertise
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>

                {[
                  {
                    company: "HYR",
                    role: "Software and Design Intern",
                    period: "July 2025 - Aug 2025",
                    description:
                      "Redesigned UI/UX of staffing solution app using Figma, improving shift-booking flows and reducing user complaints by 30% while boosting worker sign-up conversion by 25%",
                    achievements: [
                      "Redesigned UI/UX using Figma",
                      "Improved shift-booking flows",
                      "Reduced user complaints by 30%",
                      "Increased worker sign-up by 25%",
                      "Enhanced app stability by 40%",
                    ],
                  },
                  {
                    company: "Gryfyn",
                    role: "Data Analyst Intern",
                    period: "Mar 2025 - Apr 2025",
                    description:
                      "Conducted rigorous testing and developed new features for Mootiez social platform, collecting user feedback from 500+ users to drive product improvements",
                    achievements: [
                      "Built Flask-based analytics dashboard",
                      "Collected user feedback from 500+ users",
                      "Aggregated multi-platform user data",
                      "Accelerated team decisions by 20%",
                    ],
                  },
                  {
                    company: "Century Innovation Labs",
                    role: "Software Engineer Intern",
                    period: "July 2024 - Aug 2024",
                    description:
                      "Developed React web app with Chatbot for Chinese Literature education at Chinese University of Hong Kong, empowering 1500+ students to improve language proficiency",
                    achievements: [
                      "Developed React web application",
                      "Engineered prompt-based chatbots",
                      "Built Flutter app for essay scanning",
                      "Enhanced language learning tools",
                    ],
                  },
                ].map((exp, index) => (
                  <div
                    key={exp.company}
                    className={`relative mb-8 md:mb-12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Timeline dot - centered on mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      } mt-6 md:mt-0`}
                    >
                      <Card className="skill-card-enhanced">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                            <div className="text-left">
                              <CardTitle className="text-2xl md:text-3xl font-black text-white">
                                {exp.role}
                              </CardTitle>
                              <CardDescription className="text-xl text-blue-400 font-black">
                                {exp.company}
                              </CardDescription>
                              <p className="text-base text-gray-400 font-bold">
                                {exp.period}
                              </p>
                            </div>
                            <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-orange-400 flex-shrink-0 skill-icon-enhanced" />
                          </div>
                        </CardHeader>
                        <CardContent className="text-left">
                          <p className="text-gray-300 mb-6 text-xl font-black leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="space-y-3">
                            <h4 className="text-xl font-black text-orange-400">
                              KEY ACHIEVEMENTS:
                            </h4>
                            {exp.achievements.map((achievement) => (
                              <div
                                key={achievement}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                <span className="text-gray-300 font-bold text-lg">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                FEATURED PROJECTS
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto px-4 font-black">
                Innovative projects combining electrical engineering, data
                analysis, and software development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  title: "PolyU GUR Course Reviews Platform",
                  role: "Personal Project",
                  description:
                    "Full-stack web platform with Flask, SQLite, and Bootstrap 5 enabling PolyU students to discover, review, and rate 50+ courses across all GUR categories",
                  technologies: [
                    "Flask",
                    "SQLite",
                    "Bootstrap 5",
                    "Python",
                    "Web Development",
                    "Database Design",
                    "Frontend Development",
                  ],
                  highlights: [
                    "Integrated 50+ courses across all GUR categories",
                    "Implemented grade distribution analytics",
                    "Added teacher ratings system",
                    "Created personalized dashboards",
                    "Projected to reduce course-selection inquiries by 60%",
                  ],
                },
                {
                  title: "Sound Level Analyzer for PolyU Library",
                  role: "Data Analyst",
                  description:
                    "Real-time noise monitoring system using Python, FastAPI, and D3.js for library floor visualization in a team of 4",
                  technologies: [
                    "Python",
                    "FastAPI",
                    "D3.js",
                    "Redis",
                    "Data Analysis",
                    "WebSockets",
                    "Real-time Processing",
                  ],
                  highlights: [
                    "Coordinated data collection from sound sensors",
                    "Developed web visualization tool",
                    "Color-coded noise level categorization",
                    "Real-time dashboard for library management",
                  ],
                },
                {
                  title: "3-Phase Brushless Permanent Magnet Generator",
                  role: "Arduino Programmer",
                  description:
                    "Designed and constructed brushless PMG with Arduino-based power monitoring system in a team of 6",
                  technologies: [
                    "Arduino",
                    "INA219 Sensor",
                    "Electromagnetism",
                    "Power Systems",
                    "Hardware Design",
                    "Circuit Design",
                    "Power Electronics",
                  ],
                  highlights: [
                    "Designed stator with copper coils",
                    "Created rotor with aligned magnets",
                    "Real-time power monitoring display",
                    "Efficient energy conversion system",
                  ],
                },
                {
                  title: "PolyU Industrial Centre Lighting Design",
                  role: "Engineering Design",
                  description:
                    "Developed detailed lighting system layout in AutoCAD for PolyU's Industrial Centre, ensuring compliance with illumination standards and reducing power consumption by 15%",
                  technologies: [
                    "AutoCAD",
                    "Lighting Design",
                    "Electrical Systems",
                    "Building Services",
                    "Energy Efficiency",
                    "Safety Standards",
                  ],
                  highlights: [
                    "Designed lighting system layout",
                    "Ensured compliance with standards",
                    "Calculated lighting loads",
                    "Reduced power consumption by 15%",
                  ],
                },
                {
                  title: "EV Car Park MEP Design",
                  role: "Engineering Design",
                  description:
                    "Designed full MEP layout for electric vehicle car park using AutoCAD, focusing on electrical distribution and safety systems with emphasis on energy optimization",
                  technologies: [
                    "AutoCAD",
                    "MEP Design",
                    "Electrical Distribution",
                    "Ventilation Systems",
                    "Building Services",
                    "Energy Optimization",
                  ],
                  highlights: [
                    "Designed complete MEP layout",
                    "Optimized energy efficiency",
                    "Applied building services principles",
                    "Prepared scalable design documentation",
                  ],
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className={`skill-card-enhanced scroll-animate ${
                    index === 0 ? "scroll-animate-left" : "scroll-animate-right"
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <div className="text-left">
                        <CardTitle className="text-3xl md:text-4xl font-black text-white mb-4">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-2xl text-blue-400 font-black">
                          {project.role}
                        </CardDescription>
                      </div>
                      <Zap className="h-16 w-16 text-orange-400 animate-pulse skill-icon-enhanced" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="text-gray-300 mb-8 text-xl font-black leading-relaxed">
                      {project.description}
                    </p>

                    <div className="project-highlight-enhanced">
                      <h4 className="text-2xl font-black text-blue-400 mb-6 text-center">
                        TECHNOLOGIES USED:
                      </h4>
                      <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="tech-badge-enhanced text-lg font-bold py-3 px-6 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-highlight-enhanced">
                      <h4 className="text-2xl font-black text-orange-400 mb-6 text-center">
                        KEY ACHIEVEMENTS:
                      </h4>
                      <div className="space-y-4">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-600/10 to-orange-600/10 rounded-lg hover:from-blue-600/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-102"
                          >
                            <div className="w-4 h-4 bg-orange-400 rounded-full mt-3 flex-shrink-0 animate-pulse shadow-lg"></div>
                            <span className="text-gray-300 font-bold text-lg leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <div className="flex justify-center mt-8">
                      <a
                        href="https://www.linkedin.com/in/muhammad-mairaj/details/projects/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-black py-4 px-8 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 text-lg md:text-xl shadow-lg hover:shadow-blue-500/25">
                          VIEW PROJECT
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                EDUCATION
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto px-4 font-black">
                Academic excellence and continuous learning in electrical
                engineering
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="education-card-enhanced mb-12 md:mb-16 scroll-animate animate-glow-pulse">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-full">
                        <GraduationCap className="h-24 w-24 md:h-28 md:w-28 text-blue-400 skill-icon-enhanced animate-pulse-slow" />
                      </div>
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-3xl md:text-4xl font-black text-white mb-4">
                        The Hong Kong Polytechnic University
                      </CardTitle>
                      <CardDescription className="text-2xl text-blue-400 font-black">
                        Bachelor of Engineering (Honors) in Electrical
                        Engineering
                      </CardDescription>
                      <p className="text-xl text-gray-400 font-bold">
                        Aug 2023 - May 2027 (Expected) | CGPA: 3.45
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="text-2xl font-black text-orange-400 mb-8">
                    RELEVANT COURSEWORK:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { course: "Electronics", grade: "A" },
                      { course: "AI and Data Analytics", grade: "B+" },
                      { course: "Python Programming", grade: "A-" },
                      { course: "Electrical Energy Systems", grade: "A-" },
                    ].map((item) => (
                      <div
                        key={item.course}
                        className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600/10 to-orange-600/10 rounded-xl hover:from-blue-600/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
                      >
                        <span className="text-xl text-gray-300 font-black">
                          {item.course}
                        </span>
                        <span className="grade-badge-enhanced text-lg font-bold py-2 px-4 shadow-lg">
                          {item.grade}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-2xl font-black text-blue-400 mb-8 mt-12">
                    OVERSEAS LEARNING:
                  </h4>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl hover:from-green-600/20 hover:to-blue-600/20 transition-all duration-300 transform hover:scale-102 border border-green-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-4 h-4 bg-green-400 rounded-full mt-3 flex-shrink-0 animate-pulse shadow-lg"></div>
                        <div>
                          <h5 className="text-xl font-black text-green-400 mb-2">
                            Mathematics and AI at Cambridge University
                          </h5>
                          <p className="text-lg text-gray-300 font-bold mb-2">
                            Summer 2025
                          </p>
                          <p className="text-gray-400 font-bold">
                            Linear Algebra, Data Analysis, AI Algorithms, Python
                            Programming
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 transform hover:scale-102 border border-purple-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-4 h-4 bg-purple-400 rounded-full mt-3 flex-shrink-0 animate-pulse shadow-lg"></div>
                        <div>
                          <h5 className="text-xl font-black text-purple-400 mb-2">
                            Engineering Entrepreneurship at NU Singapore
                          </h5>
                          <p className="text-lg text-gray-300 font-bold mb-2">
                            Summer 2025
                          </p>
                          <p className="text-gray-400 font-bold">
                            Engineering Entrepreneurship, Problem Solving,
                            Communication, Pitching
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="education-card-enhanced scroll-animate scroll-animate-left animate-glow-pulse">
                  <CardHeader>
                    <div className="flex items-center space-x-6">
                      <div className="p-4 bg-gradient-to-br from-orange-600/20 to-blue-600/20 rounded-full">
                        <Award className="h-20 w-20 md:h-24 md:w-24 text-orange-400 skill-icon-enhanced animate-pulse-glow" />
                      </div>
                      <CardTitle className="text-3xl md:text-4xl font-black text-white">
                        AWARDS
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        "PolyU Full Ride Entry Scholarship",
                        "Gold Medal & Government Scholarship (94% HSSC)",
                        "Duke of Edinburgh's International Bronze Award",
                      ].map((award) => (
                        <div
                          key={award}
                          className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-600/10 to-blue-600/10 rounded-xl hover:from-orange-600/20 hover:to-blue-600/20 transition-all duration-300 transform hover:scale-102 border border-orange-500/20"
                        >
                          <div className="w-4 h-4 bg-orange-400 rounded-full mt-3 flex-shrink-0 animate-pulse shadow-lg"></div>
                          <span className="text-xl text-gray-300 font-black leading-relaxed">
                            {award}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="education-card-enhanced scroll-animate scroll-animate-right animate-glow-pulse">
                  <CardHeader>
                    <div className="flex items-center space-x-6">
                      <div className="p-4 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-full">
                        <Cpu className="h-20 w-20 md:h-24 md:w-24 text-blue-400 skill-icon-enhanced animate-spin-slow" />
                      </div>
                      <CardTitle className="text-3xl md:text-4xl font-black text-white">
                        ACTIVITIES
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        "Arduino Programmer - Underwater Robotics Team",
                        "Technical Lead - Google Developers Group",
                        "Internal Vice President - Hall Community Service",
                      ].map((activity) => (
                        <div
                          key={activity}
                          className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-600/10 to-orange-600/10 rounded-xl hover:from-blue-600/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-102 border border-blue-500/20"
                        >
                          <div className="w-4 h-4 bg-blue-400 rounded-full mt-3 flex-shrink-0 animate-pulse shadow-lg"></div>
                          <span className="text-xl text-gray-300 font-black leading-relaxed">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent text-glitch-enhanced">
                LET'S CONNECT
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto px-4 text-decrypt-enhanced font-black">
                Ready to collaborate on innovative electrical engineering and
                software development projects
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="contact-card-enhanced scroll-animate">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-black text-white text-center">
                    GET IN TOUCH
                  </CardTitle>
                  <CardDescription className="text-center text-gray-400 text-xl font-black">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hello!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Mail className="h-10 w-10 md:h-12 md:w-12 text-blue-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          EMAIL
                        </p>
                        <p className="text-xl md:text-2xl text-white break-all font-black">
                          muhammad.mairaj@connect.polyu.hk
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Phone className="h-10 w-10 md:h-12 md:w-12 text-orange-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          PHONE
                        </p>
                        <p className="text-xl md:text-2xl text-white font-black">
                          +852 5665 5018
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Linkedin className="h-10 w-10 md:h-12 md:w-12 text-blue-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          LINKEDIN
                        </p>
                        <a
                          href="https://www.linkedin.com/in/muhammad-mairaj/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors text-xl md:text-2xl break-all font-black"
                        >
                          linkedin.com/in/muhammad-mairaj/
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Github className="h-10 w-10 md:h-12 md:w-12 text-gray-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          GITHUB
                        </p>
                        <a
                          href="https://github.com/mairaj-02"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-300 transition-colors text-xl md:text-2xl break-all font-black"
                        >
                          github.com/mairaj-02
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Instagram className="h-10 w-10 md:h-12 md:w-12 text-pink-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          INSTAGRAM
                        </p>
                        <a
                          href="https://instagram.com/arey_mairaj"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 transition-colors text-xl md:text-2xl font-black"
                        >
                          @arey_mairaj
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-green-400 contact-icon-enhanced" />
                      <div>
                        <p className="text-xl text-gray-400 font-black">
                          WHATSAPP
                        </p>
                        <a
                          href="https://wa.me/85256655018"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors text-xl md:text-2xl font-black"
                        >
                          +852 5665 5018
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Download CV Button outside the card */}
              <div className="flex justify-center mt-8">
                <a
                  href="/Muhammad_Mairaj_CV_detailed.pdf"
                  download="Muhammad_Mairaj_CV.pdf"
                  className="inline-block"
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-black py-6 px-12 md:px-16 rounded-full transition-all duration-300 transform hover:scale-105 text-xl md:text-2xl animate-electric-pulse">
                    DOWNLOAD CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-blue-500/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 text-xl font-black">
              © 2025 Muhammad Mairaj. Designed with{" "}
              <span className="text-blue-400 text-2xl">⚡</span> and{" "}
              <span className="text-orange-400 text-2xl">🔧</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
