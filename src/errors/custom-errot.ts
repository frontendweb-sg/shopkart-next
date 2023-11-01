export abstract class CustomError extends Error {
  abstract status: number;
  constructor(public msg?: string) {
    super(msg);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract renderError(): IError;
}
