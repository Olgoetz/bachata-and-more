import { ImageResponse } from "next/og";

import { getBaseUrl } from "@/lib/utils";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Bachata and More";

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div style={{ display: "flex" }}>
        <img
          src={`${getBaseUrl()}/og-image.webp`}
          width={1024}
          height={-1}
          alt={alt}
        />
      </div>
      // ImageResponse options
    )
  );
}
