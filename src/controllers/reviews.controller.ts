import { AirbnbService } from "./../services/airbnb.service";
export class ReviewsController {
	private AirbnbService: AirbnbService;

	constructor() {
		this.AirbnbService = new AirbnbService();
	}

	async getReviews(roomId: string) {
		try {
			const reviews = await this.AirbnbService.getReviews(roomId);
			return reviews;
		} catch (error) {
			console.error(error);
			return { error: "Failed to fetch reviews" };
		}
	}
}
