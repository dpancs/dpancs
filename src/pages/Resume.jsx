import './Resume.css';
import { SITE, useSeo } from '../seo';

const experience = [
  {
    title: 'Senior Software Engineering Manager',
    company: 'Lyra Health',
    dates: 'August 2025 – Present',
    bullets: [
      'Lead the In-Care Experience team and Engage Provider tool, integrating GenAI capabilities within our product portfolio.',
      'Manage a team of tech leads and managers to drive feature requests across multiple scrum teams.',
      'Architect migration of React application assets to utilize CloudFront CDN, improving efficiency and reducing cost by 38%.',
    ],
  },
  {
    title: 'Software Engineering Manager',
    company: 'Lyra Health',
    dates: 'Feb 2022 – August 2025',
    bullets: [
      'Lead the In-Care Experience team, responsible for full-stack systems delivering content, notifications, and analytics to 100K+ users.',
      'Scaled team from 3 to 8 engineers; implemented onboarding plans and mentoring frameworks to enhance productivity.',
      'Revamped sprint process, reducing story rollover by 30% through improved task scoping and prioritization.',
      'Architected the redesign of the customer portal using ReactJS, react-native-for-web, and styled-components; improved UX and performance.',
      'Improved customer satisfaction by approximately 25% through survey updates, notification tuning, and efficient backend automation.',
      'Enabled multilingual notifications and migrated transactional messaging from multiple services to one consolidated vendor, ensuring security and delivery of emails.',
      'Automated content generation workflows, decreasing delivery time by 40%.',
      'Led roadmap alignment efforts with Product, Design, UX, and Clinical Operations through user interviews and agile rituals.',
    ],
  },
  {
    title: 'Software Engineer II → Senior Software Engineer',
    company: 'Intuit Inc.',
    dates: 'Mar 2018 – Feb 2022',
    bullets: [
      'Owned two microservices and led planning and delivery cycles; promoted within 18 months.',
      'Created an onboarding microservice template using Grails, Java Spring Boot, and Intuit-managed modules. It was adopted by 8+ teams to speed deployment to Intuit Kubernetes Service for the SBSEG organization.',
      'Led backend API and integration for the ProAdvisor Loyalty Program, coordinating with internal platforms including identity and billing. Provided frontend support using ReactJS, Apollo GraphQL, and styled-components.',
      'Reduced QBOA homepage load time from 12 seconds to under 4 seconds using Apollo Client, code splitting, and dynamic imports, while redesigning the end-user experience.',
      'Deployed critical services via Jenkins and ArgoCD using blue-green and parallel deployment strategies.',
      'Mentored engineers, conducted interviews, and contributed to UI component development and code testing frameworks shared across the SBSEG organization.',
    ],
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Lyra Health',
    dates: 'Apr 2016 – Mar 2018',
    bullets: [
      "Was one of the early software engineers involved in building Lyra's first platform for client- and provider-facing services supporting therapists, advisors, and care seekers.",
      'Built email infrastructure with Salesforce Marketing Cloud for automated, personalized outreach, as well as transactional email setup using SparkPost.',
      'Managed vendors and integrations with Lyra’s third-party vendors and participated in the procurement process.',
      'Implemented a Twilio-based phone routing system and passwordless login flow using SES and DynamoDB.',
      'Developed a chatbot via the Facebook Messenger API to streamline helpdesk access based on user inputs.',
    ],
  },
  {
    title: 'Implementation Analyst → Senior Full Stack Software Engineer',
    company: 'Nomis Solutions',
    dates: 'Jul 2010 – Apr 2016',
    bullets: [
      'Led the launch of the Deposits vertical in Price Optimizer, unlocking the major US banking market with SaaS support.',
      'Contributed to the Nomis Workbench platform using Grails, Backbone.js, and MongoDB to improve product configurability.',
      'Improved big data processing time from 24 hours to a few hours using the Hadoop ecosystem, including HBase, Hive, and Pig.',
      'Managed global deployments via Jenkins and AWS; served as the primary DevOps contact reporting server costs to executives.',
      'Integrated predictive models via PMML, reducing integration and testing time by 25%.',
      'Supported internal analytics, bug tracking, and international engineering resource coordination.',
    ],
  },
];

const skills = {
  Languages: 'Java, Python, JavaScript, Typescript, HTML/CSS',
  Frontend: 'ReactJS, React-native, Redux, Apollo GraphQL',
  Backend: 'Spring Boot, Flask, NodeJS, Docker, MySQL, Redis',
  'Cloud & Tools':
    'AWS (EC2, RDS, S3, SNS, SQS, SES, CloudFront), Kubernetes, Jenkins, GitHub, Splunk, Sumologic, Datadog, JProfiler',
};

function Resume() {
  useSeo({
    title: 'Resume | Deep Pancholi',
    description:
      'Resume of Deep Pancholi, Senior Software Engineering Manager at Lyra Health. Engineering leadership across Intuit, startups, full-stack systems, and GenAI.',
    path: '/resume',
  });

  return (
    <main className="resume-page">
      <section className="resume-hero">
        <p className="resume-eyebrow">Software Engineering Leadership</p>
        <h1>Deep Pancholi</h1>
        <div className="resume-contact">
          <a
            href="https://www.linkedin.com/in/deeppancholi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Results-driven Software Engineering Manager with 15 years of experience
          in full-stack development, system architecture, and team leadership.
          Proven track record of scaling teams, driving agile delivery, and
          building scalable, customer-centric platforms in healthcare and fintech.
          Strong communicator with cross-functional collaboration experience across
          product, UX, and DevOps. Passionate about mentoring engineers and
          delivering high-impact solutions.
        </p>
      </section>

      <section className="resume-section">
        <h2>Core Competencies</h2>
        <div className="competency-grid">
          {[
            'Team Leadership & Hiring',
            'Agile Delivery & Sprint Planning',
            'Scalable Architecture Design',
            'Cross-Functional Collaboration',
            'Customer-Centric Development',
            'Full-Stack Web & Mobile Development',
            'Cloud Infrastructure (AWS, K8s)',
            'CI/CD, DevOps & Monitoring',
            'Internationalization & Notification Systems',
          ].map((item) => (
            <span className="competency" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          {experience.map((role) => (
            <article className="experience-item" key={`${role.company}-${role.dates}`}>
              <div className="experience-heading">
                <div>
                  <h3>{role.title}</h3>
                  <p className="company">{role.company}</p>
                </div>
                <time>{role.dates}</time>
              </div>
              <ul>
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="resume-columns">
        <section className="resume-section">
          <h2>Education</h2>
          <ul className="plain-list">
            <li>M.S. in Computer Engineering, University of Texas at Arlington</li>
            <li>B.E. in Electrical Engineering, Nirma Institute of Technology, India</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            {Object.entries(skills).map(([category, values]) => (
              <p key={category}><strong>{category}:</strong> {values}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Resume;