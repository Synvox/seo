import { getPosts } from "~/components/Blog";
import { treatments } from "~/components/Treatments";

const urls = ["/", "/about", "/contact", "/treatments", "/blog"];

treatments.forEach((treatment) => {
  urls.push(`/treatments/${treatment.id}`);
});

export const loader = () => {
  const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(
    (url) => `<url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
    </url>`
  )}</urlset>`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
