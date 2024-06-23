import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bachata and More",
    short_name: "Bachata and More",
    description: "Eventkonzept für Bachata, Dance, Body & Mind and Workout",
    start_url: "/",
    display: "standalone",
    // background_color: "#fff",
    // theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
