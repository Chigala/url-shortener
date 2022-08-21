import { UrlData } from "./../node_modules/.prisma/client/index.d";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/") || req.nextUrl.pathname === "/")
    return;

  const slug = req.nextUrl.pathname.split("/").pop();
  const latitude = req.geo?.latitude;
  const longitude = req.geo?.longitude;
  const country = req.geo?.country;
  const city = req.geo?.city;
  const { device } = userAgent(req);

  const fetchSlug = await fetch(`${req.nextUrl.origin}/api/get-link/${slug}`);

  if (fetchSlug.status === 404) {
    console.log("failing")
    return;
  }

  const data = await fetchSlug.json();
  console.log("this is the data", data);

  if (data.url) {
    //this increment the visits by 1
    await fetch(`${req.nextUrl.origin}/api/update-link/${data?.id}`, {
      method: "PUT",
      body: JSON.stringify({
        latitude,
        longitude,
        country,
        device,
        city,
      }),
    });
    return NextResponse.redirect("https://" + data.url);
  }
}
