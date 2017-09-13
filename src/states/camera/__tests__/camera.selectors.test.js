import * as selectors from "../selectors";
import { NAME } from "../constants";

describe("Camera selectors", () => {
  let cameraState;
  const active = true;

  beforeEach(() => {
    cameraState = {
      [NAME]: {
        active
      }
    };
  });

  it("returns camera active state", () => {
    expect(selectors.getCameraActive(cameraState)).toEqual(active);
  });
});
