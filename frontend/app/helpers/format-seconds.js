import Ember from 'ember';

export function formatSeconds(params/*, hash*/) {
  let minutes = Math.floor(params[0] / 60);
  let seconds = params[0] % 60;

  if (seconds > 9) {
    return minutes.toString() + ":" + seconds.toString();
  }
    return minutes.toString() + ":0" + seconds.toString();
}

export default Ember.Helper.helper(formatSeconds);
