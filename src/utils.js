const images = import.meta.glob('/assets/**/*.{png,jpg,jpeg,svg,webp,PNG,gif,mp4}', { eager: true });

export const getImageUrl = (path) => {
  return images[`/assets/${path}`]?.default;
};
