import React, { useState, useEffect } from 'react';

const ModernAquaSmart = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🌡️",
      title: "Environment Information",
      description: "Real-time environmental data such as temperature, pH levels, and lighting intensity collected by sensors."
    },
    {
      icon: "💧",
      title: "Self Sustainment",
      description: "Smart water regulation and motorized cleaning that reacts to sensor data."
    },
    {
      icon: "📹",
      title: "Camera View",
      description: "Multi-view camera streaming with video saving."
    }
  ];

  const hardwareFeatures = [
    { title: "Temperature Sensor", desc: "High-precision temperature monitoring and data" },
    { title: "TDS and Turbidity Sensors", desc: "Accurate and advanced water quality monitoring and data" },
    { title: "EC Sensor", desc: "Electrical conductivity sensor to monitor salinity" },
    { title: "Cameras", desc: "Live camera providing constant streaming on the dashboard" },
    { title: "Motorized Feeder", desc: "Fish feeding that can be automatic or manually by a click of a button" },
    { title: "Motorized Wiper", desc: "Window cleaning that can be automatic or manual" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AquaSmart
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#hardware" className="hover:text-cyan-400 transition-colors">Hardware</a>
            <a href="#setup" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => window.open('/login', '_blank')}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="hero">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Aqua
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Self-Sustaining Aquarium Solutions
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => window.open('/login', '_blank')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Dashboard</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="group px-8 py-4 border border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <img
                  src="/logo.png"
                  alt="Smart Aquarium"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-6 text-white/60 flex items-center justify-center text-xl">⌄</div>
        </div>
      </section>

      {/* Tank Image Section */}
      <section className="relative py-16 px-6 flex justify-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/tank.png"
            alt="AquaSmart Tank"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-slate-800/20 to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Introducing AquaSmart
          </h2>
          <p className="text-2xl text-slate-300 leading-relaxed">
            A smart aquarium that enables fish owners to automate the maintenance process by utilizing remote monitoring and control.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Features
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300">
              Check out more
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Beautiful Dashboard For Companion App
              </h2>
              <p className="text-xl text-slate-300">
                Already logged in?
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => window.open('/login', '_blank')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Visit Dashboard
                </button>
                <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                  Check out the simple setup
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <img
                  src="/app.png"
                  alt="AquaSmart App Dashboard"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section id="setup" className="relative py-24 px-6 bg-gradient-to-r from-slate-800/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible.setup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Simple Setup
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get your smart aquarium running in just four easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Set up the aquarium", 
                desc: "Prepare the aquarium by cleaning it thoroughly and adding the necessary substrate and decorations." 
              },
              { 
                title: "Install the smart devices", 
                desc: "Install the automated feeder, heater, and lighting system in the aquarium according to the manufacturer's instructions." 
              },
              { 
                title: "Connect to the app", 
                desc: "Download the dedicated app for the smart home aquarium project and follow the on-screen instructions to connect your devices." 
              },
              { 
                title: "Customize settings", 
                desc: "Adjust feeding schedules, temperature settings, and lighting preferences through the app to create the perfect environment for your aquatic pets." 
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`relative text-center transition-all duration-1000 ${isVisible.setup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section id="hardware" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible.hardware ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Hardware
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AquaSmart uses advanced technological components to provide an advanced user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareFeatures.map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 ${isVisible.hardware ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            AquaSmart
          </div>
          <p className="text-slate-400">
            © 2025 AquaSmart. Revolutionizing aquarium care through intelligent automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernAquaSmart;