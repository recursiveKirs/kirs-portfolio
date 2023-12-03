import "./ExperiencePage.css";

export const ExperiencePage = () => {
  return (
    <div className="experience-content">
      <h1>About Me</h1>

      <p>
        Github: <a href="https://github.com/recursiveKirs">recursiveKirs</a> |
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/kirs-imsong">kirs-imsong</a>
      </p>

      <section class="resume-section">
        <h2>Experience</h2>

        <div class="experience-item">
          <h3>Sofar Sounds - Senior Software Engineer</h3>
          <p>Cambridge, MA | July 2021 – Oct 2023</p>
          <ul>
            <li>
              Led the Sofar Sounds React client migration to the ViteJS
              framework, reducing local development startup time by 99%.
            </li>
            <li>
              Integrated a $4 million Visa partnership experience into the
              platform using TypeScript, Ruby on Rails, AWS, and GraphQL.
            </li>
            <li>
              Developed a JavaScript AB Testing framework for statistically
              significant measurement of new feature impacts.
            </li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Vistaprint - Senior Software Engineer</h3>
          <p>Waltham, MA | Apr 2021 – Oct 2023</p>
          <ul>
            <li>
              Conducted comprehensive React and TypeScript training program for
              30 software engineers.
            </li>
            <li>
              Designed system architecture, established Node.js microservices,
              and developed React frontends for the Studio Icons feature.
            </li>
            <li>
              Implemented Web Application Firewalls (WAFs) in front of AWS
              application load balancers.
            </li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Vistaprint - Software Engineer</h3>
          <p>Aug 2019 – Mar 2021</p>
          <ul>
            <li>
              Built React frontend and backend C#.NET Core microservices for a
              global Vistaprint web experience update.
            </li>
            <li>
              Enhanced Vistaprint Design Studio load time performance by 40%.
            </li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Cisco Systems - Software Engineer Intern</h3>
          <p>San Jose, CA | May 2018 – Aug 2018</p>
          <ul>
            <li>
              Upgraded the internal logging tool for Webex Teams using TDD with
              Python and Docker.
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section">
        <h2>Skills</h2>
        <p>Languages: JavaScript, Ruby, C#, Python, Java, C, SQL, CSS, HTML</p>
        <p>
          Frameworks: React, Typescript, Rails, Node.js, .NET Core, React
          Native, MySQL, PostgreSQL
        </p>
        <p>
          Tools: Docker, AWS, Heroku, Android Studio, Xcode, Git, Swagger,
          Terraform, Looker
        </p>
      </section>

      <section class="resume-section">
        <h2>Education</h2>
        <p>B.S. in Computer Science, Minor in Mathematics</p>
        <p>University of Massachusetts Amherst | May 2019 | GPA 3.7</p>
      </section>

      <section class="resume-section">
        <h2>Projects</h2>
        <p>
          Founder, Technical Lead - SpeedrunBounties.gg (Sep 2020 - Sep 2022)
        </p>
        <ul>
          <li>
            Founder of a web platform for creating, discovering, and
            participating in speedrunning challenges for crowdsourced cash
            prizes.
          </li>
          <li>
            Led a team of 5 developers in the design, implementation, and
            testing of the Node.js backend service, React frontend app, and
            GraphQL middleware for speedrunbounties.gg.
          </li>
        </ul>
      </section>
    </div>
  );
};
