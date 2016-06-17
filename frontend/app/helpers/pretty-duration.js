import Ember from 'ember';

export function prettyDuration(params/*, hash*/) {

  // if it contains 2 leading hour zeros
  if (/^00:[1-9]{2}:\d{2}$/.test(params[0])) {
    return params[0].substr(3);
  }
  // contains one digit of hours
  else if (/^0[1-9]:\d{2}:\d{2}$/.test(params[0])) {
    return params[0].substr(1);
  }
  // contains 0 or more minutes
  else if (/^00:0\d:\d{2}$/.test(params[0])) {
    return params[0].substr(4);
  }
  else {
    return params[0];
  }
}

export default Ember.Helper.helper(prettyDuration);
