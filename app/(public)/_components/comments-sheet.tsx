"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Rate } from "./ratings";
import { getAllComments } from "@/actions/reviews";
import { CommentsPropsData } from "./comments-swiper";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CommentsLocationIdProp {
  locationId: string;
}

const CommentsSheet: React.FC<CommentsLocationIdProp> = ({ locationId }) => {
  const [comments, setComments] = useState<CommentsPropsData[]>([]);
  const [loading, setLoading] = useState(true);
  const isFetchedData = useRef(false);

  const fetchComments = async () => {
    setLoading(true);
    const commentsData = await getAllComments(locationId);
    setComments(commentsData);
    setLoading(false);
  };

  const handleOpen = () => {
    if (!isFetchedData.current) {
      isFetchedData.current = true;
      fetchComments();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" onClick={handleOpen}>
          All reviews
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>All users reviews</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full w-full">
          <ul className="mt-6 flex flex-col">
            {loading ? (
              <div className="mt-12 flex justify-center">
                <h1 className="text-lg font-medium">Loading...</h1>
              </div>
            ) : (
              comments.map((data) => (
                <li key={data.id}>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <Avatar className="h-10 w-10 rounded-lg">
                        <AvatarImage src={data?.user?.image || " "} />
                        <AvatarFallback className="rounded-lg bg-primary">
                          <div className="bg-primary text-white">
                            <h1 className="text-xl font-medium">
                              {data?.user?.name!.slice(0, 1)}
                            </h1>
                          </div>
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <Link
                          href={`/profile/${data?.user?.name}-${data?.user?.id}`}
                          className="font-medium hover:underline"
                        >
                          {data?.user?.name}
                        </Link>
                        <Rate
                          value={data.rating}
                          size="sm"
                          className="text-sm"
                        />
                      </div>
                    </div>
                    <span className="pt-2 text-xs font-light text-muted-foreground">
                      {format(new Date(data.createdAt), "PP")}
                    </span>
                  </div>
                  <div className="mt-3 content-center">
                    <p className="text-sm opacity-85">{data.title}</p>
                  </div>
                  <Separator className="my-5" />
                </li>
              ))
            )}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default CommentsSheet;
