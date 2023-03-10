import jwt from "jsonwebtoken";
import { Unauthenticated } from "../errors/unauthenticated-error.js";
import { asyncWrapper } from "../middleware/asyncWrapper.js";

export const auth = asyncWrapper(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new Unauthenticated("Authentication invalid"));
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    return next(new Unauthenticated("Authentication invalid"));
  }
});
