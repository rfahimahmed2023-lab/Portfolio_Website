import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started BSc (Hons) Cyber Security & Forensics</h4>
                <h5>Asia Pacific University (APU)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Commenced degree with specialism in Digital Forensics. Built foundational competencies in operating system internals, computer networking, threat modeling, and foundational security architecture.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certified Data Analyst Training & Systems UI</h4>
                <h5>APIIT Corporate Training / University Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Underwent professional data analytics and cloud telemetry training utilizing Microsoft and AWS frameworks. Designed software interface architectures including the APU Badminton Club Management system.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Offensive Labs & Threat Telemetry</h4>
                <h5>TryHackMe & Independent Research</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Active technical practice across network packet analysis, vulnerability enumeration, Linux offensive tooling, and CTF challenges covering both defensive countermeasures and penetration testing fundamentals.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Year 2: Digital Forensics & Incident Response</h4>
                <h5>Asia Pacific University (APU)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Advancing through Year 2 core forensic modules, focusing on file system triage, unallocated space carving, volatile memory extraction (Volatility), malware behavioral analysis, and enterprise chain of custody.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
