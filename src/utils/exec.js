export const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};
