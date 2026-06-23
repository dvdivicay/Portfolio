import { site } from "@/lib/data";
import { asset } from "@/lib/config";
import { ArrowRight, ArrowDown, Cpu, Code, Github, Linkedin, Mail, Facebook } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <svg
        className="circuit-bg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g className="circuit-traces">
          <path d="M0 120 H260 V300 H520" />
          <path d="M1200 200 H940 V420 H700" />
          <path d="M0 560 H180 V680 H460" />
          <path d="M1200 620 H1020 V480 H760" />
          <path d="M600 0 V160 H820 V360" />
          <path d="M340 800 V640 H160" />
        </g>
        <g className="circuit-nodes">
          <circle cx="260" cy="300" r="5" />
          <circle cx="520" cy="300" r="5" />
          <circle cx="940" cy="420" r="5" />
          <circle cx="700" cy="420" r="5" />
          <circle cx="180" cy="680" r="5" />
          <circle cx="820" cy="360" r="5" />
          <circle cx="160" cy="640" r="5" />
        </g>
      </svg>

      <div className="container hero-grid">
        <div className="hero-text reveal">
          <p className="eyebrow">
            <span className="status-dot"></span>
            <span className="mono">{site.role}</span>
          </p>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="accent">Donald.</span>
          </h1>

          <p className="hero-sub">
            I build <strong>reliable firmware</strong> and low-level drivers —
            from multi-sensor architectures on{" "}
            <span className="kw">Zephyr&nbsp;RTOS</span> &amp;{" "}
            <span className="kw">ESP-IDF</span> to <span className="kw">BLE</span>{" "}
            &amp; <span className="kw">RS485&nbsp;Modbus</span> pipelines that
            keep data flowing in the real world.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a href={site.socials.github} target="_blank" rel="noopener" className="social" aria-label="GitHub">
              <Github />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener" className="social" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={`mailto:${site.email}`} className="social" aria-label="Email">
              <Mail />
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noopener" className="social" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="photo-frame">
            <div className="photo-blob">
              {/* plain img keeps static export simple; basePath applied via asset() */}
              <img
                src={asset("/profile.jpg")}
                alt="Portrait of Donald V. Divicay Jr."
                className="photo"
                width={384}
                height={384}
              />
            </div>
            <span className="chip chip-1">
              <i className="devicon-c-plain"></i> Embedded C/C++
            </span>
            <span className="chip chip-2">
              <Cpu /> Zephyr RTOS
            </span>
            <span className="chip chip-3">
              <Code /> Firmware Development
            </span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span className="mono">scroll</span>
        <ArrowDown />
      </a>
    </section>
  );
}
