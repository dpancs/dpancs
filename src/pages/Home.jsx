import { Link } from 'react-router-dom';
import './Home.css';

// TODO(Deep): edit these placeholder stats — values below come from the
// resume so the cards look right, but swap in whatever proof points you want.
const highlights = [
  {
    figure: '15+',
    label: 'Years',
    title: 'Experience',
    body: 'Full-stack engineering and leadership across healthcare and fintech.',
  },
  {
    figure: '3 → 8',
    label: 'Engineers',
    title: 'Team Growth',
    body: 'Scaled the In-Care Experience team with onboarding and mentoring frameworks.',
  },
  {
    figure: '100K+',
    label: 'Users',
    title: 'Scale & Impact',
    body: 'Full-stack systems delivering content, notifications, and analytics.',
  },
  {
    figure: '38%',
    label: 'Cost Saved',
    title: 'Technical Efficiency',
    body: 'Migrated React application assets to a CloudFront CDN, cutting cost.',
  },
];

const approaches = [
  {
    title: 'People-First Leadership',
    body: 'Built inclusive environments where engineers thrive, with onboarding plans, mentoring frameworks, and promotion success stories.',
  },
  {
    title: 'Technical Excellence',
    body: 'Expertise in distributed systems, GenAI capabilities, and scaling performance-critical applications across React, AWS, and Kubernetes.',
  },
  {
    title: 'Process Innovation',
    body: 'Revamped sprint processes and automated workflows, cutting story rollover by 30% and content delivery time by 40%.',
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-photo">
          <img src="/profile.jpg" alt="Deep Pancholi" />
          <a
            className="home-hero-linkedin"
            href="https://www.linkedin.com/in/deeppancholi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deep Pancholi on LinkedIn"
          >
            in
          </a>
        </div>
        <div className="home-hero-text">
          <h1>
            Deep <span className="home-hero-accent">Pancholi</span>
          </h1>
          <p className="home-hero-role">
            Lyra Health — Senior Software Engineering Manager
          </p>
          <p className="home-hero-intro">
            Results-driven engineering leader with 15 years of experience in
            full-stack development, system architecture, and team leadership.
            Proven track record of scaling teams, driving agile delivery, and
            building scalable, customer-centric platforms in healthcare and
            fintech.
          </p>
          <div className="home-hero-pills">
            <span>Engineering Leader</span>
            <span>GenAI &amp; Healthcare</span>
            <span>Team Builder</span>
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="home-container">
          <h2>Career Highlights</h2>
          <div className="home-highlight-grid">
            {highlights.map((item) => (
              <article className="home-card" key={item.title}>
                <p className="home-card-figure">{item.figure}</p>
                <p className="home-card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <h2>Leadership Approach</h2>
          <div className="home-approach-grid">
            {approaches.map((item) => (
              <article className="home-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt home-connect">
        <div className="home-container">
          <h2>Let&apos;s Connect</h2>
          <div className="home-connect-buttons">
            <Link className="home-button home-button-primary" to="/resume">
              View Resume
            </Link>
            <Link className="home-button home-button-secondary" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
