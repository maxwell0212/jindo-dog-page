import { useState, useEffect } from 'react';
import jindoDog from '../assets/images/jindo-dog.svg';
import '../styles/animations.css';

function DancingDog() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  // 키보드 네비게이션 지원
  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggleAnimation();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAnimating]);

  return (
    <div className="dancing-dog-container">
      <h1>진돗개가 춤춰요! 🐕</h1>

      <div className="dog-wrapper">
        <img
          src={jindoDog}
          alt="Dancing Jindo Dog"
          className={`jindo-dog ${isAnimating ? 'dancing' : ''}`}
        />
      </div>

      <button
        onClick={toggleAnimation}
        className="control-button"
        aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작'}
        tabIndex={0}
      >
        {isAnimating ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <div className="info-text">
        <p>
          클릭해서 진돗개를 {isAnimating ? '멈춰' : '춤추게 해'}보세요!
        </p>
        <p className="keyboard-hint">
          (스페이스바 또는 엔터키로도 제어 가능)
        </p>
      </div>
    </div>
  );
}

export default DancingDog;
