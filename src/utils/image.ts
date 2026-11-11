const LOCAL_IMAGE_MAP: Record<string, string> = {
  'https://i.ibb.co/F4H29r8L/Gemini-Generated-Image-ask7jyask7jyask7-1.png': '/images/vertx-hero-1.webp',
  'https://i.ibb.co/7xh2RMMY/Gemini-Generated-Image-xhsictxhsictxhsi.png': '/images/vertx-agri-walls.webp',
  'https://i.ibb.co/j98GM2hY/Gemini-Generated-Image-vapyvdvapyvdvapy.png': '/images/vertx-industrial-roof.webp',
  'https://i.ibb.co/GfWMr0JQ/Gemini-Generated-Image-9c3aj9c3aj9c3aj9.png': '/images/vertx-estate-hybrid.webp',
  'https://i.ibb.co/Nnypf28k/unnamed-7.png': '/images/vertx-industrial-roof.webp',
  'https://i.ibb.co/xK679kyV/unnamed.png': '/images/vertx-warehouse-roof.jpg',
  'https://i.ibb.co/VWf3353d/unnamed-5.png': '/images/vertx-commercial-estate.jpg',
};

export const optimizeImage = (url: string, width: number = 800, quality: number = 80): string => {
  if (!url) return '';

  // Map known external URLs (including expired i.ibb.co links) to local static assets
  if (LOCAL_IMAGE_MAP[url]) {
    return LOCAL_IMAGE_MAP[url];
  }

  // Return local public assets or data URLs directly without external proxy
  if (url.startsWith('/') || url.startsWith('data:') || url.includes('wsrv.nl')) {
    return url;
  }

  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=${quality}`;
};
