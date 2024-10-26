import ky from "ky";

export const httpClient = ky.create({
  retry: 3,
  timeout: 10000,
  prefixUrl: "/api",
});
