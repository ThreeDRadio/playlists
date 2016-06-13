import Ember from 'ember';

export function prettyDate(params/*, hash*/) {
    return moment(params[0]).format('LL');
}

export default Ember.Helper.helper(prettyDate);
