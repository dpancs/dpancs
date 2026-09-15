import { useEffect } from 'react';

// Single source of truth for site-wide SEO values.
export const SITE = {
  name: 'Deep Pancholi',
  url: 'https://deepintheai.com',
  author: 'Deep Pancholi',
  image: 'https://deepintheai.com/logo512.png',
  description:
    'Personal essays, practical engineering notes, and observations about technology, phones, travel, food, and life by Deep Pancholi.',
};

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data) {
  const selector = 'script[data-seo-jsonld="true"]';
  let el = document.querySelector(selector);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-seo-jsonld', 'true');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// Sets title, description, canonical, Open Graph / Twitter tags, and
// optional JSON-LD structured data for the current route.
export function useSeo({ title, description, path, type = 'website', publishedTime, schema }) {
  useEffect(() => {
    const url = `${SITE.url}${path}`;
    document.title = title;
    setMetaByName('description', description);
    setCanonical(url);

    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:type', type);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', SITE.image);
    setMetaByProperty('og:site_name', SITE.name);

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', SITE.image);

    const publishedEl = document.querySelector('meta[property="article:published_time"]');
    if (type === 'article' && publishedTime) {
      setMetaByProperty('article:published_time', publishedTime);
    } else if (publishedEl) {
      publishedEl.remove();
    }

    setJsonLd(schema);
  }, [title, description, path, type, publishedTime, schema]);
}

// "January 16, 2026" -> "2026-01-16" for schema.org date fields.
export function toIsoDate(humanDate) {
  const parsed = new Date(humanDate);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}
