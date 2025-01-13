import { Elysia } from "elysia";

export const createServer = () => {
	const app = new Elysia();
	return app;
};
