import WaveSvg from "@/assets/wave-svg";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col justify-between pt-48">
      <div className="mx-36 flex h-72 w-[700px] flex-col justify-between font-poppins">
        <h1 className="text-4xl">
          Discover and rate the best places in your{" "}
          <span className="text-primary">Favourite Cities</span>
        </h1>
        <p className="text-xl">
          Explore iconic museums, delightful restaurants, and hidden gems
          recommended by traveler's like you.
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
      <div className="hidden opacity-40 lg:block">
        <WaveSvg />
      </div>
    </div>
  );
};

export default HomePage;
