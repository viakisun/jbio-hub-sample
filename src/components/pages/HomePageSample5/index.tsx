import React, { useEffect, useRef } from 'react';

const HomePageSample5 = () => {
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
        threshold: 0.2,
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
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
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
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-height: 400px;
          overflow: hidden;
        }

        .s5-grid-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
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
            font-size: 5rem;
          }
          .s5-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
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
            <h1>JB SQUARE: The Future of Bio-Innovation.</h1>
            <p>
              We are an innovation hub dedicated to creating the future of Jeonbuk's bio-industry.
              Discover all information and opportunities in one place.
            </p>
          </div>
          <div className="s5-scroll-down">Scroll Down</div>
        </section>

        <section className="s5-section">
          <div className="s5-grid">
            <div className="s5-grid-text s5-anim" ref={addToRefs}>
              <h2>Data-Driven Ecosystem</h2>
              <p>
                We provide a data-driven ecosystem that empowers researchers, startups, and companies to connect, collaborate, and grow.
                Leverage our insights to make your mark.
              </p>
            </div>
            <div className="s5-grid-visual s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
              <img src="https://picsum.photos/seed/jbsquare1/800/600?grayscale&blur=2" alt="Abstract technology" />
            </div>
          </div>
        </section>

        <section className="s5-section">
          <div className="s5-grid s5-reverse">
             <div className="s5-grid-text s5-anim" ref={addToRefs}>
              <h2>Seamless Collaboration</h2>
              <p>
                From shared labs to joint R&D projects, our platform facilitates seamless collaboration
                between industry pioneers and emerging talent.
              </p>
            </div>
            <div className="s5-grid-visual s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
              <img src="https://picsum.photos/seed/jbsquare2/800/600?grayscale&blur=2" alt="Collaborative workspace" />
            </div>
          </div>
        </section>

        <section className="s5-section s5-showcase-section">
          <div style={{width: '100%'}}>
            <h2 className="s5-anim" ref={addToRefs}>Our Core Services</h2>
            <div className="s5-card-grid">
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.1s'}}>
                <h3>R&D Support</h3>
                <p>Access to state-of-the-art facilities and expert consultation to accelerate your research.</p>
              </div>
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
                <h3>Tech Networking</h3>
                <p>Connect with a vibrant community of innovators, investors, and industry leaders.</p>
              </div>
              <div className="s5-card s5-anim" ref={addToRefs} style={{transitionDelay: '0.3s'}}>
                <h3>Startup Incubation</h3>
                <p>Comprehensive support for bio-startups, from funding opportunities to mentorship.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageSample5;
