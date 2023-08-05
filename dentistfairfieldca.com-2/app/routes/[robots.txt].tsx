import { getPosts } from "~/components/Blog";
import { treatments } from "~/components/Treatments";

const urls = ["/", "/about", "/contact", "/treatments", "/blog"];

treatments.forEach((treatment) => {
  urls.push(`/treatments/${treatment.id}`);
});

export const loader = () => {
  const content = `User-agent: *
Allow: /

Sitemap: https://dentistfairfieldca.com/sitemap.xml`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
