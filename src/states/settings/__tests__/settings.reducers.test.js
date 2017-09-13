import * as actions from "../actions";
import reducer from "../reducers";

describe("Settings reducer", () => {
  const initialState = {
    hasSound: true,
    soundVolume: 10,
    hasVibration: true
  };

  it("should return initial state", () => {
    const settingsReducer = reducer(undefined, {});

    expect(settingsReducer).toEqual(initialState);
  });

  it("should handle UPDATE_SOUND action", () => {
    const hasSound = false;
    const settingsReducer = reducer(undefined, actions.UPDATE_SOUND(hasSound));
    const expectedState = {
      ...initialState,
      hasSound
    };
    expect(settingsReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_SOUND_VOLUME action", () => {
    const soundVolume = 4;
    const settingsReducer = reducer(
      undefined,
      actions.UPDATE_SOUND_VOLUME(soundVolume)
    );
    const expectedState = {
      ...initialState,
      soundVolume
    };
    expect(settingsReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_VIBRATION action", () => {
    const hasVibration = false;
    const settingsReducer = reducer(
      undefined,
      actions.UPDATE_VIBRATION(hasVibration)
    );
    const expectedState = {
      ...initialState,
      hasVibration
    };
    expect(settingsReducer).toEqual(expectedState);
  });
});
