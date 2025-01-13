import type Elysia from "elysia";
import { ReviewsController } from "../controllers/reviews.controller";

const reviewsController = new ReviewsController();

export const reviewsRoutes = (app: Elysia) => {
	app.get("/reviews/:roomId", async ({ params }) => {
		const { roomId } = params;
		const reviews = await reviewsController.getReviews(roomId);
		return reviews;
	});
};
