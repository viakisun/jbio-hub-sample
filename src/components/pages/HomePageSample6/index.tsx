import React, { useEffect, useRef } from 'react';

const HomePageSample6 = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('s6-visible');
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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');

        :root {
          --s6-bg-color: #ffffff;
          --s6-text-color: #212529;
          --s6-primary-color: #007bff; /* A simple, professional blue */
          --s6-border-color: #dee2e6;
          --s6-font-display: 'Noto Sans KR', sans-serif;
          --s6-font-body: 'Noto Sans KR', sans-serif;
        }

        .s6-container {
          background-color: var(--s6-bg-color);
          color: var(--s6-text-color);
          font-family: var(--s6-font-body);
          overflow-x: hidden;
        }

        .s6-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid var(--s6-border-color);
        }

        .s6-hero {
          text-align: center;
        }

        .s6-hero h1 {
          font-family: var(--s6-font-display);
          font-size: 4rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.3;
          color: #000;
        }

        .s6-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 1.5rem auto 0;
          color: #495057;
        }

        .s6-scroll-down {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6c757d;
          animation: s6-bounce 2s infinite;
        }

        @keyframes s6-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -20px); }
          60% { transform: translate(-50%, -10px); }
        }

        .s6-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .s6-grid-text h2 {
          font-family: var(--s6-font-display);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--s6-text-color);
        }

        .s6-grid-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #495057;
        }

        .s6-grid-visual {
          background-color: #f8f9fa;
          border-radius: 16px;
          border: 1px solid var(--s6-border-color);
          min-height: 400px;
          overflow: hidden;
        }

        .s6-grid-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .s6-showcase-section {
          text-align: center;
          background-color: #f8f9fa;
        }

        .s6-showcase-section h2 {
          font-family: var(--s6-font-display);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }

        .s6-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .s6-card {
          background: #ffffff;
          border: 1px solid var(--s6-border-color);
          border-radius: 16px;
          padding: 2rem;
          text-align: left;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .s6-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .s6-card h3 {
          font-family: var(--s6-font-display);
          font-weight: 700;
          color: var(--s6-primary-color);
          margin-bottom: 1rem;
        }

        /* Animation Classes */
        .s6-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .s6-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .s6-hero h1 {
            font-size: 5rem;
          }
          .s6-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
          .s6-grid.s6-reverse .s6-grid-text {
            order: 2;
          }
        }
      `}</style>
      <div className="s6-container">
        <section className="s6-section s6-hero">
          <div className="s6-anim s6-visible">
            <h1>JB SQUARE: 혁신의 내일을 열다</h1>
            <p>
              JB SQUARE는 전북의 미래를 함께 만드는 혁신 공간입니다.
              모든 정보와 기회를 한 곳에서 만나보세요.
            </p>
          </div>
          <div className="s6-scroll-down">Scroll Down</div>
        </section>

        <section className="s6-section">
          <div className="s6-grid">
            <div className="s6-grid-text s6-anim" ref={addToRefs}>
              <h2>데이터 기반 생태계</h2>
              <p>
                연구자, 스타트업, 그리고 기업들이 서로 연결되고 협력하며 성장할 수 있도록,
                JB SQUARE는 데이터에 기반한 강력한 생태계를 제공합니다.
              </p>
            </div>
            <div className="s6-grid-visual s6-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
              <img src="https://picsum.photos/seed/jbsquare_minimal1/800/600?grayscale" alt="데이터 시각화" />
            </div>
          </div>
        </section>

        <section className="s6-section">
          <div className="s6-grid s6-reverse">
             <div className="s6-grid-text s6-anim" ref={addToRefs}>
              <h2>경계 없는 협력</h2>
              <p>
                공동 연구실부터 R&D 프로젝트까지, 우리의 플랫폼은 산업의 개척자들과
                새로운 인재들 간의 경계 없는 협력을 촉진합니다.
              </p>
            </div>
            <div className="s6-grid-visual s6-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
              <img src="https://picsum.photos/seed/jbsquare_minimal2/800/600?grayscale" alt="협업 공간" />
            </div>
          </div>
        </section>

        <section className="s6-section s6-showcase-section">
          <div style={{width: '100%'}}>
            <h2 className="s6-anim" ref={addToRefs}>핵심 서비스</h2>
            <div className="s6-card-grid">
              <div className="s6-card s6-anim" ref={addToRefs} style={{transitionDelay: '0.1s'}}>
                <h3>R&D 지원</h3>
                <p>최첨단 시설 이용과 전문가 컨설팅을 통해 연구 개발의 속도를 높여보세요.</p>
              </div>
              <div className="s6-card s6-anim" ref={addToRefs} style={{transitionDelay: '0.2s'}}>
                <h3>기술 네트워킹</h3>
                <p>혁신가, 투자가, 그리고 산업 리더들로 구성된 활기찬 커뮤니티와 연결됩니다.</p>
              </div>
              <div className="s6-card s6-anim" ref={addToRefs} style={{transitionDelay: '0.3s'}}>
                <h3>스타트업 인큐베이션</h3>
                <p>자금 조달 기회부터 멘토십까지, 바이오 스타트업을 위한 포괄적인 지원을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageSample6;
