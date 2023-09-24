import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://2023wybory.pl';
  const sejmRoutes = Array.from({length: 41}, (_, i) => i + 1).map((districtId) => ({
    url: `${siteUrl}/sejm/${districtId}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const routes = ['', 'sejm', 'faq', 'mapy'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...sejmRoutes];
}
