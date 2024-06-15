"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rate } from "./ratings";
import { Skeleton } from "@/components/ui/skeleton";

export interface CommentCardProps {
  id: string;
  userId: string;
  title: string;
  rating: number;
  createdAt: Date;
  username: string;
  image: string;
  index: number;
}

const CommentsCard: React.FC<CommentCardProps> = ({
  id,
  userId,
  title,
  rating,
  createdAt,
  username,
  image,
  index,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!isVisible) return <CommentsCardSkeleton />;

  return (
    <div
      className="w-80 rounded-lg border border-input bg-gray-50 p-3 dark:border-0 dark:bg-transparent/40"
      key={id}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-14 w-14 rounded-lg">
            <AvatarImage src={image || " "} />
            <AvatarFallback className="rounded-lg bg-primary">
              <div className="bg-primary text-white">
                <h1 className="text-xl font-medium">{username.slice(0, 1)}</h1>
              </div>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link
              href={`/profile/${username}-${userId}`}
              className="text-lg font-medium hover:underline"
            >
              {username}
            </Link>
            <Rate value={rating} size="sm" className="text-sm" />
          </div>
        </div>
        <span className="pt-2 text-xs font-light text-muted-foreground">
          {format(new Date(createdAt), "PP")}
        </span>
      </div>
      <div className="mt-4 h-28 content-center">
        <p className="overflow-hidden text-sm opacity-85">{title}</p>
      </div>
    </div>
  );
};

export default CommentsCard;

export const CommentsCardSkeleton = () => {
  return (
    <div className="flex w-80  flex-col rounded-lg bg-gray-50 p-3 dark:bg-transparent/40">
      <div className="flex animate-pulse flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="h-14 w-14 rounded-lg bg-zinc-200 dark:bg-zinc-500" />
          <div className="flex flex-col">
            <Skeleton className="mb-2 h-2 w-16 bg-zinc-200 dark:bg-zinc-500" />
            <Skeleton className="h-2 w-8 bg-zinc-200 dark:bg-zinc-500" />
          </div>
        </div>
        <div>
          <Skeleton className="mt-3 h-3 w-16 bg-zinc-200 dark:bg-zinc-500" />
        </div>
      </div>
      <div className="animate-pulse">
        <Skeleton className="mt-4 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
        <Skeleton className="mt-2 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
        <Skeleton className="mt-2 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
        <Skeleton className="mt-2 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
        <Skeleton className="mt-2 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
        <Skeleton className="mt-2 h-3 w-full bg-zinc-200 dark:bg-zinc-500" />
      </div>
    </div>
  );
};
