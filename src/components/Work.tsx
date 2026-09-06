import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    num: "01",
    title: "Network Packet & Threat Analyzer",
    category: "Network Security",
    tools: "Python, Scapy, Wireshark, Bash",
    image: "/images/project-1.png",
  },
  {
    num: "02",
    title: "Digital Artifact & RAM Forensic Suite",
    category: "Digital Forensics",
    tools: "Volatility, Autopsy, Sleuth Kit, Python",
    image: "/images/project-2.png",
  },
  {
    num: "03",
    title: "Automated Red Team Recon Tool",
    category: "Offensive Security",
    tools: "Python, Nmap Scripting, Docker, Linux",
    image: "/images/project-3.png",
  },
  {
    num: "04",
    title: "University Club Management Portal",
    category: "Full Stack Development",
    tools: "React, TypeScript, Node.js, SQLite",
    image: "/images/project-4.png",
  },
  {
    num: "05",
    title: "Malware Analysis & Sandbox Monitor",
    category: "Incident Response",
    tools: "Procmon, Cuckoo Sandbox, Ghidra, YARA",
    image: "/images/project-5.png",
  },
  {
    num: "06",
    title: "Interactive 3D Portfolio & Telemetry",
    category: "Creative Web & UI",
    tools: "TypeScript, Three.js, GSAP, React",
    image: "/images/project-6.png",
  },
];

const Work = () => {
  useGSAP(() => {
    const workSection = document.querySelector(".work-section") as HTMLElement;
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const boxes = document.querySelectorAll<HTMLElement>(".work-box");

    if (!workSection || !workFlex || !boxes.length) return;

    // Calculate the exact horizontal travel distance based on actual rendered card width
    const getDistance = () => {
      const cardWidth = boxes[0].offsetWidth;
      const totalWidth = cardWidth * boxes.length;
      return Math.max(0, totalWidth - window.innerWidth + 160);
    };

    let scrollTween = gsap.to(workFlex, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: workSection,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${getDistance()}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // Handle re-calculation once images/DOM finish rendering
    const onWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onWindowLoad);
    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      clearTimeout(timer);
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === workSection) t.kill();
      });
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;