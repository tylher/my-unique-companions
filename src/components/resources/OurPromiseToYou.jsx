import {
  MdOutlineFavoriteBorder,
  MdOutlineForum,
  MdOutlineGroup,
  MdOutlineHealthAndSafety,
  MdOutlineHome,
  MdOutlinePsychology,
  MdOutlineSelfImprovement,
} from "react-icons/md";

const OurPromiseToYou = () => {
  return (
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-section-gap-md px-20 py-16">
      <div class="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-xl border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
        <h2 class="font-display font-semibold text-3xl text-primary mb-6">
          Our Promise to You
        </h2>
        <p class="font-body text-on-surface-variant mb-8">
          We are committed to maintaining a dignified, warm, and highly
          personalized environment that feels like true home, while delivering
          uncompromising professional care.
        </p>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="material-symbols-outlined text-secondary-container mr-4 mt-1 text-lg">
              <MdOutlineFavoriteBorder />
            </span>
            <span class="font-body  text-on-surface-variant">
              <strong>Compassionate Care:</strong> Every interaction is rooted
              in empathy and deep respect for individual histories.
            </span>
          </li>
          <li class="flex items-start">
            <span class="material-symbols-outlined text-secondary-container mr-4 mt-1 text-lg">
              <MdOutlineHome />
            </span>
            <span class="font-body text-on-surface-variant">
              <strong>A Real Home:</strong> We prioritize comfort and
              familiarity, stripping away sterile medical aesthetics.
            </span>
          </li>
          <li class="flex items-start">
            <span class="material-symbols-outlined text-secondary-container mr-4 mt-1 text-lg">
              <MdOutlineForum />
            </span>
            <span class="font-body-md text-body-md text-on-surface-variant">
              <strong>Transparent Communication:</strong> You will always know
              how your loved one is doing, feeling, and thriving.
            </span>
          </li>
          <li class="flex items-start">
            <span class="material-symbols-outlined text-secondary-container mr-4 mt-1 text-lg">
              <MdOutlineHealthAndSafety />
            </span>
            <span class="font-body text-on-surface-variant">
              <strong>Unwavering Safety:</strong> Rigorous protocols ensure
              physical well-being without compromising freedom.
            </span>
          </li>
        </ul>
      </div>

      <div class="bg-surface-container-lowest rounded-xl p-8 md:p-12 shodow-xl border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
        <h2 class="font-display font-semibold text-3xl text-primary mb-6">
          What to Expect
        </h2>
        <div class="space-y-6">
          <div>
            <h3 class="font-display text-lg text-primary mb-2 flex items-center font-bold">
              <span class="material-symbols-outlined text-primary-container mr-2">
                <MdOutlineGroup />
              </span>{" "}
              Consistent Faces
            </h3>
            <p class="font-body text-on-surface-variant">
              Our caregivers aren't a rotating cast. We maintain a tight-knit
              team so that your loved one builds genuine, trusting relationships
              with staff who intimately know their preferences and needs.
            </p>
          </div>
          <div>
            <h3 class="font-display text-lg text-primary mb-2 flex items-center font-bold">
              <span class="material-symbols-outlined text-primary-container mr-2">
                <MdOutlinePsychology />
              </span>{" "}
              Specialized Training
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Our staff undergoes continuous education, specializing in dementia
              care, mobility assistance, and nuanced communication techniques to
              handle complex care needs gracefully.
            </p>
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-primary mb-2 flex items-center">
              <span class="material-symbols-outlined text-primary-container mr-2">
                <MdOutlineSelfImprovement />
              </span>{" "}
              Respect for Autonomy
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              We encourage independence wherever possible. From daily routines
              to meal choices, we empower our residents to maintain control over
              their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromiseToYou;
