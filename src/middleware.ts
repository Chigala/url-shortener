import { NextRequest, NextResponse, userAgent } from "next/server";

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/api/") ||
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname === "/"
  ) {
    return;
  }

  const slug = req.nextUrl.pathname.split("/").pop();
  console.log("this is the slug: ", slug);
  const latitude = req.geo?.latitude;
  const longitude = req.geo?.longitude;
  const country = req.geo?.country;
  const city = req.geo?.city;
  const { device } = userAgent(req);

  const fetchSlug = await fetch(`${req.nextUrl.origin}/api/get-link/${slug}`);

  if (fetchSlug.status === 404) {
    return;
  }

  const data = await fetchSlug.json();

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
