import * as React from "react";

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

export function DrawerDialog({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Review Place
          </Button>
        </DialogTrigger>
        <DialogContent className="space-y-4 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add your review</DialogTitle>
            <DialogDescription>
              Tell us your experience and opinion about this place
            </DialogDescription>
          </DialogHeader>
          <CommentForm id={id} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full">
          Review Place
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
          <CommentForm id={id} />
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
