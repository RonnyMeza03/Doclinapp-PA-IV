import React from 'react';
import '../css/Principal.css'; 
import { Link } from 'react-router-dom';

const Principal = () => {
    return (
        <div className="principal">
            <header className="header">
                <div className="logo">DoclinApp</div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/login" className="nav-link">Login</Link>
                           
                        </li>
                    </ul>
                </nav>
            </header>
            <h2 className="section-title">
                <p>
                    Somos La Mejor herramienta 
                    Para el Analisis de tu Salud
                </p>
                
                
            </h2>

            <main className="main-content">
                <section className="hero">
                    <h1>Bienvenido a DoclinApp</h1>
                    <p>Tu herramienta para organizar datos y análisis de pacientes de forma eficiente.</p>
                    <button className="cta-button">Comienza Ahora</button>
                </section>

                
                <section className="about-us">
                    <p>En DoclinApp, somos un equipo dedicado a facilitar la gestión de datos médicos. Nuestra misión es proporcionar a los doctores una herramienta eficiente y fácil de usar para ayudarles a enfocarse en lo que realmente importa: el cuidado de sus pacientes.</p>
                    
                    <div className="team">
                        <div className="team-member">
                            <h3>Dr. Juan Pérez</h3>
                            <p>Especialista en Medicina General</p>
                        </div>
                        <div className="team-member">
                            <h3>Dra. Ana Gómez</h3>
                            <p>Especialista en Pediatría</p>
                        </div>
                    </div>
                </section>

                <h2 className="section-title">Características</h2>
                <section className="features">
                    <div className="feature">
                        <h2>Característica 1</h2>
                        <p>Descripción breve de la característica.</p>
                    </div>
                    <div className="feature">
                        <h2>Característica 2</h2>
                        <p>Descripción breve de la característica.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Principal;
