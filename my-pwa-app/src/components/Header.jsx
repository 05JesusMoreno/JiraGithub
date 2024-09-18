import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Practica Clase Jira GitHub</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Inicio</a>
        <a href="#services" style={styles.navLink}>Servicios</a>
        <a href="#contact" style={styles.navLink}>Contacto</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Header;