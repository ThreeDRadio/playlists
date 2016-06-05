import Ember from 'ember';

export function prettyDuration(params/*, hash*/) {
    if (params[0].substr(0,3) !== "00:") {
        return params[0];
    }
    else if (params[0].substr(0,4) === "00:0") {
        return params[0].substr(4);
    }
    else {
        return params[0].substr(3);
    }
}

export default Ember.Helper.helper(prettyDuration);
