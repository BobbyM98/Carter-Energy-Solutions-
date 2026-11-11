const LOCAL_IMAGE_MAP: Record<string, string> = {
  'https://i.ibb.co/F4H29r8L/Gemini-Generated-Image-ask7jyask7jyask7-1.png': 'images/vertx-hero-perimeter-4k.jpg',
  'https://i.ibb.co/7xh2RMMY/Gemini-Generated-Image-xhsictxhsictxhsi.png': 'images/vertx-agri-fence-4k.jpg',
  'https://i.ibb.co/j98GM2hY/Gemini-Generated-Image-vapyvdvapyvdvapy.png': 'images/vertx-warehouse-roof-4k.jpg',
  'https://i.ibb.co/GfWMr0JQ/Gemini-Generated-Image-9c3aj9c3aj9c3aj9.png': 'images/vertx-green-roof-4k.jpg',
  'https://i.ibb.co/Nnypf28k/unnamed-7.png': 'images/vertx-borehole-vfd-4k.jpg',
  'https://i.ibb.co/xK679kyV/unnamed.png': 'images/vertx-warehouse-roof-4k.jpg',
  'https://i.ibb.co/VWf3353d/unnamed-5.png': 'images/vertx-commercial-estate-4k.jpg',
};

export const optimizeImage = (url: string, width: number = 3840, quality: number = 90): string => {
  if (!url) return '';

  if (LOCAL_IMAGE_MAP[url]) {
    return LOCAL_IMAGE_MAP[url];
  }

  if (url.startsWith('/') || url.startsWith('images/') || url.startsWith('data:') || url.includes('wsrv.nl')) {
    return url;
  }

  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=${quality}`;
};
