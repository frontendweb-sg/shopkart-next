import { CustomError } from "./custom-error";

export class AuthError extends CustomError {
  status: number = 401;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  renderError(): IError {
    return {
      message: this.message!,
      status: this.status,
      field: this.name,
    };
  }
}
