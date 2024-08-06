import request from "supertest";

async function GET(
  baseURL: string,
  endpoint: string,
  authToken: string,
  queryParam: string
) {
  if (!baseURL || !endpoint) {
    throw Error(
      `One of the given values baseURL: ${baseURL}, endpoint: ${endpoint} is not valid`
    );
  }
  try {
    return await request(baseURL)
      .get(endpoint)
      .query(queryParam)
      .auth(authToken, { type: "bearer" })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  } catch (err) {
    err.message = `Error making a GET call to ${endpoint}, ${err}`;
    throw err;
  }
}
(async () => {
  try {
    const response = await GET(
      "https://reqres.in",
      "/api/users?page=2",
      "",
      ""
    );
    console.log(response.body);
  } catch (err) {
    console.error(err);
  }
})();


async function POST(
  baseURL: string,
  endpoint: string,
  authToken: string,
  payload: object
) {
  if (!baseURL || !endpoint) {
    throw Error(
      `One of the given values baseURL: ${baseURL}, endpoint: ${endpoint} is not valid`
    );
  }
  try {
    return await request(baseURL)
      .post(endpoint)
      .auth(authToken, { type: "bearer" })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payload);
  } catch (err) {
    err.message = `Error making a POST call to ${endpoint}, ${err}`;
    throw err;
  }
}
(async () => {
  try {
    const payload = { email: "eve.holt@reqres.in", password: "pistol" };
    const response = await POST(
      "https://reqres.in",
      "/api/register",
      "",
      payload
    );
    console.log(response.body);
  } catch (err) {
    console.error(err);
  }
})();
export default { GET, POST };
