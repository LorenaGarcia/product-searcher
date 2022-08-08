function getImageUrl(pictures) {
  const picture = pictures.find((variant) => variant.url);
  return picture.url;
}

export { getImageUrl };
