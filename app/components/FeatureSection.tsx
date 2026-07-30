"use client";

import { useState } from "react";
import FeatureAccordion from "./FeatureAccordion";
import { features } from "../data/features";

export default function FeatureSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold">
            Fitur yang dapat dimanfaatkan di Mamikos
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Berbagai fitur yang memudahkan pencari kos mulai dari mencari,
            survei, booking, hingga pembayaran secara online.
          </p>
        </div>

        <div className="space-y-1">
          {features.map((feature, index) => (
            <FeatureAccordion
              key={feature.title}
              title={feature.title}
              content={feature.content}
              open={active === index}
              onClick={() => setActive(active === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
