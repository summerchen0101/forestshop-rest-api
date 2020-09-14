export abstract class ValidateError extends Error {
  name = 'ValidateError';
  abstract code: number;
  constructor(public message = 'Validation Error') {
    super(message);
  }
}

export class DupicateError extends ValidateError {
  name = 'DupicateError';
  code = 50002;
  constructor(public message = 'There was a duplicate key error') {
    super(message);
  }
}
export class RequiredError extends ValidateError {
  name = 'RequiredError';
  code = 50003;
  constructor(public message = 'The field is required!') {
    super(message);
  }
}
