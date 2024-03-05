import { useEffect, useState } from 'react';

const MatrixText = () => {
  const [showO, setShowO] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showS, setShowS] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowO(true);
    }, 500);
    setTimeout(() => {
      setShowP(true);
    }, 1000);
    setTimeout(() => {
      setShowS(true);
    }, 1500);
  }, []);

  return (
    <div className="matrix-text">
      <div className={`letter ${showO ? 'show' : ''}`}>O</div>
      <div className={`letter ${showP ? 'show' : ''}`}>P</div>
      <div className={`letter ${showS ? 'show' : ''}`}>S</div>
    </div>
  );
};

export default MatrixText;
