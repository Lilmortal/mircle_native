import * as actions from "../actions";
import * as actionTypes from "../actionTypes";

describe("Camera actions", () => {
  it("should create a UPDATE_CAMERA_ACTIVE action", () => {
    const active = true;
    const expectedAction = {
      type: actionTypes.UPDATE_CAMERA_ACTIVE,
      active
    };

    expect(actions.UPDATE_CAMERA_ACTIVE(active)).toEqual(expectedAction);
  });
});
