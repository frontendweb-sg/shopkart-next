import { CustomError } from "./custom-errot";

export class BadRequestError extends CustomError {
  status: number = 400;

  constructor(public msg?: string) {
    super(msg);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  renderError(): IError {
    return {
      message: this.message,
      status: this.status,
      field: this.name,
      info: null,
    };
  }
}
