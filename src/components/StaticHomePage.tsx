import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Zap, 
  Target, 
  Play,
  Star,
  Sparkles,
  Brain,
  Workflow,
  Clock,
  Shield,
  Rocket,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

function StaticHomePage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "Advanced AI algorithms that learn and adapt to your business processes in real-time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Process thousands of tasks in seconds with our optimized automation engine."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Accuracy",
      description: "99.9% accuracy rate with continuous learning and improvement capabilities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Connect with 1000+ tools and platforms with our no-code integration system."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Operation",
      description: "Your AI workforce never sleeps, ensuring continuous productivity and growth."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Tools",
      description: "Simply link your existing software and platforms to our AI system.",
      icon: <Workflow className="w-12 h-12" />
    },
    {
      number: "02", 
      title: "Define Your Goals",
      description: "Tell our AI what you want to achieve and let it design the perfect workflow.",
      icon: <Target className="w-12 h-12" />
    },
    {
      number: "03",
      title: "Watch It Work",
      description: "Sit back and watch as your tasks get completed automatically with superhuman efficiency.",
      icon: <Rocket className="w-12 h-12" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Inc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face",
      content: "This AI automation platform transformed our business operations. We've seen a 400% increase in productivity.",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO, DataVision",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face",
      content: "The most intuitive AI platform we've ever used. Setup took minutes, and the results were immediate.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Operations Director, ScaleUp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face", 
      content: "Our team now focuses on strategy while AI handles the repetitive work. It's been a game-changer.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">AutomateAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
              <Link
                to="/animated"
                className="text-gray-300 hover:text-white"
              >
                Animated Version
              </Link>
              <button className="bg-purple-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-purple-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automate Everything
            <span className="block text-purple-400">with AI Power</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation that learns, adapts, and scales. 
            Let AI handle the work while you focus on what matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-700 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-400/10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-gray-300">Tasks Automated Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <Sparkles className="inline w-12 h-12 text-purple-400 mr-4" />
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of automation with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in minutes, not months. Our AI does the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full">
                  <div className="text-6xl font-bold text-purple-400/20 mb-4">
                    {step.number}
                  </div>
                  
                  <div className="text-purple-400 mb-6">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-purple-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using AI automation to scale their operations
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-700 flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-400/10">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">AutomateAI</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutomateAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StaticHomePage;