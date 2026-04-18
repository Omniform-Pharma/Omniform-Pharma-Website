import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

// Hero placeholder that confirms the app is ready for section-by-section build.
function HeroSection() {
  return (
    <SectionWrapper className="py-20 sm:py-24">
      <div className="max-w-2xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
          Website Setup Complete
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Ready to implement your exact Figma design
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          In the next step, we will replace this starter content with your real layout and visual
          system from the provided design.
        </p>
        <Button label="Start Section Build" className="bg-sky-700 text-white hover:bg-sky-800" />
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
