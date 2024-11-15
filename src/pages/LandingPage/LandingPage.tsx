// src/pages/LandingPage/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, EmailInput, TextInput, PasswordInput } from '../../../src/components';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <section className="landing-page-container">
      <h1>Musik Samspil</h1>
      <p className="subtitle">Stedet hvor musikere finder musikere og spiller musik sammen</p>
      <p className="description">Log ind for at finde musikere du kan spille med i hele Danmark</p>

      <div className="form-section">
        {/* Login Options */}
        <button className="login-button facebook" disabled>Log ind med Facebook</button>
        <Link to="/create-profile">
          <button className="login-button email">Opret med e-mail</button>
        </Link>
        <span>eller</span>
        <button className="login-button login">Log ind</button>
      </div>
    </section>
  );
};

export default LandingPage;
