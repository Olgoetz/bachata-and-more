"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

// SpreadShop JavaScript integration.
// Docs: https://www.spreadshop.de/helpcenter/shop-einrichten/website-integration-mit-javascript/
//
// Shop name: bachata-and-more (European shop)
//   prefix: https://bachata-and-more.myspreadshop.de
//   client script: https://bachata-and-more.myspreadshop.net/js/shopclient.nocache.js

const SHOP_NAME = "bachata-and-more";
const PREFIX = `https://${SHOP_NAME}.myspreadshop.de`;
const SCRIPT_SRC = `https://${SHOP_NAME}.myspreadshop.net/js/shopclient.nocache.js`;
const BASE_ID = "myShop";
const SHOP_URL = `https://${SHOP_NAME}.myspreadshop.de/`;

// How long to wait for the widget to render before showing the fallback.
const LOAD_TIMEOUT_MS = 10000;

export default function SpreadShop() {
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (failed) return;

    // The script can load fine yet still fail to render the shop (e.g. the
    // backend startPage request is blocked). Detect that by checking whether
    // the container got populated within the timeout.
    const timer = setTimeout(() => {
      const container = containerRef.current;
      // Ignore our own loading placeholder when checking whether the shop
      // actually rendered.
      const rendered = container?.querySelector(
        '[class*="sprd"], iframe, a, img',
      );
      if (!rendered) setFailed(true);
    }, LOAD_TIMEOUT_MS);

    return () => clearTimeout(timer);
  }, [failed]);

  if (failed) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <p className="text-lg">
          Der Shop konnte gerade nicht geladen werden. Du erreichst ihn direkt
          über den folgenden Link.
        </p>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-bm-main text-white hover:bg-bm-main/90"
        >
          Zum Shop
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Configure the shop before the client script loads. */}
      <Script id="spreadshop-config" strategy="afterInteractive">
        {`
          window.spread_shop_config = {
            shopName: "${SHOP_NAME}",
            prefix: "${PREFIX}",
            baseId: "${BASE_ID}",
            locale: "de_DE",
            updateMetadata: true,
          };
        `}
      </Script>

      {/* SpreadShop client script. The widget renders into #myShop. */}
      <Script
        src={SCRIPT_SRC}
        strategy="afterInteractive"
        onError={() => setFailed(true)}
      />

      <div id={BASE_ID} ref={containerRef} className="min-h-[60vh]">
        <div className="flex flex-col items-center justify-center gap-4 min-h-[60vh]">
          <span className="loading loading-spinner loading-lg text-bm-main" />
          <span className="text-black">Shop wird geladen ...</span>
        </div>
      </div>
    </>
  );
}
