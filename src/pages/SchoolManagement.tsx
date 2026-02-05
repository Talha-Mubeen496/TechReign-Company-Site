import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, Calendar, BookOpen, TrendingUp,
    Shield, MessageSquare, CheckCircle2, Star,
    ChevronDown, Menu, X, Briefcase, UserPlus,
    Facebook, Twitter, Instagram, Linkedin, Phone, Mail,
    ArrowRight, ListChecks, FileSpreadsheet, ClipboardCheck, Layout,
    Search, Award, Rocket,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

export const SchoolManagement: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [openFaq, setOpenFaq] = useState<number | null>(0)

    // Handle body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    const faqs = [
        {
            question: "What is SchoolAims",
            answer: "SchoolAims is a complete school management system designed for schools and colleges. It helps automate student records, attendance tracking, fee collection, exam management, and parent communication. Our cloud-based platform makes school administration 70% more efficient while keeping costs affordable at just Rs. 20,000 per month."
        },
        {
            question: "How does SchoolAims help schools?",
            answer: "SchoolAims streamlines daily school operations by automating attendance marking, fee collection with online payment options, result management, parent-teacher communication, and student record keeping. Schools save time on manual paperwork, reduce administrative costs, and improve communication with parents through our dedicated parent portal."
        },
        {
            question: "Is SchoolAims suitable for small schools?",
            answer: "Yes! SchoolAims is perfect for schools of all sizes - from small institutions with 50 students to large campuses with 5000+ students. Our pricing model (Rs. 20,000 per month) makes it affordable for small schools while offering enterprise-level features that grow with your institution."
        },
        {
            question: "How much does SchoolAims cost?",
            answer: "SchoolAims costs only Rs. 20,000 per month. This includes all features - student management, attendance tracking, fee collection, parent portal, exam management, and unlimited users. There are no hidden charges. For a school with 200 students, the total monthly cost is Rs. 50,000."
        },
        {
            question: "What modules are included in SchoolAims?",
            answer: "SchoolAims includes 12+ core modules: Student Management, Class & Subject Management, Employee Management, Attendance Tracking, Fee/Challan Management, Exam & Result Management, Assessment Management, Parent Portal, Timetable Management, and more. All modules are included in the base price with no additional charges per module."
        },
        {
            question: "Does SchoolAims have a parent portal?",
            answer: "Yes! Our parent portal allows parents to view their child's attendance, exam results, fee status, assignments, and school announcements in real-time. Parents receive instant SMS/app notifications for absences, results, and important updates. They can also pay fees online and communicate with teachers through the portal."
        },
        {
            question: "Can parents pay fees online through SchoolAims?",
            answer: "Yes, SchoolAims integrates with leading payment gateways in Pakistan. Parents can pay school fees online using credit/debit cards, JazzCash, EasyPaisa, or bank transfers. The system automatically generates receipts, updates fee records, and notifies the school administration - eliminating manual fee collection hassles."
        },
        {
            question: "How does attendance tracking work?",
            answer: "Teachers can mark attendance with one click per class through web or mobile app. The system automatically calculates attendance percentages, identifies defaulters, and sends instant SMS notifications to parents when students are absent. Monthly attendance reports are generated automatically for school records and parent access."
        }
    ]

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })

        const handleScroll = () => {
            const sections = ['home', 'features', 'why-choose-us', 'pricing', 'faqs', 'contact']
            const scrollPosition = window.scrollY + 160

            let currentSection = 'home'

            if (window.scrollY < 50) {
                currentSection = 'home'
            } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                currentSection = 'contact'
            } else {
                for (const section of sections) {
                    const element = document.getElementById(section)
                    if (element) {
                        const offsetTop = element.offsetTop
                        const offsetHeight = element.offsetHeight
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            currentSection = section
                            break
                        }
                    }
                }
            }

            setActiveSection(prev => prev !== currentSection ? currentSection : prev)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Update active state immediately for better UI feedback
            setActiveSection(id);
        }
    };

    const scrollToContact = () => {
        scrollToSection('contact');
    }

    // Helper for active link styles
    const getLinkClass = (section: string) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeSection === section
        ? 'text-indigo-700 bg-white shadow-sm ring-1 ring-black/5 font-bold'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-white/80 hover:shadow-sm'
        }`

    const features = [
        {
            icon: <Users size={32} />,
            title: 'Student Management',
            description: 'Complete student database with enrollment, records, and profile management for schools',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <BookOpen size={32} />,
            title: 'Class & Subject Management',
            description: 'Organize classes, sections, subjects, and teacher assignments efficiently',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Briefcase size={32} />,
            title: 'Employee Management',
            description: 'Complete staff database with roles, qualifications, and document storage',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: <Calendar size={32} />,
            title: 'Attendance Tracking System',
            description: 'Automated daily attendance with real-time parent notifications and reports',
            color: 'from-green-500 to-teal-500'
        },
        {
            icon: <FileSpreadsheet size={32} />,
            title: 'Fee & Challan Management',
            description: 'Complete fee collection system with online payments and automated receipts',
            color: 'from-indigo-500 to-blue-500'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Exam & Result Management',
            description: 'Digital exam scheduling, marks entry, grade calculation, and result publishing',
            color: 'from-violet-500 to-purple-500'
        },
        {
            icon: <ClipboardCheck size={32} />,
            title: 'Assessment & Assignment Management',
            description: 'Online homework assignments with submission tracking and evaluation',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: <Layout size={32} />,
            title: 'Parents Portal',
            description: 'Real-time parent access to attendance, results, fees, and school updates',
            color: 'from-amber-500 to-orange-500'
        },
        {
            icon: <ListChecks size={32} />,
            title: 'Timetable Management',
            description: 'Create and manage class schedules, teacher assignments, and period planning',
            color: 'from-sky-500 to-indigo-500'
        },
        {
            icon: <Search size={32} />,
            title: 'Job Opening & Recruitment',
            description: 'Post vacancies, receive applications, and manage hiring process digitally',
            color: 'from-emerald-500 to-green-500'
        },
        {
            icon: <UserPlus size={32} />,
            title: 'Employee Applicant Management',
            description: 'Centralized database of job applications and candidate tracking',
            color: 'from-fuchsia-500 to-purple-500'
        },
        {
            icon: <Award size={32} />,
            title: 'Teacher Evaluation System',
            description: 'Performance assessment and feedback system for teaching staff',
            color: 'from-yellow-500 to-amber-500'
        }
    ]

    const testimonials = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Principal, Greenwood High School',
            content: 'This system transformed how we manage our school. The parent portal alone has improved communication tremendously.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'IT Director, Riverside Academy',
            content: 'Implementation was smooth, and the support team is exceptional. Our teachers love the gradebook feature.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Administrator, Bright Future School',
            content: 'The analytics dashboard gives us insights we never had before. Highly recommend for any educational institution.',
            rating: 5
        }
    ]

    const pricingPlans = [
        {
            name: 'Essential',
            price: { monthly: 'Rs. 20,000', yearly: 'Rs. 2,00,000' },
            description: 'For small schools getting started',
            features: [
                'Manage Students up to 500',
                'Advanced Analytics',
                'Advanced Accounting',
                'Priority Email & Chat Support'
            ],
            recommended: true
        },
        {
            name: 'Standard',
            price: { monthly: 'Rs. 30,000', yearly: 'Rs. 3,00,000' },
            description: 'For growing institutions',
            features: [
                'Manage Students up to 1000',
                'Advanced Analytics',
                'Advanced Accounting',
                'Priority Email & Chat Support'
            ],
            recommended: false
        },
        {
            name: 'Enterprise',
            price: { monthly: 'Rs. 40,000', yearly: 'Rs. 4,00,000' },
            description: 'For large campuses & universities',
            features: [
                'Manage Students up to 3000',
                'Dedicated Support Manager',
                'SLA Guarantee',
                'API Access'
            ],
            recommended: false
        }
    ]
    return (
        <>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>SchoolAims - School Management System for Institutions</title>
                <meta name="title" content="SchoolAims - School Management System for Institutions" />
                <meta name="description" content="SchoolAims offers an all-in-one school management system with attendance, fees, online classes & exams. Simplify all administrative tasks effortlessly." />
                <meta name="keywords" content="school management system,school information management system, school student management system features,education software,school erp,online school portal,student management,fee collection system,attendance system,school administration software, schools management system,learning management system, SchoolAims" />
                <link rel="canonical" href="https://tech-reign.com/service/school-management" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tech-reign.com/service/school-management" />
                <meta property="og:title" content="SchoolAims - Smart School Management Made Simple" />
                <meta property="og:description" content="Transform your institution with SchoolAims. Manage students, staff, and finances with our powerful, all-in-one educational platform." />
                <meta property="og:image" content="https://tech-reign.com/SchoolAims/school_logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://tech-reign.com/service/school-management" />
                <meta property="twitter:title" content="SchoolAims - Smart School Management Made Simple" />
                <meta property="twitter:description" content="Transform your institution with SchoolAims. Manage students, staff, and finances with our powerful, all-in-one educational platform." />
                <meta property="twitter:image" content="https://tech-reign.com/SchoolAims/school_logo.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "SchoolAims",
                        "operatingSystem": "Web-based",
                        "applicationCategory": "EducationalApplication",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "1250"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "10000",
                            "priceCurrency": "PKR"
                        },
                        "description": "Powerful AI-driven school management software helping educational institutions automate their administrative tasks and improve efficiency.",
                        "brand": {
                            "@type": "Brand",
                            "name": "SchoolAims"
                        },
                        "screenshot": "https://tech-reign.com/SchoolAims/school_logo.png"
                    })}
                </script>

                {/* FAQPage Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>

                {/* EducationalOrganization Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "SchoolAims",
                        "alternateName": "SchoolAims",
                        "url": "https://tech-reign.com/service/school-management",
                        "logo": "https://tech-reign.com/SchoolAims/school_logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "03209105983",
                            "contactType": "customer service",
                            "areaServed": ["PK", "US"],
                            "availableLanguage": "en"
                        },
                        "sameAs": "https://tech-reign.com/service/school-management"
                    })}
                </script>

                {/* WebPage Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "SchoolAims",
                        "description": "SchoolAims offers an all-in-one school management system with attendance, fees, online classes & exams. Simplify all administrative tasks effortlessly.",
                        "url": "https://tech-reign.com/service/school-management"
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen w-full overflow-x-hidden bg-white">
                {/* Custom Navbar */}
                {/* Navbar Wrapper */}
                <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
                    {/* Top Contact Bar - Sleek Dark Blue */}
                    <div className="bg-[#0f2a4a] text-white py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer"></div>
                        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-medium tracking-wide">
                            <div className="flex items-center gap-6 z-10">
                                <a href="tel:+923209105983" className="flex items-center gap-2.5 hover:text-orange-300 transition-all duration-300 group">
                                    <div className="p-1 bg-white/10 rounded-full group-hover:bg-orange-400/20 transition-colors">
                                        <span className="text-orange-400 text-xs">📞</span>
                                    </div>
                                    <span>+92-320-9105983</span>
                                </a>
                                <a href="mailto:info@tech-reign.com" className="flex items-center gap-2.5 hover:text-orange-300 transition-all duration-300 group">
                                    <div className="p-1 bg-white/10 rounded-full group-hover:bg-orange-400/20 transition-colors">
                                        <span className="text-orange-400 text-xs">✉️</span>
                                    </div>
                                    <span>info@tech-reign.com</span>
                                </a>
                            </div>
                            <div className="hidden sm:flex items-center gap-4 text-white/60 text-xs">
                                <span>Support Available 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Header - Glassmorphism */}
                    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-[88px] transition-all duration-300">
                                {/* Logo Section */}
                                <div className="flex items-center group cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}>
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                                        <img
                                            src="/SchoolAims/school_logo.png"
                                            alt="SchoolAims Logo"
                                            className="h-14 w-auto object-contain relative transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Desktop Navigation - Pill Style */}
                                <div className="hidden lg:flex items-center gap-2 bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
                                    <button
                                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}
                                        className={getLinkClass('home')}
                                    >
                                        Home
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('features')}
                                        className={getLinkClass('features')}
                                    >
                                        Features
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('why-choose-us')}
                                        className={getLinkClass('why-choose-us')}
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('pricing')}
                                        className={getLinkClass('pricing')}
                                    >
                                        Pricing
                                    </button>
                                    <button
                                        onClick={scrollToContact}
                                        className={getLinkClass('contact')}
                                    >
                                        Contact
                                    </button>
                                </div>

                                {/* CTA Button - Modern Gradient & Glow */}
                                <div className="hidden lg:block relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-200"></div>
                                    <a
                                        href="https://white-island-0f4bfca1e.1.azurestaticapps.net/auth/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#1e4e7e] to-[#2c6aa8] hover:from-[#163a5f] hover:to-[#22558a] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide overflow-hidden animate-pulse-glow"
                                    >
                                        <span className="relative z-10">
                                            Live Preview
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    </a>
                                </div>

                                {/* Mobile Menu Button - Stylish */}
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="lg:hidden p-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                                >
                                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu - Smooth Expand */}
                        <AnimatePresence>
                            {mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-inner scroll-smooth"
                                >
                                    <div className="px-6 py-8 space-y-4">
                                        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-indigo-700 bg-indigo-50/50 rounded-xl font-semibold border border-indigo-100">Home</button>
                                        <button onClick={() => scrollToSection('features')} className="w-full text-left px-4 py-3 text-gray-600 font-medium hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors">Features</button>
                                        <button onClick={() => scrollToSection('pricing')} className="w-full text-left px-4 py-3 text-gray-600 font-medium hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors">Pricing</button>
                                        <button onClick={() => scrollToSection('why-choose-us')} className="w-full text-left px-4 py-3 text-gray-600 font-medium hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors">About</button>
                                        <button onClick={() => { scrollToContact(); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-gray-600 font-medium hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors">Contact</button>

                                        <button
                                            onClick={() => { scrollToContact(); setMobileMenuOpen(false); }}
                                            className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#1e4e7e] to-[#2c6aa8] text-white rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-all text-center"
                                        >
                                            Book Your Free Demo
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
                </div>

                <main className="pt-[140px]">
                    {/* Hero Section - Purple Gradient */}
                    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-16 md:py-24">
                        {/* Geometric Pattern Background */}
                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                                        <CheckCircle2 size={16} className="text-green-400" />
                                        <span className="text-sm font-medium">#1 Globally Ranked · Verified</span>
                                    </div>

                                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                        <span className="text-white">Online</span>School<br />
                                        <span className="text-white">Management</span><br />
                                        Software
                                    </h1>

                                    <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                                        You can now manage your school, college, or any educational institution seamlessly with SchoolAims.
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="https://tech-reign.com/#contact"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg inline-block text-center"
                                        >
                                            Get Started
                                        </a>
                                        <a
                                            href="https://white-island-0f4bfca1e.1.azurestaticapps.net/auth/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition inline-block text-center"
                                        >
                                            Live Preview
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Right Content - Stats Cards & Image */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative"
                                >
                                    <div className="relative">
                                        {/* Stats Cards */}
                                        <div className="absolute top-10 left-0 bg-white rounded-xl shadow-xl p-4 z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-purple-100 rounded-lg">
                                                    <Users className="text-purple-600" size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Total Students</p>
                                                    <p className="text-2xl font-bold text-gray-900">1,365</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-4 z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-pink-100 rounded-lg">
                                                    <Briefcase className="text-pink-600" size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Total Employees</p>
                                                    <p className="text-2xl font-bold text-gray-900">37</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-10 left-10 bg-white rounded-xl shadow-xl p-4 z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-100 rounded-lg">
                                                    <UserPlus className="text-blue-600" size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">New Enrollments</p>
                                                    <p className="text-2xl font-bold text-gray-900">24</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 right-10 bg-white rounded-xl shadow-xl p-4 z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-100 rounded-lg">
                                                    <TrendingUp className="text-green-600" size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Newly Hired</p>
                                                    <p className="text-2xl font-bold text-gray-900">04</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Professional Hero Image with Premium Effects */}
                                        <div className="relative group">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
                                                <img
                                                    src="/SchoolAims/img1.webp"
                                                    alt="School Management Software Excellence"
                                                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-60"></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-20 bg-gray-50" id="features">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center max-w-3xl mx-auto mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
                                <p className="text-lg text-gray-600">
                                    Comprehensive tools to manage every aspect of your educational institution
                                </p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                                    >
                                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                                            <div className="text-white">{feature.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>



                    {/* Digital Transformation Journey Section */}
                    <section id="journey" className="py-20 bg-white relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60"></div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 mb-6"
                                >
                                    <Rocket size={16} className="text-amber-600" />
                                    <span className="text-sm font-bold text-amber-700">Steps for Transformation</span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
                                >
                                    Your Guided Path to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Smart Campus</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-gray-600 leading-relaxed"
                                >
                                    Experience a seamless transition to digital excellence. Our dedicated team ensures every step of your institution's evolution is handled with precision.
                                </motion.p>
                            </div>

                            <div className="relative mt-16">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500"
                                    ></motion.div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-12 relative">
                                    {/* Step 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="relative group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="lg:mb-8 relative">
                                                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                                                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                                        <span className="text-2xl font-bold">1</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-6">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect & Consult</h3>
                                                <p className="text-gray-600 mb-4 px-4">
                                                    Reach out for a personalized demo to see how SchoolAims fits your institution's specific needs.
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                                    Free Demo Session
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Step 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="relative group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="lg:mb-8 relative">
                                                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                                                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-200">
                                                        <span className="text-2xl font-bold">2</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-6">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Implementation</h3>
                                                <p className="text-gray-600 mb-4 px-4">
                                                    Our expert team handles the heavy lifting—from secure data migration to comprehensive staff training.
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                                    Cloud Setup
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Step 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="relative group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="lg:mb-8 relative">
                                                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                                                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                                                        <span className="text-2xl font-bold">3</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-6">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Future-Ready Excellence</h3>
                                                <p className="text-gray-600 mb-4 px-4">
                                                    Go live with confidence and transform your school into a smart campus with our 24/7 dedicated support.
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                                    Expert Support
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden" id="why-choose-us">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side - Unique Illustration Placeholder */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="relative order-2 lg:order-1"
                                >
                                    <div className="relative z-10 w-full aspect-square bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-[3rem] border border-indigo-100 flex items-center justify-center overflow-hidden group hover:shadow-2xl transition-all duration-500">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

                                        {/* Placeholder Content */}
                                        <img
                                            src="/SchoolAims/img2.webp"
                                            alt="Why Choose SchoolAims"
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Floating Elements for visual interest */}
                                        <div className="absolute top-12 left-12 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                                        <div className="absolute bottom-12 right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
                                    </div>

                                    {/* Decorative Background Blob */}
                                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
                                </motion.div>

                                {/* Right Side - Content */}
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="order-1 lg:order-2"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                                        <Star size={14} className="text-indigo-600" />
                                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Why Choose SchoolAims</span>
                                    </div>

                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        We Help You <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Grow Faster</span>
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                        Join hundreds of Pakistani schools already simplifying their operations with SchoolAims. We provide the technology you need to reduce administrative workload and focus on what matters most quality education.
                                    </p>

                                    <div className="space-y-8">
                                        {[
                                            {
                                                title: "Quick & Easy",
                                                desc: "Live in 2-3 days. No technical skills needed. Complete training provided. Simple as WhatsApp.",
                                                icon: <CheckCircle2 className="text-green-500" size={24} />,
                                                bg: "bg-green-50"
                                            },
                                            {
                                                title: "Bank-Grade Security",
                                                desc: "Your data is encrypted and protected with enterprise-level security protocols.",
                                                icon: <Shield className="text-indigo-500" size={24} />,
                                                bg: "bg-indigo-50"
                                            },
                                            {
                                                title: "24/7 Dedicated Support",
                                                desc: "Our expert team is always available to help you resolve any issues instantly.",
                                                icon: <MessageSquare className="text-purple-500" size={24} />,
                                                bg: "bg-purple-50"
                                            }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                variants={fadeInUp}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className={`p-3 rounded-2xl ${item.bg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Reference-Based Pricing Section */}
                    <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-50 relative overflow-hidden" id="pricing">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center max-w-4xl mx-auto mb-16"
                            >
                                <div className="inline-block px-6 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6">
                                    $ Simple Pricing
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                    Choose Your <span className="text-amber-500">Perfect Plan</span>
                                </h2>

                                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                                    Start free and scale as you grow. No hidden fees, no long-term contracts. Cancel anytime.
                                </p>

                                {/* Switcher */}
                                <div className="flex items-center justify-center gap-4 mb-12">
                                    <button
                                        onClick={() => setBillingCycle('monthly')}
                                        className={`px-6 py-2 rounded-full font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setBillingCycle('yearly')}
                                        className={`px-6 py-2 rounded-full font-semibold transition-all ${billingCycle === 'yearly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        Yearly <span className="ml-1 text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">-20%</span>
                                    </button>
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                                {pricingPlans.map((plan, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.recommended
                                            ? 'bg-sky-700 text-white shadow-2xl scale-110 z-10 ring-4 ring-sky-700/20'
                                            : 'bg-white text-gray-900 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                                            }`}
                                    >
                                        {plan.recommended && (
                                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                                <span className="bg-amber-400 text-amber-900 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className="text-center mb-8">
                                            <h3 className={`text-xl font-bold mb-4 ${plan.recommended ? 'text-white' : 'text-gray-800'}`}>
                                                {plan.name}
                                            </h3>
                                            <div className="flex items-baseline justify-center gap-1">
                                                <span className={`text-4xl font-bold ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                                                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                                                </span>
                                                <span className={`text-sm ${plan.recommended ? 'text-sky-200' : 'text-gray-500'}`}>
                                                    /month
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 size={18} className={`${plan.recommended ? 'text-sky-300' : 'text-indigo-600'} shrink-0`} />
                                                    <span className={`text-sm ${plan.recommended ? 'text-sky-100' : 'text-gray-600'}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="https://tech-reign.com/#contact"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 inline-block text-center ${plan.recommended
                                                ? 'bg-amber-400 text-amber-900 hover:bg-amber-300'
                                                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                                }`}
                                        >
                                            Choose {plan.name}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center max-w-3xl mx-auto mb-12"
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Educators Say</h2>
                                <p className="text-lg text-gray-600">Trusted by thousands of institutions worldwide</p>
                            </motion.div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                                        <div>
                                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQs Section - High-End Premium Redesign */}
                    <section id="faqs" className="py-20 bg-gray-50/50 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center max-w-3xl mx-auto mb-20"
                            >
                                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                    Knowledge Base
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Get quick answers to the most common queries about SchoolAims. Our goal is to make your transition to digital management as smooth as possible.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 items-start">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${openFaq === index
                                            ? 'bg-white border-indigo-200 shadow-[0_20px_50px_rgba(79,70,229,0.1)] ring-1 ring-indigo-50'
                                            : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-8 py-7 text-left flex items-start justify-between gap-4"
                                        >
                                            <div className="flex gap-4">
                                                <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${openFaq === index
                                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                                    : 'bg-white text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                                                    }`}>
                                                    {index + 1}
                                                </span>
                                                <span className={`text-lg font-bold transition-colors duration-300 leading-snug ${openFaq === index ? 'text-indigo-600' : 'text-gray-900'
                                                    }`}>
                                                    {faq.question}
                                                </span>
                                            </div>
                                            <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-indigo-600 text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                                }`}>
                                                <ChevronDown size={14} />
                                            </div>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="px-6 sm:px-8 pb-8 pl-[60px] sm:pl-[72px]">
                                                        <div className="pt-2 border-t border-gray-100 text-gray-600 leading-relaxed text-[16px]">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Still have questions? */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="mt-16 text-center"
                            >
                                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                    <p className="text-gray-600 font-medium">Still have more questions?</p>
                                    <button
                                        onClick={scrollToContact}
                                        className="text-indigo-600 font-bold hover:underline underline-offset-4 flex items-center gap-1"
                                    >
                                        Drop us a message <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    <section id="contact" className="py-24 bg-[#1e1b4b] text-white">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Institution?</h2>
                                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    With SchoolAims, you’re not just managing a school—you’re building a brighter future for education.
                                </p>

                                {/* Prominent Phone Number */}
                                <div className="mb-10">
                                    <p className="text-sm text-white/60 mb-3 uppercase tracking-wider font-semibold">Call Us Now</p>
                                    <a
                                        href="tel:+923209105983"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                                    >
                                        <div className="p-2 bg-[#6366f1] rounded-full group-hover:scale-110 transition-transform">
                                            <Phone size={24} className="text-white" />
                                        </div>
                                        <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                                            0320 9105983
                                        </span>
                                    </a>
                                </div>

                                <div className="flex justify-center">
                                    <a
                                        href="https://tech-reign.com/#contact"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-4 bg-[#6366f1] hover:bg-[#5850ec] text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-indigo-500/25 active:scale-[0.98] inline-block text-center"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>

                {/* Premium Modern Footer */}
                <footer className="bg-[#0f2a4a] text-white pt-20 pb-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Company Info */}
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <img src="/SchoolAims/school_logo.png" alt="SchoolAims Logo" className="h-14 w-auto filter brightness-[0] saturate-[100%] invert-[100%]" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                    Empowering educational institutions with smart, integrated, and reliable management solutions. Modernizing education, one school at a time.
                                </p>
                                <div className="flex items-center gap-4">
                                    {[
                                        { icon: <Facebook size={18} />, href: "#" },
                                        { icon: <Twitter size={18} />, href: "#" },
                                        { icon: <Instagram size={18} />, href: "#" },
                                        { icon: <Linkedin size={18} />, href: "#" }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} className="p-2.5 bg-white/5 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Features Links */}
                            <div>
                                <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-400 pl-4">Core Modules</h4>
                                <ul className="space-y-4">
                                    {['Student Management', 'Fees Collection', 'Exam & Results', 'Attendance Track', 'Online Admission'].map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm group">
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-400 pl-4">Resources</h4>
                                <ul className="space-y-4">
                                    {['Help Center', 'Documentation', 'Community Forum', 'System Status', 'Latest Updates'].map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm group">
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-400 pl-4">Get In Touch</h4>
                                <ul className="space-y-5">
                                    {/* <li className="flex items-start gap-4 text-gray-400 group">
                                        <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-orange-400 group-hover:text-white transition-all">
                                            <MapPin size={18} />
                                        </div>
                                        <span className="text-sm leading-relaxed">Office #2, Floor 3, Education Hub Building, IT Park Area.</span>
                                    </li> */}
                                    <li className="flex items-center gap-4 text-gray-400 group">
                                        <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-orange-400 group-hover:text-white transition-all">
                                            <Phone size={18} />
                                        </div>
                                        <a href="tel:+923209105983" className="text-sm hover:text-orange-400 transition-colors">+92-320-9105983</a>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-400 group">
                                        <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-orange-400 group-hover:text-white transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <a href="mailto:info@tech-reign.com" className="text-sm hover:text-orange-400 transition-colors">info@tech-reign.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Copyright */}
                        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-gray-500 text-sm">
                                © 2024 <span className="text-white font-medium">SchoolAims</span>. All rights reserved. Designed and Developed by <span className="text-white font-medium"><a href='https://tech-reign.com/' target='_blank' rel='noopener noreferrer'>TechReign - Digital Studio</a></span>
                            </p>
                            <div className="flex items-center gap-8">
                                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
