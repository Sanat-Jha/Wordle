const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensure it's above other elements
    },
    gameOverBanner: {
      backgroundColor: '#ff4c4c',
      color: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      maxWidth: '400px',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '1.2rem',
    },
  };
  
  function GameOver() {
    return (
      <div style={styles.overlay}>
        <div style={styles.gameOverBanner}>
          <h1 style={styles.heading}>Game Over</h1>
          <p style={styles.paragraph}>You lost</p>
        </div>
      </div>
    );
  }
  
  export default GameOver;
  