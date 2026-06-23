import { skillGroups, techGroups, credentials } from "@/lib/data";
import { groupIcon, skillIcon } from "./Icons";

function TechIcon({ icon }: { icon: string }) {
  if (icon.startsWith("badge:")) {
    return <span className="lang-badge">{icon.slice(6)}</span>;
  }
  return <i className={icon}></i>;
}

export default function Skills() {
  return (
    <section id="skills" className="section skills alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">
            <span className="mono">04</span> / Skills
          </p>
          <h2 className="section-title">My toolkit</h2>
        </div>

        <div className="skills-grid">
          {/* text-based skill groups */}
          {skillGroups.map((group) => {
            const Icon = groupIcon[group.icon];
            return (
              <div key={group.title} className="skill-group reveal">
                <h3 className="skill-group-title">
                  {Icon && <Icon />}
                  {group.title}
                </h3>
                <ul className="skill-list">
                  {group.items.map((item) => {
                    const ItemIcon = skillIcon[item.icon];
                    return (
                      <li key={item.label}>
                        {ItemIcon && <ItemIcon />}
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* tech-logo groups */}
          {techGroups.map((group) => {
            const Icon = groupIcon[group.icon];
            return (
              <div key={group.title} className="skill-group reveal">
                <h3 className="skill-group-title">
                  {Icon && <Icon />}
                  {group.title}
                </h3>
                <ul className="skill-tech">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <TechIcon icon={item.icon} />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Education / Certifications / Awards */}
        <div className="credentials">
          {credentials.map((col) => {
            const Icon = groupIcon[col.icon];
            return (
              <div key={col.title} className="cred-col reveal">
                <h3 className="cred-title">
                  {Icon && <Icon />}
                  {col.title}
                </h3>
                {col.items.map((item, i) => (
                  <div key={i} className="cred-item">
                    <p className="cred-name">{item.name}</p>
                    <p className="cred-meta">{item.meta}</p>
                    {"date" in item && item.date && (
                      <p className="cred-meta mono">{item.date}</p>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
