export const selectFontColor = color => {
  switch (color) {
    case "white": {
      return { color: "white" };
    }
    case "black": {
      return { color: "black" };
    }
    case "red": {
      return { color: "red" };
    }
    default:
      return { color: "black" };
  }
  return { color: "black" };
};

export const selectFontWeight = bold => {
  return bold ? { fontWeight: "500" } : {};
};
