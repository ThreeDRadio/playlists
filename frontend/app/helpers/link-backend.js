import Ember from 'ember';
import ENV from '../config/environment';

export function linkBackend(params/*, hash*/) {
  return ENV.backendBaseURL;
}

export default Ember.Helper.helper(linkBackend);
