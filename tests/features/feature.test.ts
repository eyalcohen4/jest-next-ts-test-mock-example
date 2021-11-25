import { add } from "../../features/add";

describe("add", () => {
  it("should add two numbers", async () => {
    const result = await add(1, 2);
    expect(result).toBe(3);
  });
});
