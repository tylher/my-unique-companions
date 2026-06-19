"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiBell,
  FiCalendar,
  FiMessageCircle,
  FiRefreshCw,
} from "react-icons/fi";

const TOUCHPOINTS = [
  {
    icon: FiRefreshCw,
    title: "Regular updates",
    body: "We share how your loved one is doing on a consistent schedule, so you're never left wondering.",
    side: "left",
  },
  {
    icon: FiMessageCircle,
    title: "Calls or texts, as needed",
    body: "Something worth mentioning between updates? We'll reach out directly, the way you'd want to hear it.",
    side: "right",
  },
  {
    icon: FiCalendar,
    title: "Care plan reviews",
    body: "We sit down together to revisit the plan, talk through what's working, and adjust what isn't.",
    side: "left",
  },
  {
    icon: FiBell,
    title: "Immediate notification of changes",
    body: "If anything changes in your loved one's condition, you hear from us right away, not after the fact.",
    side: "right",
  },
];

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function TouchpointCard({ item, index, inView }) {
  const Icon = item.icon;
  const isLeft = item.side === "left";

  return (
    <div
      className={`tp-row ${isLeft ? "tp-row--left" : "tp-row--right"}`}
      style={{ transitionDelay: inView ? `${index * 120 + 200}ms` : "0ms" }}
      data-inview={inView}
    >
      <div className="tp-node-wrap" aria-hidden="true">
        <span
          className="tp-node"
          style={{ transitionDelay: `${index * 120}ms` }}
        />
      </div>

      <div className="tp-card" tabIndex={0}>
        <div className="tp-card-icon">
          <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h3 className="tp-card-title">{item.title}</h3>
        <p className="tp-card-body">{item.body}</p>
      </div>
    </div>
  );
}

export default function PartnershipSection() {
  const [sectionRef, sectionInView] = useInView(0.15);

  return (
    <section className="partnership-section" ref={sectionRef}>
      <div
        className="partnership-glow partnership-glow--blue"
        aria-hidden="true"
      />
      <div
        className="partnership-glow partnership-glow--orange"
        aria-hidden="true"
      />

      <div className="partnership-inner">
        <header className="partnership-header">
          <span className="partnership-eyebrow">Our Partnership</span>
          <h2 className="partnership-title">
            Families are essential
            <br />
            partners in care
          </h2>
          <p className="partnership-intro">
            We keep the line open, always, through these four touchpoints.
          </p>
        </header>

        <div className="partnership-thread">
          <div
            className="thread-line"
            style={{ transform: sectionInView ? "scaleY(1)" : "scaleY(0)" }}
            aria-hidden="true"
          />

          {TOUCHPOINTS.map((item, i) => (
            <TouchpointCard
              key={item.title}
              item={item}
              index={i}
              inView={sectionInView}
            />
          ))}

          <div className="thread-open-end" aria-hidden="true">
            <span className="thread-open-glow" />
          </div>
        </div>

        <p className="partnership-closing">
          You're always welcome to ask questions, share concerns, or request
          adjustments to care.
        </p>
      </div>
    </section>
  );
}
