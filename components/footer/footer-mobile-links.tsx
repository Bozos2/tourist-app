import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

const MobileLinks = () => {
  return (
    <div className="flex w-full flex-col px-12 pt-2 sm:hidden sm:px-24">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b-2">
          <AccordionTrigger className="text-md pr-1">Links</AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins text-base font-light text-foreground">
              <li className="pb-1 hover:text-primary">
                <Link href="/home">Home</Link>
              </li>
              <li className="pb-1 hover:text-primary">
                <Link href="/explore">Explore</Link>
              </li>
              <li className="pb-1 hover:text-primary">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="pb-1 hover:text-primary">
                <Link href="/privacy">Privacy</Link>
              </li>
              <li className="pb-1 hover:text-primary">
                <Link href="/faq">Faq</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-2">
          <AccordionTrigger className="text-md pr-1">Socials</AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins text-base font-light  text-foreground">
              <li className="hover:text-primary">
                <Link href="">Instagram</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="">Twitter</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="">Facebook</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileLinks;
