import React from 'react';

const DisclaimerBanner = () => {
  return (
    <div style={{
      backgroundColor: '#ff9900', // Amazon-style orange
      color: '#000',
      textAlign: 'center',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 'bold',
      width: '100%',
      zIndex: '9999' // Ensures it stays above other elements
    }}>
      This is a demo/educational project and not a real e-commerce site. 
      No real transactions are processed here.
    </div>
  );
};

export default DisclaimerBanner;