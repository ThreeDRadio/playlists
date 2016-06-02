import Ember from 'ember';

export function oneIndex(params/*, hash*/) {
  return params[0]+1;
}

export default Ember.Helper.helper(oneIndex);
