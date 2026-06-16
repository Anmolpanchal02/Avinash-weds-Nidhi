/** Public site URL for Open Graph / canonical links (set NEXT_PUBLIC_SITE_URL in production). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, '');
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}
