import React from 'react';
import Icon from '../../atoms/Icon';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__background-pattern" />
      <div className="hero__floating-element" />
      <div className="hero__content">
        <h1 className="hero__title">
          JB SQUARE – Leading the Next Generation of Bio Innovation
        </h1>
        <p className="hero__description">
          A new, modern, and bold design identity, optimized for mobile-first responsive layout.
        </p>
        <button className="hero__cta">
          <span>Explore JB SQUARE</span>
          <Icon name="arrow-right" size={20} color="black" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
