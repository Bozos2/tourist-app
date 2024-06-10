import { headers } from "next/headers";

function getIp() {
  let ForwardedFor = headers().get("x-forwarded-for");
  let realIp = headers().get("x-real-ip");

  if (ForwardedFor) {
    return ForwardedFor.split(",")[0].trim();
  }

  if (realIp) return realIp.trim();

  return null;
}

export async function GET() {
  const ip = getIp();
  return new Response(JSON.stringify({ ip }), {
    headers: { "Content-Type": "application/json" },
  });
}
