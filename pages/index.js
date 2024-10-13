'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, ChevronRight, Code, Layers, Cpu, Tag, Target, BarChart, Users, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(`Thank you for your interest! We'll contact you at ${email}`)
      setEmail('')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#252526] bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#569cd6]"
          >
            CodeAnnotate
          </motion.div>
          <nav>
            <ul className="flex space-x-6">
              <NavItem href="#features">Features</NavItem>
              <NavItem href="#how-it-works">How It Works</NavItem>
              <NavItem href="#use-cases">Use Cases</NavItem>
              <NavItem href="#pricing">Pricing</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <VSCodeBackground />
          <div className="container mx-auto px-4 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#569cd6]">Precision Annotation</span>
                <br />
                <span className="text-[#4ec9b0]">for Advanced ML</span>
              </h1>
              <TypewriterEffect />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button className="bg-[#569cd6] hover:bg-[#4e8cc2] text-[#1e1e1e] px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out">
                  Start Annotating <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-[#252526]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#569cd6]">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="w-12 h-12 text-[#ce9178]" />}
                title="Code-Inspired Interface"
                description={<>Experience a <strong>familiar VS Code-like interface</strong> for seamless annotation.</>}
              />
              <FeatureCard
                icon={<Layers className="w-12 h-12 text-[#4ec9b0]" />}
                title="Multi-Layer Annotations"
                description={<>Create <strong>complex, multi-layered annotations</strong> with ease, perfect for intricate tasks.</>}
              />
              <FeatureCard
                icon={<Tag className="w-12 h-12 text-[#dcdcaa]" />}
                title="Customizable Labeling"
                description={<>Tailor your annotation workflow with <strong>customizable labels and hotkeys</strong>.</>}
              />
              <FeatureCard
                icon={<Target className="w-12 h-12 text-[#c586c0]" />}
                title="Precision Tools"
                description={<>Utilize our suite of <strong>precise annotation tools</strong> for pixel-perfect results.</>}
              />
              <FeatureCard
                icon={<Cpu className="w-12 h-12 text-[#9cdcfe]" />}
                title="ML-Assisted Annotations"
                description={<>Leverage <strong>machine learning models</strong> to suggest annotations, speeding up your workflow.</>}
              />
              <FeatureCard
                icon={<BarChart className="w-12 h-12 text-[#b5cea8]" />}
                title="Real-time Analytics"
                description={<>Monitor project progress and dataset quality with <strong>comprehensive analytics</strong>.</>}
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#4ec9b0]">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <WorkflowTimeline />
            </div>
          </div>
        </section>

        <section id="use-cases" className="py-20 bg-[#252526]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#569cd6]">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UseCaseCard
                icon={<Cpu className="w-12 h-12 text-[#4ec9b0]" />}
                title="Computer Vision"
                description="From object detection to semantic segmentation, our tools support all types of image and video annotation tasks."
              />
              <UseCaseCard
                icon={<Users className="w-12 h-12 text-[#dcdcaa]" />}
                title="Natural Language Processing"
                description="Annotate text for named entity recognition, sentiment analysis, and more with our specialized NLP tools."
              />
              <UseCaseCard
                icon={<Zap className="w-12 h-12 text-[#ce9178]" />}
                title="Autonomous Vehicles"
                description="Label sensor data, including LIDAR and RADAR, to train robust perception models for self-driving cars."
              />
              <UseCaseCard
                icon={<Target className="w-12 h-12 text-[#c586c0]" />}
                title="Medical Imaging"
                description="Precisely annotate medical images for diagnostic AI, supporting DICOM format and 3D volumes."
              />
              <UseCaseCard
                icon={<BarChart className="w-12 h-12 text-[#b5cea8]" />}
                title="Retail and E-commerce"
                description="Annotate product images for visual search, recommendation systems, and inventory management."
              />
              <UseCaseCard
                icon={<Globe className="w-12 h-12 text-[#9cdcfe]" />}
                title="Geospatial Analysis"
                description="Label aerial and satellite imagery for environmental monitoring, urban planning, and agriculture."
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#569cd6]">
              Flexible Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="$49"
                features={[
                  "5,000 annotations/month",
                  "Basic ML assistance",
                  "Email support",
                  "1 user"
                ]}
              />
              <PricingCard
                title="Pro"
                price="$149"
                features={[
                  "50,000 annotations/month",
                  "Advanced ML assistance",
                  "Priority support",
                  "5 users",
                  "API access"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={[
                  "Unlimited annotations",
                  "Full AI suite",
                  "24/7 dedicated support",
                  "Unlimited users",
                  "Custom integrations"
                ]}
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-[#252526]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#569cd6]">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="CodeAnnotate has revolutionized our ML workflow. The VS Code-inspired interface made adoption a breeze for our team."
                author="Jane Doe"
                role="ML Engineer at TechCorp"
              />
              <TestimonialCard
                quote="The precision tools and ML-assisted annotations have significantly reduced our annotation time and improved accuracy."
                author="John Smith"
                role="Data Scientist at AI Innovations"
              />
              <TestimonialCard
                quote="As a startup, the flexible pricing and powerful features of CodeAnnotate have been game-changing for our projects."
                author="Emily Chen"
                role="Founder of ML Startup"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#569cd6]">
              Start Your Annotation Journey
            </h2>
            <p className="text-center text-[#9cdcfe] mb-8">
              Ready to transform your data annotation process? Sign up for early access and be the first to experience the future of ML annotations.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-[#3c3c3c] border-[#007acc] text-[#d4d4d4]"
                required
              />
              <Button type="submit" disabled={isLoading} className="bg-[#569cd6] hover:bg-[#4e8cc2] text-[#1e1e1e] px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  'Get Early Access'
                )}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#252526] py-8">
        <div className="container mx-auto px-4 text-center text-[#9cdcfe]">
          <p>&copy; {new Date().getFullYear()} CodeAnnotate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ href, children }) {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} className="text-[#9cdcfe] hover:text-[#569cd6] transition-colors">
        {children}
      </Link>
    </motion.li>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-[#2d2d2d] p-6 rounded-lg transition-all duration-300 ease-in-out border border-[#3c3c3c] hover:border-[#569cd6]"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#4ec9b0]">{title}</h3>
      <p className="text-[#d4d4d4]">{description}</p>
    </motion.div>
  )
}

function WorkflowTimeline() {
  const steps = [
    { title: "Upload Your Data", description: "Easily upload your images, videos, or text data to our secure cloud platform." },
    { title: "Configure Your Project", description: "Set up your annotation guidelines, create custom labels, and define your workflow." },
    { title: "Annotate with Precision", description: "Use our intuitive tools to annotate your data, assisted by AI suggestions for increased efficiency." },
    { title: "Quality Assurance", description: "Implement multi-stage reviews and use our automated quality checks to ensure annotation accuracy." },
    { title: "Export and Integrate", description: "Export your annotated data in various formats, ready for seamless integration into your ML pipelines." }
  ]

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-8  flex"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#569cd6] flex items-center justify-center text-[#1e1e1e] font-bold text-lg">
            {index + 1}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-[#4ec9b0] mb-2">{step.title}</h3>
            <p className="text-[#9cdcfe]">{step.description}</p>
          </div>
        </motion.div>
      ))}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#569cd6]" />
    </div>
  )
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`bg-[#2d2d2d] p-6 rounded-lg transition-all duration-300 ease-in-out ${highlighted ? 'border-2 border-[#569cd6]' : 'border border-[#3c3c3c]'}`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-[#4ec9b0]">{title}</h3>
      <p className="text-4xl font-bold mb-6 text-[#569cd6]">{price}</p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="mr-2 text-[#569cd6]" />
            <span className="text-[#d4d4d4]">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${highlighted ? 'bg-[#569cd6] hover:bg-[#4e8cc2] text-[#1e1e1e]' : 'bg-[#3c3c3c] hover:bg-[#4e4e4e] text-[#d4d4d4]'} px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out`}>
        Choose Plan
      </Button>
    </motion.div>
  )
}

function UseCaseCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-[#2d2d2d] p-6 rounded-lg transition-all duration-300 ease-in-out border border-[#3c3c3c] hover:border-[#569cd6]"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#4ec9b0]">{title}</h3>
      <p className="text-[#d4d4d4]">{description}</p>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-[#2d2d2d] p-6 rounded-lg transition-all duration-300 ease-in-out border border-[#3c3c3c] hover:border-[#569cd6]"
    >
      <p className="text-[#d4d4d4] mb-4 italic">{quote}</p>
      <p className="text-[#4ec9b0] font-semibold">{author}</p>
      <p className="text-[#9cdcfe]">{role}</p>
    </motion.div>
  )
}

function TypewriterEffect() {
  const [text, setText] = useState('')
  const fullText = "Elevate your machine learning projects with our cutting-edge annotation tools."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <p className="text-xl md:text-2xl mb-8 text-[#9cdcfe] h-20">
      {text}<span className="animate-blink">|</span>
    </p>
  )
}

function VSCodeBackground() {
  useEffect(() => {
    const canvas = document.getElementById('vsCodeBg');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = '';

        this.setRandomSymbol();
      }

      setRandomSymbol() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/?[]{}|=+-*';
        this.text = characters.charAt(Math.floor(Math.random() * characters.length));
      }

      draw(context) {
        context.fillStyle = '#569cd6';
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
          this.y = 0;
        } else {
          this.y += 0.1;
        }
        if (Math.random() > 0.99) {
          this.setRandomSymbol();
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 16;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
      }

      initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
      }

      resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    const animate = () => {
      ctx.fillStyle = 'rgba(30, 30, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = effect.fontSize + 'px monospace';
      effect.symbols.forEach(symbol => symbol.draw(ctx));
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas id="vsCodeBg" className="absolute inset-0" />
  );
}
