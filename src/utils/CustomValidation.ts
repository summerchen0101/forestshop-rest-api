export class CustomError extends Error {
  name = 'CustomError';
  constructor(public code: number, message?: string) {
    super(message);
  }
}
