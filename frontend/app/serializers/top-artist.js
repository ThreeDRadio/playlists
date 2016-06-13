import DRFSerializer from './drf';

export default DRFSerializer.extend({
    normalizeResponse: function(store, type, payload, id, requestType) {
        payload.forEach(function(el, index) {
            el['id'] = index;
        });
        return this._super(store, type, payload, id, requestType);
    }
});
