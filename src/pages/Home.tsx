import React from 'react';
import { Link } from 'react-router-dom';
import FloatingChatbot from '../components/FloatingChatbot';
import { 
  MessageCircle, 
  BookOpen, 
  Users, 
  Calendar, 
  AlertTriangle, 
  BarChart3,
  Heart,
  Shield,
  Clock,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Headphones,
  UserCheck,
  Play
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Mental Health Assistant',
      description: 'Get instant support from our AI-powered counselor, available 24/7 for confidential conversations',
      link: '/chat',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: BookOpen,
      title: 'Interactive Self-Help Tools',
      description: 'Access guided meditation, CBT exercises, mood tracking, and personalized wellness plans',
      link: '/self-help',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Users,
      title: 'Anonymous Peer Support',
      description: 'Connect with fellow students in a safe, moderated community environment',
      link: '/community',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Calendar,
      title: 'Professional Counseling',
      description: 'Book confidential sessions with licensed campus mental health professionals',
      link: '/booking',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Psychology Major",
      content: "MindSpark helped me through my toughest semester. The AI chat was there when I needed it most.",
      rating: 5
    },
    {
      name: "Alex K.",
      role: "Engineering Student",
      content: "The self-help tools are amazing. I use the meditation feature daily to manage stress.",
      rating: 5
    },
    {
      name: "Jordan L.",
      role: "Pre-Med Student",
      content: "Being able to book counseling sessions easily made all the difference in my mental health journey.",
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Helped', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '98%', label: 'Satisfaction Rate', icon: Heart },
    { number: '100%', label: 'Confidential', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 C240,300 480,500 720,400 C960,300 1200,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#gradient1)"
            className="animate-pulse"
          />
          <path
            d="M0,500 C240,400 480,600 720,500 C960,400 1200,600 1440,500 L1440,800 L0,800 Z"
            fill="url(#gradient2)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M0,600 C240,500 480,700 720,600 C960,500 1200,700 1440,600 L1440,800 L0,800 Z"
            fill="url(#gradient3)"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200/50 dark:border-blue-700/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing MindSpark
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Student Mental Health
            </span>
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              & Wellness Platform
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with your mental wellness through AI-powered support, evidence-based self-help tools, 
            and a supportive community designed specifically for higher education students.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/chat"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-3" size={20} />
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/self-help"
              className="inline-flex items-center px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="mr-2" size={20} />
              Explore Resources
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Shield size={16} />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} />
              <span>Student-Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-100/50 dark:border-blue-800/50">
                  <stat.icon className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mental Wellness
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and resources designed to support every aspect of your mental health journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100/50 dark:border-blue-800/50`}>
                  <feature.icon className="text-2xl" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Feature</span>
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Students Everywhere
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from students who found support through MindSpark
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-2xl p-8 relative border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-blue-200/50 dark:border-blue-700/50">
                    <UserCheck className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-3xl p-12 border border-blue-200/20 dark:border-blue-700/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of students who have found support, community, and healing through MindSpark. 
              Your mental health matters, and help is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chat"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                Start Your Journey
              </Link>
              <Link
                to="/self-help"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <BookOpen className="mr-2" size={20} />
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
};

export default Home;