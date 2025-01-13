import Elysia from "elysia";
import { getReviews } from "../services/airbnb.service";

export const reviewsRoutes = new Elysia().get(
	"/reviews/:roomId",
	async ({ params }) => {
		const { roomId } = params;

		const reviews = await getReviews(roomId);
		return reviews;
	},
);
