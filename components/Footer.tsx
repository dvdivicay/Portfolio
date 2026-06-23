import { site } from "@/lib/data";
import { Github, Linkedin, Instagram, Mail } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text">
            Divicay<span className="logo-dot">.</span>
          </span>
          <p className="mono">Embedded Software Engineer · Cebu, PH</p>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a href={site.socials.github} target="_blank" rel="noopener" className="social" aria-label="GitHub">
            <Github />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener" className="social" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href={site.socials.instagram} target="_blank" rel="noopener" className="social" aria-label="Instagram">
            <Instagram />
          </a>
          <a href={`mailto:${site.email}`} className="social" aria-label="Email">
            <Mail />
          </a>
        </div>

        <p className="footer-copy mono">
          © {year} {site.name} — Built from scratch.
        </p>
      </div>
    </footer>
  );
}
