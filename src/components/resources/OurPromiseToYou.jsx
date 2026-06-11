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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-20 py-12 sm:py-16 mb-section-gap-md">
      {/* LEFT */}
      <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 md:p-12 shadow-xl border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-primary mb-6">
          Our Promise to You
        </h2>

        <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-8">
          We are committed to maintaining a dignified, warm, and highly
          personalized environment that feels like true home, while delivering
          uncompromising professional care.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MdOutlineFavoriteBorder className="text-secondary-container mt-1 text-lg shrink-0" />
            <span className="font-body text-sm sm:text-base text-on-surface-variant">
              <strong>Compassionate Care:</strong> Every interaction is rooted
              in empathy and deep respect for individual histories.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <MdOutlineHome className="text-secondary-container mt-1 text-lg shrink-0" />
            <span className="font-body text-sm sm:text-base text-on-surface-variant">
              <strong>A Real Home:</strong> We prioritize comfort and
              familiarity, stripping away sterile medical aesthetics.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <MdOutlineForum className="text-secondary-container mt-1 text-lg shrink-0" />
            <span className="font-body text-sm sm:text-base text-on-surface-variant">
              <strong>Transparent Communication:</strong> You will always know
              how your loved one is doing.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <MdOutlineHealthAndSafety className="text-secondary-container mt-1 text-lg shrink-0" />
            <span className="font-body text-sm sm:text-base text-on-surface-variant">
              <strong>Unwavering Safety:</strong> Rigorous protocols ensure
              physical well-being without compromising freedom.
            </span>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 md:p-12 shadow-xl border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-primary mb-6">
          What to Expect
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-base sm:text-lg text-primary mb-2 flex items-center font-bold gap-2">
              <MdOutlineGroup className="text-primary-container" />
              Consistent Faces
            </h3>
            <p className="font-body text-sm sm:text-base text-on-surface-variant">
              Our caregivers aren't a rotating cast. We maintain a tight-knit
              team so that your loved one builds genuine relationships.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base sm:text-lg text-primary mb-2 flex items-center font-bold gap-2">
              <MdOutlinePsychology className="text-primary-container" />
              Specialized Training
            </h3>
            <p className="font-body text-sm sm:text-base text-on-surface-variant">
              Continuous education in dementia care, mobility assistance, and
              communication techniques.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-primary mb-2 flex items-center gap-2">
              <MdOutlineSelfImprovement className="text-primary-container" />
              Respect for Autonomy
            </h3>
            <p className="font-body text-sm sm:text-base text-on-surface-variant">
              We empower residents to maintain control over daily routines and
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromiseToYou;
