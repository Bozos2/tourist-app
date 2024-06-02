"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { removeComment } from "@/actions/add-comment";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Rate } from "@/app/(public)/_components/ratings";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CommentForm from "@/app/(public)/_components/comment-form";

export interface ReviewsDataProps {
  id: string;
  locationId: string;
  rating: number;
  title: string;
  createdAt: Date;
  locations: {
    name: string;
  };
}

interface ReviewsData {
  reviews: ReviewsDataProps[];
  isOwnUser: boolean;
}

const ProfileReviewsTab = ({ reviews, isOwnUser }: ReviewsData) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const InitialReviews = reviews.slice(0, 4);

  const handleShowData = () => {
    setShowAll((prev) => !prev);
  };

  if (reviews.length < 1) {
    return (
      <div className="flex items-center justify-center pt-12">
        <h1 className="text-muted-foreground">
          User still don&apos;t have reviews!
        </h1>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
        {!showAll
          ? InitialReviews.map((data) => (
              <ReviewsCard
                id={data.id}
                locationId={data.locationId}
                rating={data.rating}
                title={data.title}
                createdAt={data.createdAt}
                locations={data.locations}
                comment={data}
                isOwnUser={isOwnUser}
              />
            ))
          : reviews.map((data) => (
              <ReviewsCard
                id={data.id}
                locationId={data.locationId}
                rating={data.rating}
                title={data.title}
                createdAt={data.createdAt}
                locations={data.locations}
                comment={data}
                isOwnUser={isOwnUser}
              />
            ))}
      </div>
      <div className="mt-8 flex w-full justify-center">
        {reviews.length > InitialReviews.length ? (
          <Button className="w-1/2 sm:w-fit" onClick={handleShowData}>
            {showAll ? "Show less" : "Show all"}
          </Button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ProfileReviewsTab;

interface ReviewsCardProp {
  id: string;
  locationId: string;
  rating: number;
  title: string;
  createdAt: Date;
  locations: {
    name: string;
  };
  comment: { rating: number; title: string; id: string };
  isOwnUser: boolean;
}

const ReviewsCard = ({
  id,
  locationId,
  rating,
  title,
  createdAt,
  locations,
  comment,
  isOwnUser,
}: ReviewsCardProp) => {
  return (
    <div
      className="flex w-full max-w-96  flex-col justify-between rounded-xl border border-input bg-background px-4 py-2 dark:border-0  dark:bg-transparent/40"
      key={id}
    >
      <div className="flex flex-row justify-between">
        <Rate value={rating} />{" "}
        {isOwnUser ? (
          <EditRemoveDropdown comment={comment} commentId={id} />
        ) : (
          ""
        )}
      </div>
      <Link
        href={`/explore/${locations.name.toLocaleLowerCase()}-${locationId}`}
        className="tex-lg w-48 truncate pt-2 font-bold text-gray-900 hover:underline dark:text-white"
      >
        {locations.name}
      </Link>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="line-clamp-2 pt-2 text-sm font-light">{title}</p>
          </TooltipTrigger>
          <TooltipContent className="max-w-64">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex w-full justify-end pt-4">
        <p className="text-xs text-muted-foreground">
          Posted{" "}
          {formatDistance(new Date(createdAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

interface DropdownProps {
  commentId: string;
  comment: { rating: number; title: string; id: string };
}

const EditRemoveDropdown = ({ commentId, comment }: DropdownProps) => {
  const router = useRouter();

  const handleRemove = async (commentId: string) => {
    await removeComment(commentId).then((data) => {
      if ("error" in data) {
        toast.error(data.error);
      } else {
        toast.success("Review removed successfully!");
        router.refresh();
      }
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <BsThreeDots className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <UpdateDrawerDialog comment={comment} />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleRemove(commentId)}
        >
          <RiDeleteBinLine className="mr-2 h-4 w-4" />
          <span>Remove</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface UpdateDrawerDialogProps {
  comment: { rating: number; title: string; id: string };
}

const UpdateDrawerDialog = ({ comment }: UpdateDrawerDialogProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSuccess = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="cursor-pointer"
          >
            <MdEdit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="space-y-4 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update your review</DialogTitle>
            <DialogDescription>
              Update your experience and opinion about this place!
            </DialogDescription>
          </DialogHeader>
          <CommentForm
            commentId={comment.id}
            comment={comment}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="cursor-pointer"
        >
          <MdEdit className="mr-2 h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuItem>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Update your review</DrawerTitle>
          <DrawerDescription>
            Update your experience and opinion about this place!
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <CommentForm
            commentId={comment.id}
            comment={comment}
            onSuccess={handleSuccess}
          />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
