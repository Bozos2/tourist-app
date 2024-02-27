import WaveSvg from "@/assets/wave-svg";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col justify-between pt-24 sm:pt-36 lg:pt-48">
      <div className="mx-6 flex flex-col justify-between gap-10 font-poppins sm:mx-24 lg:h-72 lg:w-[700px] lg:gap-0 xl:mx-36">
        <h1 className="text-4xl">
          Discover and rate the best places in your{" "}
          <span className="text-primary">Favourite Cities</span>
        </h1>
        <p className="text-xl">
          Explore iconic museums, delightful restaurants, and hidden gems
          recommended by traveler&apos;s like you.
        </p>
        <div className="flex flex-row gap-9">
          <Button
            variant="default"
            className="rounded py-6 tracking-wide text-white"
          >
            Explore Now
          </Button>
          <Button className="rounded border border-primary bg-transparent py-6 tracking-wide text-primary hover:text-white">
            Join Now
          </Button>
        </div>
      </div>
      <div className="z-0 hidden opacity-40 sm:block">
        <WaveSvg />
      </div>
    </div>
  );
};

export default HomePage;
