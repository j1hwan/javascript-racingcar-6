import { ERROR } from './Constants.js';

export function validateDuplicateName(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERROR.nameDuplicated);
  }
}

export function validateNumberOfNames(names) {
  if (names.length < 2) {
    throw new Error(ERROR.invalidNumberOfNames);
  }
}