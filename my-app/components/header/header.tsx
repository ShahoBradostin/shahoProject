'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link href="/" style={styles.logoLink}>
          <h1 style={styles.logo}>
            Shaho
            <div style={styles.logoUnderline}></div>
          </h1>
        </Link>
        <div style={styles.logoSubtitle}>portfolio</div>
      </div>

      <nav style={styles.navContainer}>
        <ul style={styles.nav}>
          {navItems.map((item) => (
            <li 
              key={item.label}
              style={styles.navItem}
              onMouseEnter={() => setHoveredLink(item.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link 
                href={item.href} 
                style={styles.link}
              >
                <span style={styles.linkText}>{item.label}</span>
                <span 
                  style={{
                    ...styles.linkHoverLine,
                    width: hoveredLink === item.label ? '100%' : '0%',
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button style={styles.ctaButton}>
        Let's Connect
        <div style={styles.ctaButtonHover}></div>
      </button>
    </header>
  );
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 2.5rem",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#ffffff",
    position: "sticky" as const,
    top: 0,
    zIndex: 100,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  
  logoContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
  },
  
  logoLink: {
    textDecoration: "none",
    display: "inline-block",
    /* Explicitly prevent any transforms on logo link */
    transform: "none !important",
  },
  
  logo: {
    fontSize: "1.8rem",
    fontWeight: 700,
    margin: 0,
    position: "relative" as const,
    display: "inline-block",
    background: "linear-gradient(90deg, #ffffff, #a5b4fc)",
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    letterSpacing: "-0.5px",
    /* Explicitly remove transition */
    transition: "none !important",
    transform: "none !important",
  },
  
  logoUnderline: {
    position: "absolute" as const,
    bottom: "-4px",
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #818cf8, transparent)",
    borderRadius: "2px",
    /* Explicitly remove transition */
    transition: "none !important",
    transform: "none !important",
  },
  
  logoSubtitle: {
    fontSize: "0.75rem",
    color: "#cbd5e1",
    letterSpacing: "2px",
    marginTop: "4px",
    opacity: 0.8,
  },
  
  navContainer: {
    display: "flex",
    alignItems: "center",
  },
  
  nav: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  
  navItem: {
    position: "relative" as const,
  },
  
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    padding: "0.5rem 0",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    position: "relative" as const,
    overflow: "hidden",
  },
  
  linkText: {
    position: "relative" as const,
    zIndex: 2,
    fontWeight: 500,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  
  linkHoverLine: {
    position: "absolute" as const,
    bottom: "4px",
    left: "50%",
    transform: "translateX(-50%)",
    height: "2px",
    background: "linear-gradient(90deg, #818cf8, #6366f1)",
    borderRadius: "1px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 1,
  },
  
  ctaButton: {
    background: "linear-gradient(135deg, #818cf8, #6366f1)",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 600,
    cursor: "pointer",
    position: "relative" as const,
    overflow: "hidden",
    transition: "box-shadow 0.3s ease",
    letterSpacing: "0.5px",
    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
    /* Explicitly prevent transforms */
    transform: "none !important",
  },
  
  ctaButtonHover: {
    position: "absolute" as const,
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transition: "left 0.7s ease",
  },
} as const;

// Add hover effects via CSS - TARGET SPECIFICALLY
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* CTA button effects - ONLY shimmer, NO lift */
    @keyframes buttonShimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    
    button:hover > div {
      animation: buttonShimmer 0.7s ease;
    }
    
    button:hover {
      /* Only box shadow change, NO transform */
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4) !important;
      transform: none !important;
    }
    
    /* Navigation link hover effects - SPECIFIC TARGETING */
    nav ul li a:hover span.link-text {
      color: #ffffff;
      transform: translateY(-2px);
    }
    
    /* Logo - NO hover effects */
    .logo-link:hover h1,
    .logo-link:hover div {
      transform: none !important;
    }
    
    /* Active link effect for nav only */
    nav ul li a.active span.link-text {
      color: #ffffff;
    }
    
    nav ul li a.active div {
      width: 100% !important;
    }
  `;
  document.head.appendChild(style);
}