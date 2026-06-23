import { stats } from "@/lib/data";
import { MapPin, Calendar } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">
            <span className="mono">01</span> / About
          </p>
          <h2 className="section-title">
            Engineering at the hardware–software boundary
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m a <strong>Computer Engineer</strong> focused on embedded
              systems — firmware development, multi-sensor integration, and
              low-level driver design using <strong>Zephyr RTOS</strong> and{" "}
              <strong>ESP-IDF</strong>. I care about building reliable systems,
              debugging complex hardware–software interactions, and ensuring data
              integrity across communication protocols.
            </p>
            <p>
              Highly trainable and a reliability-focused problem-solver, I&apos;m
              experienced in system bring-up, performance optimization, and
              keeping things stable in real-world environments — from the bench
              to the field.
            </p>

            <div className="about-meta">
              <div className="meta-item">
                <MapPin />
                <span>Cebu City, Philippines</span>
              </div>
              <div className="meta-item">
                <Calendar />
                <span>BS Computer Engineering, 2022–2026</span>
              </div>
              <div className="meta-item">
                <span className="status-dot"></span>
                <span>Open to embedded / firmware roles</span>
              </div>
            </div>
          </div>

          <div className="stats reveal">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-card${s.highlight ? " highlight" : ""}`}
              >
                <div className="stat-num">
                  {s.num}
                  {s.suffix && <span>{s.suffix}</span>}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
