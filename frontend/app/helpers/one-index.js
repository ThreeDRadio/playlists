import Ember from 'ember';

export function oneIndex(params/*, hash*/) {
  if (params.length > 0) {
    if (Number.isInteger(params[0])) {
      return params[0]+1;
    }
    return params[0];
  }
  return "";
}

export default Ember.Helper.helper(oneIndex);
