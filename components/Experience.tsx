import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section experience alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">
            <span className="mono">02</span> / Experience
          </p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </div>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li key={i} className="timeline-item reveal">
              <div className="timeline-marker">
                <span></span>
              </div>
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{job.role}</h3>
                  <span className="timeline-date mono">{job.date}</span>
                </div>
                <p className="timeline-org">{job.org}</p>
                <ul className="timeline-points">
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
