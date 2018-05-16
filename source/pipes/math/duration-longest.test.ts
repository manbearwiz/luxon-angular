import { Duration } from "luxon";

import { DurationLongestPipe } from "./duration-longest";

describe("DurationLongestPipe", () => {

  let pipe: DurationLongestPipe;

  beforeEach(() => {
    pipe = new DurationLongestPipe();
  });

  describe("#transform", () => {

    it("transforms an empty list of Durations into undefined", () => {
      expect(pipe.transform([])).toBeUndefined();
    });

    it("transforms a non-empty list of Durations into the maximum of that list", () => {
      const result = pipe.transform([
        Duration.fromMillis(50),
        Duration.fromMillis(100),
        Duration.fromMillis(-30),
        Duration.fromMillis(0)
      ]);

      expect(result.milliseconds).toBe(100);
    });

  });

});
