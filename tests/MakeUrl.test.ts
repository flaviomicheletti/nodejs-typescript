import { makeUrl } from '../src/helpers/Url';

describe('foo', function () {
    it('bar', function () {
        expect(typeof makeUrl()).toBe('string');        
    });
});