import { http, HttpResponse, delay } from "msw";
import surface1 from "./data/SE_State_Management_Polygons_1.json";
import surface2 from "./data/SE_State_Management_Polygons_2.json";

export const handlers = [
  http.get("/api/test", () => {
    return HttpResponse.json({ id: "mock-test" });
  }),

  http.get("/api/work-surfaces", async () => {
    await delay(1300);
    return HttpResponse.json([surface1, surface2]);
  }),
];
