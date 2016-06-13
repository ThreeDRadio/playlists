import DRFSerializer from './drf';

export default DRFSerializer.extend({
    keyForAttribute(key) {
        return key;
    }
});
