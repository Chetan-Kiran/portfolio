import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-photo">
          <div className="photo-placeholder">YN</div>
        </div>
        <h1 className="home-title">Hi, I'm Chetan</h1>
        <p className="home-subtitle">A Full Stack Developer & Creative Problem Solver</p>
        <p className="home-description">
          Passionate about building exceptional digital experiences that make a difference.
        </p>
        <div className="home-actions">
          <button className="btn btn-primary" onClick={() => navigate('/projects')}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
