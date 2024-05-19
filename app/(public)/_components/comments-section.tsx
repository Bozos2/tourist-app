"use client";

import React, { useEffect, useState } from "react";
import CommentTabs from "./comment-tabs";
import {
  getAllComments,
  getTopRatedComments,
  getBadRatedComments,
  getNewestComments,
} from "@/actions/reviews";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

import CommentsCard from "./comments-card";
import CommentsSwiper from "./comments-swiper";
import { CommentsPropsData } from "./comments-swiper";

interface CommentsProp {
  locationId: string;
}

const CommentsSection: React.FC<CommentsProp> = ({ locationId }) => {
  const [comments, setComments] = useState<CommentsPropsData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async (tab: string) => {
    setLoading(true);
    let fetchedComments: any = [];
    switch (tab) {
      case "top":
        fetchedComments = await getTopRatedComments(locationId);
        break;
      case "bad":
        fetchedComments = await getBadRatedComments(locationId);
        break;
      case "newest":
        fetchedComments = await getNewestComments(locationId);
        break;
      default:
        fetchedComments = await getAllComments(locationId);
        break;
    }
    setComments(fetchedComments);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments("all");
  }, []);

  const handleTabChange = (tab: string) => {
    fetchComments(tab);
  };

  if (comments.length === 0) {
    return (
      <div className="flex h-48 items-center justify-center">
        <h1>No one rated this place yet. Be the first one!</h1>
      </div>
    );
  }

  return (
    <div>
      <CommentTabs onTabChange={handleTabChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="my-6 w-full">
          <CommentsSwiper comments={comments} />
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
