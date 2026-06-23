import { site } from "@/lib/data";
import { asset } from "@/lib/config";
import { Mail, Phone, MapPin, ArrowRight } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner reveal">
        <p className="section-kicker">
          <span className="mono">05</span> / Contact
        </p>
        <h2 className="contact-title">Let&apos;s build something reliable.</h2>
        <p className="contact-sub">
          Open to embedded / firmware engineering opportunities and
          collaborations. The fastest way to reach me is email.
        </p>

        <div className="contact-cards">
          <a href={`mailto:${site.email}`} className="contact-card">
            <Mail />
            <span className="contact-label">Email</span>
            <span className="contact-value">{site.email}</span>
          </a>
          <a href={`tel:${site.phone}`} className="contact-card">
            <Phone />
            <span className="contact-label">Phone</span>
            <span className="contact-value">{site.phoneDisplay}</span>
          </a>
          <div className="contact-card static">
            <MapPin />
            <span className="contact-label">Location</span>
            <span className="contact-value">{site.location}</span>
          </div>
        </div>

        <div className="contact-actions">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Say Hello
            <ArrowRight />
          </a>
          <a href={asset(site.resume)} className="btn btn-ghost" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
