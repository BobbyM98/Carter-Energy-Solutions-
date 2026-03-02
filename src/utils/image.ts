export const optimizeImage = (url: string, width: number = 800, quality: number = 80): string => {
  if (!url) return '';
  // If already optimized or a data URL, return as is
  if (url.includes('wsrv.nl') || url.startsWith('data:')) return url;
  
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=${quality}`;
};
