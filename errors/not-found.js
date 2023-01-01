import { CustomAPIError } from "./custom-api-error.js";
import { StatusCodes } from "http-status-codes";

export class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
