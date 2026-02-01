import { useState, useEffect } from 'react';

const MESSAGES = [
  "Inspecting Rides...",
  "Setting up Carnival Games...",
  "Ensuring Safety Protocols...",
  "Polishing the Fun...",
  "Prakash Amusements is Ready."
];

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 800);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="logo-section">
          <h1 className="logo-text">
            PRAKASH <span className="highlight">AMUSEMENTS</span>
          </h1>
          <div className="sub-logo-text">LEGACY OF THRILLS</div>
        </div>

        <div className="loader-section">
          <div className="progress-wrapper">
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-stats">
              <span className="loading-message">{MESSAGES[messageIndex]}</span>
              <span className="percentage">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        <div className="loading-footer">
          <p>© {new Date().getFullYear()} Prakash Amusements | EST. 2002</p>
        </div>
      </div>

      <style>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, #010c0c 0%, #010606 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          overflow: hidden;
        }

        .loading-content {
          text-align: center;
          width: 100%;
          max-width: 500px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .logo-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          color: white;
          letter-spacing: -2px;
          margin: 0;
          animation: breathe 3s ease-in-out infinite;
        }

        .logo-text .highlight {
          color: #01bf71;
          position: relative;
        }

        .sub-logo-text {
          color: rgba(255,255,255,0.4);
          letter-spacing: 8px;
          font-size: 0.7rem;
          margin-top: 1rem;
          font-weight: 500;
        }

        .progress-wrapper {
          width: 100%;
        }

        .progress-bar-bg {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.05);
          position: relative;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, transparent, #01bf71, transparent);
          background-size: 200% 100%;
          transition: width 0.4s cubic-bezier(0.1, 0.7, 1.0, 0.1);
          box-shadow: 0 0 20px rgba(1, 191, 113, 0.5);
        }

        .progress-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          font-family: 'Inter', sans-serif;
        }

        .loading-message {
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 1px;
        }

        .percentage {
          color: #01bf71;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .loading-footer {
          position: absolute;
          bottom: 3rem;
          left: 0;
          width: 100%;
          color: rgba(255,255,255,0.2);
          font-size: 0.7rem;
          letter-spacing: 2px;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.02); opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 480px) {
          .sub-logo-text { letter-spacing: 4px; }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
