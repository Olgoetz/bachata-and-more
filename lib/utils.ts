import { PRODUCTION_DOMAIN } from "./constants";

export function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return `https://${PRODUCTION_DOMAIN}`;
  }
}
