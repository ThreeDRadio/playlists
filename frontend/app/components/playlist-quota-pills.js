import Ember from 'ember';

export default Ember.Component.extend({
    femaleCount: Ember.computed('model.tracks.@each.female', function() {
        return this.get('model').get('tracks').filterBy('female', true).get('length');
    }),
    australianCount: Ember.computed('model.tracks.@each.australian', function() {
        return this.get('model').get('tracks').filterBy('australian', true).get('length');
    }),
    localCount: Ember.computed('model.tracks.@each.local', function() {
        return this.get('model').get('tracks').filterBy('local', true).get('length');
    }),

    femaleExpected: Ember.computed('model.tracks.@each.female', function() {
        let total = parseInt(this.get('model').get('tracks').get('length'));
        return Math.round(total*0.25);
    }),
    australianExpected: Ember.computed('model.tracks.@each.australian', function() {
        let total = parseInt(this.get('model').get('tracks').get('length'));
        return Math.round(total*0.4);
    }),
    localExpected: Ember.computed('model.tracks.@each.local', function() {
        let total = parseInt(this.get('model').get('tracks').get('length'));
        return Math.round(total*0.2);
    }),

    localQuotaClasses: Ember.computed('model.tracks.@each.local', function() {
        const normal = "label label-default";
        const good = "label label-success";
        const warning = "label label-warning";
        const bad = "label label-danger";

        if (this.get('model').get('tracks').get('length') <= 0) {
            return normal;
        }
        let ratio = this.get('localCount') / this.get('localExpected');

        if (ratio >=1) {
            return good;
        }
        else if (ratio >= 0.7) {
            return warning;
        }
        else {
            return bad;
        }
    }),
    australianQuotaClasses: Ember.computed('model.tracks.@each.australian', function() {
        const normal = "label label-default";
        const good = "label label-success";
        const warning = "label label-warning";
        const bad = "label label-danger";

        if (this.get('model').get('tracks').get('length') <= 0) {
            return normal;
        }
        let ratio = this.get('australianCount') / this.get('australianExpected');

        if (ratio >=1) {
            return good;
        }
        else if (ratio >= 0.7) {
            return warning;
        }
        else {
            return bad;
        }
    }),
    femaleQuotaClasses: Ember.computed('model.tracks.@each.female', function() {
        const normal = "label label-default";
        const good = "label label-success";
        const warning = "label label-warning";
        const bad = "label label-danger";

        if (this.get('model').get('tracks').get('length') <= 0) {
            return normal;
        }
        let ratio = this.get('femaleCount') / this.get('femaleExpected');

        if (ratio >=1) {
            return good;
        }
        else if (ratio >= 0.7) {
            return warning;
        }
        else {
            return bad;
        }
    }),
});
