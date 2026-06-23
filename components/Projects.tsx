import { projects } from "@/lib/data";

function ProjectArt({ art }: { art: "fish" | "firmware" | "zentask" | "fuel" }) {
  if (art === "fuel") {
    return (
      <div className="project-art art-fuel" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          {/* tank */}
          <rect className="tank" x="34" y="26" width="40" height="68" rx="8" />
          {/* fuel level with wavy surface */}
          <path className="fuel" d="M36 66 q 4.5 -6 9 0 t 9 0 t 9 0 t 9 0 V90 H36 Z" />
          {/* capacitive probe plates */}
          <line className="probe" x1="48" y1="34" x2="48" y2="86" />
          <line className="probe" x1="60" y1="34" x2="60" y2="86" />
          {/* on-device AI inference network */}
          <g className="ai">
            <line className="ai-link" x1="74" y1="50" x2="88" y2="40" />
            <line className="ai-link" x1="74" y1="60" x2="100" y2="58" />
            <line className="ai-link" x1="74" y1="70" x2="88" y2="76" />
            <line className="ai-link" x1="88" y1="40" x2="100" y2="58" />
            <line className="ai-link" x1="100" y1="58" x2="88" y2="76" />
            <circle className="ai-node" cx="88" cy="40" r="4" />
            <circle className="ai-node" cx="100" cy="58" r="4" />
            <circle className="ai-node" cx="88" cy="76" r="4" />
          </g>
        </svg>
      </div>
    );
  }
  if (art === "fish") {
    return (
      <div className="project-art art-fish" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <path
            className="fish-body"
            d="M20 60c10-22 50-30 70-12 8 7 12 12 12 12s-4 5-12 12c-20 18-60 10-70-12Z"
          />
          <path className="fish-tail" d="M14 60 2 48v24Z" />
          <circle className="fish-eye" cx="86" cy="54" r="3" />
          <path className="wave" d="M10 92h100M10 100h100" />
          <path className="bolt" d="M62 30l-10 18h8l-6 16 18-22h-9z" />
        </svg>
      </div>
    );
  }
  if (art === "firmware") {
    return (
      <div className="project-art art-firmware" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <rect className="mcu" x="40" y="40" width="40" height="40" rx="4" />
          <rect className="mcu-core" x="52" y="52" width="16" height="16" rx="2" />
          <g className="mcu-pins">
            <line x1="48" y1="28" x2="48" y2="40" />
            <line x1="60" y1="28" x2="60" y2="40" />
            <line x1="72" y1="28" x2="72" y2="40" />
            <line x1="48" y1="80" x2="48" y2="92" />
            <line x1="60" y1="80" x2="60" y2="92" />
            <line x1="72" y1="80" x2="72" y2="92" />
            <line x1="28" y1="48" x2="40" y2="48" />
            <line x1="28" y1="60" x2="40" y2="60" />
            <line x1="28" y1="72" x2="40" y2="72" />
            <line x1="80" y1="48" x2="92" y2="48" />
            <line x1="80" y1="60" x2="92" y2="60" />
            <line x1="80" y1="72" x2="92" y2="72" />
          </g>
          <circle className="sensor-node" cx="48" cy="22" r="4" />
          <circle className="sensor-node" cx="72" cy="98" r="4" />
          <circle className="sensor-node" cx="22" cy="60" r="4" />
          <circle className="sensor-node" cx="98" cy="60" r="4" />
        </svg>
      </div>
    );
  }
  return (
    <div className="project-art art-zentask" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <rect className="screen" x="24" y="28" width="72" height="56" rx="6" />
        <line className="screen-bar" x1="24" y1="42" x2="96" y2="42" />
        <circle className="dot r" cx="33" cy="35" r="2" />
        <circle className="dot y" cx="41" cy="35" r="2" />
        <circle className="dot g" cx="49" cy="35" r="2" />
        <path className="check" d="M36 60l6 6 12-14" />
        <line className="task-line" x1="60" y1="56" x2="86" y2="56" />
        <line className="task-line" x1="60" y1="66" x2="80" y2="66" />
        <path className="stand" d="M48 84v8h24v-8M40 92h40" />
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">
            <span className="mono">03</span> / Projects
          </p>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card reveal">
              <ProjectArt art={p.art} />
              <div className="project-body">
                <span className="project-flag">{p.flag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
