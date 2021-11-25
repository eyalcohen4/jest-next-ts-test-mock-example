import * as rally from "../utils/rally";

beforeAll(async () => {
  jest.spyOn(rally, "rallyApi").mockResolvedValue({ test: true });
});

afterAll((done) => {
  done();
});
