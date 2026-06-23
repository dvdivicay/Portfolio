import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  // duplicate the list so the loop is seamless
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span className="kw">{item}</span>
            <span>•</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
