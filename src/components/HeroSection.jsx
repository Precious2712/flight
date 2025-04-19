import { useHeroCarousel } from "@/HookComp/useHeroCarousel";
import { Plane } from "lucide-react";

const HeroSection = () => {
  const { currentSlide } = useHeroCarousel();

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          src={currentSlide.image}
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/50" />
      </div>
      <div className="relative flex h-full items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-4 flex flex-col items-center justify-center gap-2">
            <Plane className="h-8 w-8" />
            <h1 className="text-4xl font-bold sm:text-5xl">{currentSlide.title}</h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            {currentSlide.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
