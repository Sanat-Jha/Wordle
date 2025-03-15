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
    winBanner: {
      backgroundColor: '#4caf50', // Green for success
      color: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      maxWidth: '450px',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '1.2rem',
    },
    word: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginTop: '10px',
    },
  };
  
  function WinningOverlay({ word }) {
    return (
      <div style={styles.overlay}>
        <div style={styles.winBanner}>
          <h1 style={styles.heading}>🎉 Congratulations! 🎉</h1>
          <p style={styles.paragraph}>You guessed the right word!</p>
          <p style={styles.word}>Word: {word}</p>
        </div>
      </div>
    );
  }
  
  export default WinningOverlay;
  