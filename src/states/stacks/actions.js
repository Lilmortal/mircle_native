import * as actionTypes from "./actionTypes";

export const UPDATE_STACKS = stacks => ({
  type: actionTypes.UPDATE_STACKS,
  stacks
});

export const POP_STACK = () => ({
  type: actionTypes.POP_STACK
});

export const CLEAR_STACKS = () => ({
  type: actionTypes.CLEAR_STACKS
});
