"use client";

import { useEffect } from "react";

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

declare global {
  interface Window {
    spread_shop_config?: {
      shopName: string;
      prefix: string;
      baseId: string;
      locale?: string;
      updateMetadata?: boolean;
      usePushState?: boolean;
    };
  }
}

export default function SpreadShop() {
  useEffect(() => {
    // Configure the shop in the window scope before loading the client script.
    window.spread_shop_config = {
      shopName: SHOP_NAME,
      prefix: PREFIX,
      baseId: BASE_ID,
      locale: "de_DE",
      updateMetadata: true,
    };

    // Inject the SpreadShop client script. The widget renders into #myShop.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount so re-mounting re-initializes the shop cleanly.
      script.remove();
      delete window.spread_shop_config;
      const container = document.getElementById(BASE_ID);
      if (container) container.innerHTML = "Spreadshop wird geladen ...";
    };
  }, []);

  return (
    <div id={BASE_ID} className="min-h-[60vh]">
      Spreadshop wird geladen ...
    </div>
  );
}
