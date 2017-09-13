import * as selectors from "../selectors";
import { NAME } from "../constants";

describe("Settings selectors", () => {
  let cameraState;
  const hasSound = false;
  const soundVolume = 4;
  const hasVibration = false;

  beforeEach(() => {
    cameraState = {
      [NAME]: {
        hasSound,
        soundVolume,
        hasVibration
      }
    };
  });

  it("returns whether it allows sound", () => {
    expect(selectors.getSound(cameraState)).toEqual(hasSound);
  });

  it("returns sound volume", () => {
    expect(selectors.getSoundVolume(cameraState)).toEqual(soundVolume);
  });

  it("returns whether it allows vibration", () => {
    expect(selectors.getVibration(cameraState)).toEqual(hasVibration);
  });
});
