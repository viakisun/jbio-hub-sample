import React, { useEffect, useRef } from 'react';

const HomePageSample5 = () => {
  // For JS-based animations if CSS scroll-timeline is not supported
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('s5-visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:wght@300;400;700&display=swap');

        :root {
          --s5-bg-color: #0c0a1a;
          --s5-text-color: #e0e0e0;
          --s5-primary-color: #00f2ff;
          --s5-secondary-color: #ff00c1;
          --s5-font-display: 'Orbitron', sans-serif;
          --s5-font-body: 'Roboto', sans-serif;
        }

        .s5-container {
          background-color: var(--s5-bg-color);
          color: var(--s5-text-color);
          font-family: var(--s5-font-body);
          overflow-x: hidden;
        }

        .s5-section {
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .s5-hero {
          text-align: center;
        }

        .s5-hero h1 {
          font-family: var(--s5-font-display);
          font-size: 4rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
          background: linear-gradient(90deg, var(--s5-primary-color), var(--s5-secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
        }

        .s5-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 1.5rem auto 0;
          opacity: 0.8;
        }

        .s5-scroll-down {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.7;
          animation: s5-bounce 2s infinite;
        }

        @keyframes s5-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translate(-50%, 0);
          }
          40% {
            transform: translate(-50%, -20px);
          }
          60% {
            transform: translate(-50%, -10px);
          }
        }

        .s5-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        .s5-grid-text h2 {
          font-family: var(--s5-font-display);
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--s5-primary-color);
        }

        .s5-grid-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.8;
        }

        .s5-grid-visual {
          background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), rgba(255, 0, 193, 0.1));
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-height: 300px;
        }

        .s5-showcase-section {
          text-align: center;
        }

        .s5-showcase-section h2 {
          font-family: var(--s5-font-display);
          font-size: 3rem;
          margin-bottom: 3rem;
        }

        .s5-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .s5-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          text-align: left;
        }

        .s5-card h3 {
          font-family: var(--s5-font-display);
          color: var(--s5-primary-color);
          margin-bottom: 1rem;
        }

        /* Animation Classes */
        .s5-anim {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .s5-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .s5-hero h1 {
            font-size: 6rem;
          }
          .s5-grid {
            grid-template-columns: 1fr 1fr;
          }
          .s5-grid.s5-reverse {
            grid-template-columns: 1fr 1fr;
          }
          .s5-grid.s5-reverse .s5-grid-text {
            order: 2;
          }
        }
      `}</style>
      <div className="s5-container">
        <section className="s5-section s5-hero">
          <div className="s5-anim s5-visible">
            <h1>The Future, Redesigned.</h1>
            <p>
              This is an immersive, scroll-driven journey into the future of web design.
              Built for 2025, optimized for mobile, and powered by modern concepts.
            </p>
          </div>
          <div className="s5-scroll-down">Scroll Down</div>
        </section>

        <section className="s5-section">
          <div className="s5-grid">
            <div className="s5-grid-text s5-anim" ref={addToRefs}>
              <h2>Dynamic Storytelling</h2>
              <p>
                Forget static pages. We create narratives that unfold as you explore.
                Every scroll, every interaction, reveals a new piece of the story,
                keeping users engaged and captivated.
              </p>
            </div>
            <div className="s5-grid-visual s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}></div>
          </div>
        </section>

        <section className="s5-section">
          <div className="s5-grid s5-reverse">
             <div className="s5-grid-text s5-anim" ref={addToRefs}>
              <h2>Mobile-First Fluidity</h2>
              <p>
                In 2025, mobile isn't just an option; it's the foundation.
                Our designs are born on mobile, ensuring a flawless, intuitive experience
                on any device, any screen size.
              </p>
            </div>
            <div className="s5-grid-visual s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}></div>
          </div>
        </section>

        <section className="s5-section s5-showcase-section">
          <div style={{width: '100%'}}>
            <h2 className="s5-anim" ref={addToRefs}>Core Principles</h2>
            <div className="s5-card-grid">
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.1s'}}>
                <h3>Bold Typography</h3>
                <p>Content that makes a statement. Fonts are not just for reading; they are a key design element.</p>
              </div>
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
                <h3>Asymmetric Layouts</h3>
                <p>Breaking the grid to create dynamic, visually interesting compositions that guide the user's eye.</p>
              </div>
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.3s'}}>
                <h3>Microinteractions</h3>
                <p>Small animations and feedback loops that make the user experience delightful and intuitive.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageSample5;
