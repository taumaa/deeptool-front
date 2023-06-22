import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ request }, next) => {

    console.log(request.url)

    if (request.url.endsWith('/sitemap.xml')) {
        // Continue to the next middleware or route handler
        return next();
    }

    // Check if the URL doesn't end with a slash and is not the root
    if (!request.url.endsWith('/') && request.url !== '/') {
        // Redirect to the same URL with a trailing slash
        return new Response(null, {
        status: 301,
        headers: {
            'Location': request.url + '/',
        },
        });
    }

  // Continue to the next middleware or route handler
  return next();
});