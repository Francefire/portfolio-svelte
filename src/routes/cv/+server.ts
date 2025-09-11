import type { RequestHandler } from '@sveltejs/kit';

// GET /cv
// Small proxy that serves the static PDF with proper headers.
// - Inline by default, or force download with ?dl=1
// - Controls cache via Cache-Control
export const GET: RequestHandler = async (event) => {
  // Fetch the already-built static asset from /static (served at /cv.pdf)
  const res = await event.fetch('/cv.pdf');
  if (!res.ok) return res;

  const asAttachment =
    event.url.searchParams.has('dl') || event.url.searchParams.has('download');

  // Clone/override headers to ensure correct content type and disposition
  const headers = new Headers(res.headers);
  headers.set('content-type', 'application/pdf');
  headers.set(
    'content-disposition',
    `${asAttachment ? 'attachment' : 'inline'}; filename="Touhami_Aglagal_CV.pdf"`
  );
  headers.set('cache-control', 'public, max-age=3600, stale-while-revalidate=86400');

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers
  });
};
