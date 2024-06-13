"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { addFavorites } from "@/actions/favorites";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowLeftIcon, HeartIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { LuCopy } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";

export const DeatilTopbar = ({ id }: { id: string }) => {
  const [isPending, setTransition] = useTransition();
  const router = useRouter();

  const favoritesHandler = (id: string) => {
    setTransition(() => {
      addFavorites(id)
        .then((data) => {
          if (data?.error) {
            toast.error(data.error);
          }
          if (data?.success) {
            toast.success(data.success);
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

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
        <DialogShareButton />
        <Button
          variant="outline"
          onClick={() => favoritesHandler(id)}
          disabled={isPending}
        >
          <HeartIcon className="mr-2 h-7 w-7 text-rose-400" />{" "}
          <p className="font-normal tracking-widest">Save</p>
        </Button>
      </div>
    </div>
  );
};

const DialogShareButton = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const pathname = usePathname();
  const baseUrl = "https://tourist-app-ten.vercel.app";
  const link = `${baseUrl}${pathname}`;

  const copylink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">
          <Share2Icon className="h-7 w-7 text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`https://tourist-app-ten.vercel.app${pathname}`}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={copylink}>
            <span className="sr-only">Copy</span>
            {copied ? (
              <IoCheckmarkSharp className="h-4 w-4" />
            ) : (
              <LuCopy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
