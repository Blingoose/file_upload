import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { BadRequest } from "../errors/bad-request.js";
import { NotFound } from "../errors/not-found-error.js";
import { Product } from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

const createProduct = asyncWrapper(async (req, res, next) => {
  res.send("Create product");
});

const getAllProducts = asyncWrapper(async (req, res, next) => {
  res.send("list of products");
});

export { createProduct, getAllProducts };
