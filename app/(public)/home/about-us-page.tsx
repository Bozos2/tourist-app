import ProgrammingSvg from "@/assets/svgs/programming-team-svg";

export const AboutUs = () => {
  return (
    <section className="mx-6 flex flex-col py-16 sm:mx-24 xl:mx-32">
      <div className="flex flex-col items-center">
        <h1 className=" text-3xl font-medium tracking-wide">About us </h1>
        <div className="h-1 w-20 bg-primary pt-1"></div>
      </div>
      <div className="flex w-full flex-col items-center justify-center pt-16 sm:pt-0 lg:flex-row lg:gap-16 lg:pt-24">
        <ProgrammingSvg className="hidden transform sm:block sm:scale-75 lg:scale-100" />
        <div className="flex max-w-[300px] flex-col gap-4 sm:max-w-[440px] lg:max-w-[360px] xl:max-w-[500px] 2xl:max-w-[620px]">
          <h1 className="text-3xl font-semibold tracking-wider sm:text-5xl">
            Who We Are?
          </h1>
          <h4 className="text-xl font-medium sm:text-2xl">
            We are passionate team of web developers and designers scattered
            across the globe.
          </h4>
          <p className="opacity-80">
            Our mission is to revolutionize travel experiences through our
            innovative Trip Teasers application, providing users with
            comprehensive guidance and a platform to share their travel
            adventures, both visually and descriptively. At Trip Teasers, we
            understand the challenges and excitement that come with exploring
            new destinations. That&apos;s why we&apos;ve created a user-friendly
            application designed to streamline your travel planning process,
            making your journey as smooth and enjoyable as possible. Our
            platform serves as a hub for travelers to explore and review
            destinations worldwide, connecting you with a global community of
            adventurers.
          </p>
        </div>
      </div>
    </section>
  );
};
