import * as actions from "../actions";
import * as actionTypes from "../actionTypes";

describe("Settings actions", () => {
  it("should create a UPDATE_SOUND action", () => {
    const hasSound = true;
    const expectedAction = {
      type: actionTypes.UPDATE_SOUND,
      hasSound
    };

    expect(actions.UPDATE_SOUND(hasSound)).toEqual(expectedAction);
  });

  it("should create a UPDATE_SOUND_VOLUME action", () => {
    const soundVolume = 10;
    const expectedAction = {
      type: actionTypes.UPDATE_SOUND_VOLUME,
      soundVolume
    };

    expect(actions.UPDATE_SOUND_VOLUME(soundVolume)).toEqual(expectedAction);
  });

  it("should create a UPDATE_VIBRATION action", () => {
    const hasVibration = true;
    const expectedAction = {
      type: actionTypes.UPDATE_VIBRATION,
      hasVibration
    };

    expect(actions.UPDATE_VIBRATION(hasVibration)).toEqual(expectedAction);
  });
});
