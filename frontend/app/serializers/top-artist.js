import DRFSerializer from './drf';

export default DRFSerializer.extend({
    normalizeResponse: function(store, type, payload, id, requestType) {
        var result = [], obj;
        payload.forEach(function(el, index) {
            el['id'] = index;
            result.push(el);
        });
        return this._super(store, type, payload, id, requestType);
    }
});
