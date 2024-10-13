import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(
      [
        {
          id: "3F7A2B",
          name: "Alice Smith",
          description: "Alice is a software engineer",
          avatarUrl: "https://avatar.iran.liara.run/public/73",
        },
        {
          id: "3F7A2C",
          name: "Ryo Tanaka",
          description: "Ryo is a web designer",
          avatarUrl: "https://avatar.iran.liara.run/public/6",
        },
        {
          id: "3F7A2D",
          name: "John Williams",
          description: "John is a product manager",
          avatarUrl: "https://avatar.iran.liara.run/public/45",
        },
        {
          id: "3F7A2E",
          name: "Emily Johnson",
          description: "Emily is a software engineer",
          avatarUrl: "https://avatar.iran.liara.run/public/67",
        },
        {
          id: "3F7A2F",
          name: "Michael Brown",
          description: "Michael is a web designer",
          avatarUrl: "https://avatar.iran.liara.run/public/2",
        },
      ],
      {
        status: 200,
      }
    );
  }),
  http.get("/api/scores/:userId", async ({ params }) => {
    const { userId } = params;
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 5 * 1000)
    );
    switch (userId) {
      case "3F7A2B":
        return HttpResponse.json([
          40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11,
        ]);
      case "3F7A2C":
        return HttpResponse.json([
          30, 20, 10, 30, 20, 10, 30, 20, 10, 30, 20, 10,
        ]);
      case "3F7A2D":
        return HttpResponse.json([20, 10, 5, 20, 10, 5, 20, 10, 5, 20, 10, 5]);
      case "3F7A2E":
        return HttpResponse.json([10, 5, 2, 10, 5, 2, 10, 5, 2, 10, 5, 2]);
      case "3F7A2F":
        return HttpResponse.json([5, 2, 1, 5, 2, 1, 5, 2, 1, 5, 2, 1]);
      default:
        return HttpResponse.json([]);
    }
  }),
];
