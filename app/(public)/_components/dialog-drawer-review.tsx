"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import CommentForm from "./comment-form";

interface DrawerDialogProps {
  id: string;
  className?: string;
  title: string;
}

export function DrawerDialog({ id, className, title }: DrawerDialogProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSuccess = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className={cn(className)}>
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="space-y-4 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add your review</DialogTitle>
            <DialogDescription>
              Tell us your experience and opinion about this place
            </DialogDescription>
          </DialogHeader>
          <CommentForm locationId={id} onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full">
          {title}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add your review</DrawerTitle>
          <DrawerDescription>
            Tell us your experience and opinion about this place
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <CommentForm locationId={id} onSuccess={handleSuccess} />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
