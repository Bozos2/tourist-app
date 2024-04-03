import FooterWave from "@/assets/svgs/footer-wave-svg";
import { FooterContent } from "./footer-content";

export const Footer = () => {
  return (
    <footer className="font-poppins">
      <div className="relative hidden xl:block">
        <FooterWave />
        <div className="absolute top-1/2 w-full px-6 sm:px-24 xl:px-32">
          <FooterContent />
        </div>
      </div>
      <div className="flex w-full flex-col  px-6 py-4 sm:px-24 xl:hidden">
        <div className="mt-24 px-4">
          <div className="h-0.5  bg-muted-foreground opacity-20"> </div>
        </div>
        <FooterContent />
      </div>
    </footer>
  );
};
