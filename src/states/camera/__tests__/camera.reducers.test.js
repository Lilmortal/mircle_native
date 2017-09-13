import * as actions from "../actions";
import reducer from "../reducers";

describe("Camera reducer", () => {
  it("should return initial state", () => {
    const cameraReducer = reducer(undefined, {});
    const expectedState = {
      active: false
    };
    expect(cameraReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_CAMERA_ACTIVE action", () => {
    const active = true;
    const cameraReducer = reducer(
      undefined,
      actions.UPDATE_CAMERA_ACTIVE(active)
    );
    const expectedState = {
      active
    };
    expect(cameraReducer).toEqual(expectedState);
  });
});
