import Const from '../constants';

export function startAsync(name, id) {
  return {
    type: Const.ASYNC_START, name, id,
  }
}

export function completeAsync(name, id) {
  return {
    type: Const.ASYNC_COMPLETE, name, id,
  }
}

export function failAsync(name, id, errors) {
  return {
    type: Const.ASYNC_FAIL, name, id, errors,
  }
}
