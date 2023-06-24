import axios from 'axios';
import type { APIRoute } from 'astro';
import { WP_URL } from '../const';

// Type pour un slug
type Slug = string;

// Fonction pour récupérer les slugs depuis une API externe
async function fetchSlugs(): Promise<Slug[]> {
  const response = await axios.get(`${WP_URL}/wp-json/wp/v2/latest-posts/`);
  const slugs: Slug[] = response.data;
  return slugs;
}

// Fonction pour générer une entrée de sitemap pour un slug
function generateSitemapEntry(slug: Slug): string {
  return `<url>
      <loc>https://deeptool.fr${slug}</loc>
    </url>`;
}

// Fonction pour générer la sitemap complète
function generateSitemap(slugs: Slug[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${slugs.map(slug => generateSitemapEntry(slug)).join('\n')}
</urlset>`;
}

export const get: APIRoute = async () => {
  const slugs = await fetchSlugs();
  const sitemap = generateSitemap(slugs);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};