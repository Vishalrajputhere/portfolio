import { useEffect } from "react";
import { siteConfig } from "../content/siteContent";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
}

function SeoHead() {
  useEffect(() => {
    document.title = siteConfig.title;

    upsertMeta('meta[name="description"]', { name: "description", content: siteConfig.description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: siteConfig.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: siteConfig.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: siteConfig.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: siteConfig.description });
    upsertLink("canonical", siteConfig.canonical);
  }, []);

  return null;
}

export default SeoHead;
