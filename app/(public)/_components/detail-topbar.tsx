"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ArrowLeftIcon, HeartIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "@radix-ui/react-icons";

export const DeatilTopbar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-between">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="link"
              onClick={() => router.back()}
              className="px-0"
            >
              <ArrowLeftIcon className="h-9 w-9 text-primary transition-transform duration-300 hover:-translate-x-2" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="border bg-background text-foreground">
            <p>Back</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link">
                <Share2Icon className="h-7 w-7 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="border bg-background text-foreground">
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant="outline">
          <HeartIcon className="mr-2 h-7 w-7 text-rose-400" />{" "}
          <p className="font-normal tracking-widest">Save</p>
        </Button>
      </div>
    </div>
  );
};
