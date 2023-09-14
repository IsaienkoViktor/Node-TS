import { Middleware } from "routing-controllers";
import { HTTPResponseLogger } from "./HTTPResponseLogger";
import { HttpRequestLogger } from "./HTTPRequestLogger";

type Middleware = typeof HTTPResponseLogger | typeof HttpRequestLogger;

const middlewares = <Middleware[]>[HttpRequestLogger, HTTPResponseLogger];

export { middlewares };
