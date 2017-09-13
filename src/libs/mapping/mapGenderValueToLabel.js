const mapGenderValueToLabel = gender => {
  switch (gender) {
    case "M":
      return "Male";
    case "F":
      return "Female";
    case "U":
      return "Unapplicable";
    default:
      return "Unknown";
  }
};

export default mapGenderValueToLabel;
