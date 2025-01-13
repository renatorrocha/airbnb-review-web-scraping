import { createServer } from "./config/server";
import { reviewsRoutes } from "./routes/review.routes";
import { swagger } from "@elysiajs/swagger";

const app = createServer();

reviewsRoutes(app);

app.use(swagger());

app.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
