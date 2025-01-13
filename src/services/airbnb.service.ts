import { chromium } from "playwright";

export const getReviews = async (roomId: string) => {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	try {
		await page.goto(`https://www.airbnb.com.br/rooms/${roomId}/reviews`);
		await page.waitForSelector("div._1tqgvho");

		const reviews = await page.$$eval("div._1tqgvho span", (elements) => {
			const uniqueReviews = new Set(
				elements
					.map((el) => el.textContent?.trim())
					.filter((text) => !!text)
					.filter(
						(text) =>
							text !== "Avaliação, 5 estrelas" && text !== "," && text !== "·",
					),
			);
			return Array.from(uniqueReviews);
		});

		return reviews;
	} finally {
		await browser.close();
	}
};
