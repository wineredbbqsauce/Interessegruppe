import React, { useState, useEffect } from "react";
import "../styles/main.css";

export default function GlassMorph() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections((prev) => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "🎮",
      title: "Custom Modpack",
      description:
        "Our custom Create modpack delivers unique automation, engineering, and building experiences you won't find anywhere else.",
    },
    {
      icon: "👥",
      title: "Amazing Community",
      description:
        "Join friendly, creative players who collaborate on massive builds and help each other master the Create mod.",
    },
    {
      icon: "⚡",
      title: "Top Performance",
      description:
        "Our servers run 24/7 with top-tier hardware, ensuring smooth gameplay and minimal downtime.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Join our Discord",
      description:
        "Click the Discord icon or link below to join our official community.",
    },
    {
      number: "02",
      title: "Apply for Whitelist",
      description:
        "Go to the #apply-here channel and create a new ticket with your application.",
    },
    {
      number: "03",
      title: "Wait for Approval",
      description:
        "An admin will review your application. Once approved, you'll be added to the whitelist.",
    },
    {
      number: "04",
      title: "Install the Modpack",
      description: "Download and add our custom modpack on CurseForge.",
    },
    {
      number: "05",
      title: "Add the Server",
      description: "In Minecraft, add this IP: play.create-smp.com",
    },
    {
      number: "06",
      title: "Start Playing!",
      description:
        "Join the adventure — build, automate, and explore together!",
    },
  ];

  const faqs = [
    {
      question: "What is Create SMP?",
      answer:
        "Create SMP is a modded Minecraft server built around the Create mod. It's a community-driven survival world where players can build factories, automate systems, and explore creativity together.",
    },
    {
      question: "How do I join the server?",
      answer:
        "To join, simply go to our Discord and open a ticket in the #apply-here channel to apply for the whitelist. Once approved, download our modpack on CurseForge, add the IP play.create-smp.com, and you're good to go!",
    },
    {
      question: "Is there a specific modpack I need?",
      answer:
        "Yes, our server runs on a custom Create SMP modpack available on CurseForge. It includes all required mods to ensure everyone has the same experience.",
    },
  ];

  return (
    <div className="website-container">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">GlassMorph</div>

          <div className="nav-links">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#join" className="nav-link">
              How to Join
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#join">How to Join</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            blah blah <span className="hero-title-gradient">GlassMorphSmooth</span>
          </h1>
          <p className="hero-subtitle">
            blah blah blah blah blah blah blah blah
          </p>
          <div className="hero-buttons">
            <a href="#join" className="btn btn-primary">
              Join Discord
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>

          <div className="scroll-indicator">
            <div style={{ fontSize: "2rem" }}>↓</div>
          </div>
        </div>
      </section>

      {/* Server IP */}
      <section className="server-ip-section">
        <div className="server-ip-container">
          <div className="server-ip-card">
            <p className="server-ip-label">Server IP</p>
            <p className="server-ip">play.create-smp.com</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <h2 className="section-title">
            Why Choose <span className="hero-title-gradient">Create SMP</span>?
          </h2>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div
                key={idx}
                id={`feature-${idx}`}
                className={`feature-card animate-on-scroll ${
                  visibleSections.has(`feature-${idx}`) ? "visible" : ""
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="join-section">
        <div className="section-container">
          <h2 className="section-title">
            How to <span className="hero-title-gradient">Join</span>
          </h2>

          <div className="steps-container">
            {steps.map((step, idx) => (
              <div
                key={idx}
                id={`step-${idx}`}
                className={`step-card animate-on-scroll ${
                  visibleSections.has(`step-${idx}`) ? "visible" : ""
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-container">
          <h2 className="section-title">
            Frequently Asked{" "}
            <span className="hero-title-gradient">Questions</span>
          </h2>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Create SMP</div>
        <p className="footer-tagline">Build, Automate, Create Together</p>
        <p className="footer-copyright">
          © 2024 Create SMP. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
