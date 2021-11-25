import { rallyApi } from "../utils/rally";
export async function add(a, b) {
  const response = await rallyApi();
  console.log(response);

  return a + b;
}
