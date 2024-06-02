import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillRedditCircle,
} from "react-icons/ai";
import {
  FaTiktok,
  FaTelegramPlane,
  FaSnapchatGhost,
  FaPinterest,
} from "react-icons/fa";

const socialIcons = {
  instagram: AiFillInstagram,
  facebook: AiFillFacebook,
  twitter: AiFillTwitterCircle,
  youtube: AiFillYoutube,
  linkedin: AiFillLinkedin,
  reddit: AiFillRedditCircle,
  tiktok: FaTiktok,
  telegram: FaTelegramPlane,
  snapchat: FaSnapchatGhost,
  pinterest: FaPinterest,
};

export const getSocialIcon = (url: string) => {
  if (url.includes("instagram")) return socialIcons.instagram;
  if (url.includes("facebook")) return socialIcons.facebook;
  if (url.includes("twitter")) return socialIcons.twitter;
  if (url.includes("youtube")) return socialIcons.youtube;
  if (url.includes("linkedin")) return socialIcons.linkedin;
  if (url.includes("reddit")) return socialIcons.reddit;
  if (url.includes("tiktok")) return socialIcons.tiktok;
  if (url.includes("telegram")) return socialIcons.telegram;
  if (url.includes("snapchat")) return socialIcons.snapchat;
  if (url.includes("pinterest")) return socialIcons.pinterest;
  return null;
};

export const getSocialIconAndLabel = (url: string) => {
  if (url.includes("instagram"))
    return { icon: socialIcons.instagram, label: "Instagram" };
  if (url.includes("facebook"))
    return { icon: socialIcons.facebook, label: "Facebook" };
  if (url.includes("twitter"))
    return { icon: socialIcons.twitter, label: "Twitter" };
  if (url.includes("youtube"))
    return { icon: socialIcons.youtube, label: "YouTube" };
  if (url.includes("linkedin"))
    return { icon: socialIcons.linkedin, label: "LinkedIn" };
  if (url.includes("reddit"))
    return { icon: socialIcons.reddit, label: "Reddit" };
  if (url.includes("tiktok"))
    return { icon: socialIcons.tiktok, label: "TikTok" };
  if (url.includes("telegram"))
    return { icon: socialIcons.telegram, label: "Telegram" };
  if (url.includes("snapchat"))
    return { icon: socialIcons.snapchat, label: "Snapchat" };
  if (url.includes("pinterest"))
    return { icon: socialIcons.pinterest, label: "Pinterest" };
  return null;
};
