import { sendGetRequest } from "@/pages/api/http_requests";

describe("sendGetRequest", () => {
    it("should return response data on success", async () => {
        const result = await sendGetRequest();
        console.log(result);
    });
});