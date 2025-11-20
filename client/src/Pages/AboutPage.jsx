import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Nav';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });

        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const services = [
        "Custom Software Development",
        "Enterprise Applications & Portals",
        "Cloud Solutions (Azure Deployment & Management)",
        "Database Design & Optimization (SQL Server)",
        "Web & Mobile Application Development",
        "Systems Integration & API Development",
        "IT Consulting & Digital Transformation",
        "Support, Maintenance & Managed Services"
    ];

    const technologies = {
        microsoft: [
            "C# / .NET Framework & .NET Core",
            "Microsoft SQL Server",
            "Microsoft Azure (Cloud Infrastructure, DevOps, App Services, Security)"
        ],
        web: [
            "ReactJS",
            "HTML5 / CSS3",
            "Bootstrap",
            "JavaScript / TypeScript",
            "jQuery"
        ],
        enterprise: [
            "J2EE (Java Enterprise Edition)",
            "RESTful APIs & Microservices Architecture",
            "Integration Services & Middleware Technologies"
        ],
        tools: [
            "Agile tools and CI/CD environments",
            "API management services",
            "Data analytics tools",
            "Reporting and dashboard frameworks"
        ]
    };

    const industries = [
        {
            name: "Financial Institutions",
            clients: ["Access Bank PLC Nigeria and its subsidiaries across Africa"],
            highlight: true
        },
        {
            name: "Healthcare Facilities",
            clients: ["Hospitals, diagnostic centers, ABCHealth Nigeria"]
        },
        {
            name: "Education",
            clients: ["School management solutions, training institutes, e-learning platforms"]
        },
        {
            name: "Legal Sector",
            clients: ["Law firms, case-management systems, The Law Crest, Reputation Plus Nig Ltd"]
        },
        {
            name: "Corporate Enterprises",
            clients: ["Coronation Capital, Paul & Paul Logistics"]
        },
        {
            name: "SMEs and Startups",
            clients: ["Finceptive, Ridan Express"]
        }
    ];

    const projects = [
        {
            name: "Access Bank PLC",
            description: "Comprehensive digital banking solutions deployed across 8 African countries, serving thousands of daily users with secure, scalable financial technology infrastructure.",
            scope: "Digital Banking Modules • Workflow Automation • Reporting Systems • HR & Payroll • Cloud Infrastructure",
            countries: ["Nigeria", "Angola", "Mozambique", "Kenya", "Cameroon", "Rwanda", "Zambia", "Ghana"],
            impact: "Multi-country banking operations • 1000+ daily users • Mission-critical applications",
            category: "banking"
        },
        {
            name: "ABCHealth Nigeria",
            description: "End-to-end healthcare management system handling patient records, diagnostic workflows, and healthcare facility management for medical institutions across Nigeria.",
            scope: "Healthcare Management System • Patient Records • Diagnostic Workflows • Facility Management",
            impact: "Comprehensive healthcare solution • Multiple facilities • Daily operational use",
            category: "healthcare"
        },
        {
            name: "Finceptive",
            description: "Modern financial technology platform providing innovative solutions for financial analysis and investment management.",
            scope: "FinTech Platform • Financial Analytics • Investment Management • Real-time Data Processing",
            url: "https://finceptive.co",
            impact: "Live production platform • Financial sector innovation • User-friendly interface",
            category: "fintech"
        },
        {
            name: "Ridan Express",
            description: "Complete e-commerce suite with inventory management, payment processing, and customer relationship management capabilities.",
            scope: "E-commerce Platform • Inventory Management • Payment Gateway • CRM Integration",
            url: "https://ridanexpress.vercel.app/",
            status: "In Development",
            impact: "Full e-commerce solution • Scalable architecture • Modern tech stack",
            category: "ecommerce"
        },
        {
            name: "Coronation Capital",
            description: "Financial solutions platform for investment management and capital market operations.",
            scope: "Investment Management • Financial Reporting • Portfolio Tracking",
            impact: "Financial sector expertise • Robust reporting systems • Secure data handling",
            category: "finance"
        },
        {
            name: "Legal Sector Solutions",
            description: "Comprehensive legal practice management systems for law firms including case management, document automation, and client relationship management.",
            scope: "Case Management Systems • Document Automation • Client Portals • Legal Workflows",
            clients: ["The Law Crest", "Reputation Plus Nig Ltd"],
            impact: "Streamlined legal operations • Multiple law firms • Document management",
            category: "legal"
        },
        {
            name: "Paul & Paul Logistics",
            description: "Custom enterprise logistics solution optimizing supply chain management, fleet tracking, and delivery operations.",
            scope: "Logistics Management • Supply Chain • Fleet Tracking • Delivery Optimization",
            impact: "Enterprise logistics solution • Operational efficiency • Custom business logic",
            category: "logistics"
        }
    ];

    const projectCategories = {
        banking: { label: "Banking & Finance", color: "bg-blue-100 text-blue-800" },
        healthcare: { label: "Healthcare", color: "bg-green-100 text-green-800" },
        fintech: { label: "FinTech", color: "bg-purple-100 text-purple-800" },
        ecommerce: { label: "E-commerce", color: "bg-orange-100 text-orange-800" },
        finance: { label: "Financial Services", color: "bg-indigo-100 text-indigo-800" },
        legal: { label: "Legal Tech", color: "bg-red-100 text-red-800" },
        logistics: { label: "Logistics", color: "bg-cyan-100 text-cyan-800" }
    };

    const coreValues = [
        {
            icon: "🚀",
            title: "Innovation",
            description: "Consistently building solutions that align with global standards.",
        },
        {
            icon: "🛡️",
            title: "Integrity",
            description: "Conducting business with transparency and professionalism.",
        },
        {
            icon: "⭐",
            title: "Excellence",
            description: "Ensuring top-quality delivery on every project.",
        },
        {
            icon: "👥",
            title: "Customer Satisfaction",
            description: "Helping clients achieve their business goals through reliable solutions.",
        },
        {
            icon: "📈",
            title: "Continuous Improvement",
            description: "Investing in capacity building and modern technologies.",
        }
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full mb-4"></div>
                    <div className="text-2xl font-bold text-gray-900">Bracknell</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/50 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div
                        className="border-l-4 border-green-500 pl-6 mb-8 transform transition-all duration-700"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Leading Technology Solutions Provider</span>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-light mb-8 leading-tight transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        About<br />
                        <span className="text-green-500 font-bold">Bracknell</span>
                    </h1>

                    <p
                        className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Empowering businesses with world-class digital products that operate efficiently,
                        scale seamlessly, and remain competitive in a rapidly evolving market.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 transform transition-all duration-1000"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <Link to="/Service">
                            <button className="px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-2xl">
                                Explore Our Services
                            </button>
                        </Link>

                        <Link to="/About">
                            <button className="px-8 py-4 border border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 font-medium transform hover:-translate-y-1">
                                View Our Portfolio
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div data-aos="fade-right" data-aos-delay="200">
                            <h2 className="text-4xl font-bold text-black mb-8">
                                Enterprise Software Development & Technology Solutions
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    <strong className="text-black">Bracknell Soft Tech Nigeria</strong> is a forward-thinking
                                    software development and technology solutions company committed to delivering world-class
                                    digital products that empower businesses to operate efficiently, scale seamlessly, and
                                    remain competitive in a rapidly evolving market.
                                </p>
                                <p className="text-lg">
                                    We specialize in designing, developing, and deploying robust enterprise applications
                                    using modern and reliable technologies, with a focus on Microsoft's development
                                    ecosystem and modern-day technologies.
                                </p>
                            </div>

                            <div
                                className="mt-12 p-6 bg-green-50 border-l-4 border-green-500 transform transition-all duration-500 hover:scale-105"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <h3 className="font-bold text-black text-lg mb-2">Our Team</h3>
                                <p className="text-gray-700">
                                    Highly skilled and certified professionals with years of hands-on experience in
                                    software engineering, cloud solutions, systems integration, cybersecurity, UI/UX design,
                                    and project management.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
                            <div className="border-l-4 border-green-500 pl-6 transform transition-all duration-500 hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                                <p className="text-gray-700">
                                    To be a leading technology partner renowned for innovation, quality software solutions,
                                    and exceptional customer satisfaction across Africa and beyond.
                                </p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6 transform transition-all duration-500 hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                                <p className="text-gray-700">
                                    To deliver secure, scalable, and intelligent software solutions that solve real-world
                                    business challenges through cutting-edge technologies, expert professionals, and a
                                    customer-centric approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-black mb-12 text-center"
                        data-aos="fade-up"
                    >
                        Core Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white rounded-2xl p-8"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110">
                                    <span className="text-2xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
                                <p className="text-gray-700">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Expertise */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-black mb-12 text-center"
                        data-aos="fade-up"
                    >
                        Technology Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div data-aos="fade-right" data-aos-delay="200">
                            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">Microsoft Technologies</h3>
                            <ul className="space-y-2">
                                {technologies.microsoft.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                                        data-aos="fade-right"
                                        data-aos-delay={300 + index * 100}
                                    >
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="200">
                            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">Web & Frontend Development</h3>
                            <ul className="space-y-2">
                                {technologies.web.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                                        data-aos="fade-left"
                                        data-aos-delay={300 + index * 100}
                                    >
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="400">
                            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">Enterprise & Backend Technologies</h3>
                            <ul className="space-y-2">
                                {technologies.enterprise.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                                        data-aos="fade-right"
                                        data-aos-delay={500 + index * 100}
                                    >
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="400">
                            <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">Other Tools & Technologies</h3>
                            <ul className="space-y-2">
                                {technologies.tools.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                                        data-aos="fade-left"
                                        data-aos-delay={500 + index * 100}
                                    >
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-black mb-12 text-center"
                        data-aos="fade-up"
                    >
                        Our Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-4 hover:bg-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transform transition-all duration-300 hover:scale-110">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <span className="text-gray-800 font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold text-black mb-12 text-center"
                        data-aos="fade-up"
                    >
                        Industries We Serve
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${industry.highlight ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                                    }`}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="text-xl font-bold text-black mb-3">{industry.name}</h3>
                                <p className="text-gray-700 text-sm">{industry.clients}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Projects & Achievements Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            Enterprise <span className="text-green-400">Projects & Achievements</span>
                        </h2>
                        <p
                            className="text-xl text-gray-300 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Successfully delivered robust digital solutions trusted by industry leaders across Africa
                        </p>
                    </div>

                    {/* Project Navigation */}
                    <div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {Object.entries(projectCategories).map(([key, category]) => (
                            <button
                                key={key}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${projects.some(p => p.category === key)
                                        ? 'bg-green-600 text-white hover:bg-green-700'
                                        : 'bg-gray-700 text-gray-300'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Featured Project Showcase */}
                    <div
                        className="mb-16 bg-gray-800 rounded-2xl p-8 border border-gray-700 transform transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${projectCategories[projects[activeProject].category].color}`}>
                                        {projectCategories[projects[activeProject].category].label}
                                    </span>
                                    {projects[activeProject].status && (
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                            {projects[activeProject].status}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-3xl font-bold mb-4">{projects[activeProject].name}</h3>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    {projects[activeProject].description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-green-400 font-semibold mb-3">Project Scope:</h4>
                                    <p className="text-gray-300">{projects[activeProject].scope}</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-green-400 font-semibold mb-3">Key Impact:</h4>
                                    <p className="text-gray-300">{projects[activeProject].impact}</p>
                                </div>

                                {projects[activeProject].url && (
                                    <a
                                        href={projects[activeProject].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transform transition-all duration-300 hover:translate-x-2"
                                    >
                                        View Live Project →
                                    </a>
                                )}
                            </div>

                            <div className="space-y-6">
                                {projects[activeProject].countries && (
                                    <div>
                                        <h4 className="text-green-400 font-semibold mb-4">Countries Deployed:</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {projects[activeProject].countries.map((country, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-700 rounded-lg p-3 text-center transform transition-all duration-300 hover:scale-105"
                                                >
                                                    <span className="text-white text-sm font-medium">{country}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {projects[activeProject].clients && (
                                    <div>
                                        <h4 className="text-green-400 font-semibold mb-3">Featured Clients:</h4>
                                        <div className="space-y-2">
                                            {projects[activeProject].clients.map((client, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center text-gray-300 transform transition-all duration-300 hover:translate-x-2"
                                                >
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                                    {client}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* All Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`bg-gray-800 rounded-xl p-6 border-2 transition-all duration-500 cursor-pointer hover:border-green-500 transform hover:-translate-y-2 ${activeProject === index ? 'border-green-500 scale-105' : 'border-gray-700'
                                    }`}
                                onClick={() => setActiveProject(index)}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${projectCategories[project.category].color}`}>
                                        {projectCategories[project.category].label}
                                    </span>
                                    {project.status && (
                                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-xl font-bold mb-3 text-white">{project.name}</h4>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-green-400 text-sm font-medium transform transition-all duration-300 group-hover:translate-x-2">
                                        View Details
                                    </span>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transform transition-all duration-300 hover:scale-110"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project Statistics */}
                    <div
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="transform transition-all duration-500 hover:scale-110">
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">8+</div>
                            <div className="text-gray-400">African Countries</div>
                        </div>
                        <div className="transform transition-all duration-500 hover:scale-110">
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                            <div className="text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="transform transition-all duration-500 hover:scale-110">
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000+</div>
                            <div className="text-gray-400">Daily Users</div>
                        </div>
                        <div className="transform transition-all duration-500 hover:scale-110">
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">7+</div>
                            <div className="text-gray-400">Industries Served</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="text-4xl font-bold mb-8"
                        data-aos="fade-up"
                    >
                        Why Choose Bracknell Soft Tech?
                    </h2>

                    <div
                        className="grid md:grid-cols-2 gap-8 text-left mb-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Certified and experienced engineering team</span>
                            </div>
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Strong expertise in Microsoft technology stack</span>
                            </div>
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Proven track record with reputable organizations</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Secure, scalable, and user-friendly solutions</span>
                            </div>
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>On-time delivery and reliable project management</span>
                            </div>
                            <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Dedicated support and long-term maintenance</span>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact">
                        <button
                            className="px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-2xl"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            Start Your Project Today
                        </button>
                    </Link>
                </div>
            </section>


            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-all duration-300 z-50 transform hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <Footer />
        </div>
    );
};

export default About;