import { headers } from "next/headers";

export function getIp() {
  let ForwardedFor = headers().get("x-forwarded-for");
  let realIp = headers().get("x-real-ip");

  if (ForwardedFor) {
    return ForwardedFor.split(",")[0].trim();
  }

  if (realIp) return realIp.trim();

  return null;
}
