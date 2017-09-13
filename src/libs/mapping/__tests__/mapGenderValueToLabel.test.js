import mapGenderValueToLabel from "../mapGenderValueToLabel";

describe("Map gender value to label", () => {
  it("should return male value given the label", () => {
    const value = mapGenderValueToLabel("M");
    expect(value).toEqual("Male");
  });

  it("should return female value given the label", () => {
    const value = mapGenderValueToLabel("F");
    expect(value).toEqual("Female");
  });

  it("should return unapplicable value given the label", () => {
    const value = mapGenderValueToLabel("U");
    expect(value).toEqual("Unapplicable");
  });

  it("should return unknown value given an unknown label", () => {
    const value = mapGenderValueToLabel("Unknown");
    expect(value).toEqual("Unknown");
  });
});
