import React, { useState, useEffect } from 'react';
import './PasswordGenerator.css';

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const generatePassword = () => {
    fetch(
      `http://localhost:5000?length=${length}&uppercase=${uppercase}&lowercase=${lowercase}&numbers=${numbers}&symbols=${symbols}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPassword(data.password);
        setStrength(data.strength);
      })
      .catch((err) => console.error(err));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Senha copiada!");
  };
  
  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="password-generator-container">
      <h1>Personalize sua senha</h1>

      <div className="password-display">
        <div className="password-field">{password}</div>
        <button className="copy-button" onClick={copyToClipboard}>
          Copiar senha
        </button>
      </div>

      <div className="length-control">
        <div className="length-header">
          <span>Número de caracteres da senha</span>
          <span className="length-value">{length}</span>
        </div>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div className="strength-indicator">
          Força: <span className={`strength ${strength}`}>{strength}</span>
        </div>
      </div>

      <div className="options-container">
        <label className="option-item">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          Letra maiúscula
        </label>
        
        <label className="option-item">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          Letra minúscula
        </label>
        
        <label className="option-item">
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          Números
        </label>
        
        <label className="option-item">
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
          Símbolos
        </label>
      </div>

      <button className="generate-button" onClick={generatePassword}>
        Gerar nova senha
      </button>
    </div>
  );
}

export default PasswordGenerator;