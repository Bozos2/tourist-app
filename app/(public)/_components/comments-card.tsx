"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rate } from "./ratings";

export interface CommentCard {
  id: string;
  title: string;
  rating: number;
  createdAt: Date;
  username: string;
  image: string;
}

const CommentsCard: React.FC<CommentCard> = ({
  id,
  title,
  rating,
  createdAt,
  username,
  image,
}) => {
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
            <Link href="/" className="text-lg font-medium hover:underline">
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
        <p className="text-sm opacity-85">{title}</p>
      </div>
    </div>
  );
};

export default CommentsCard;
