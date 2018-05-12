import reducer from '../reducers/counter';
import * as types from '../types/counter';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(0);
    });

    it('shoult increment the state', () => {
        expect(reducer(undefined, { type: types.INCREMENT })).toEqual(1);
        expect(reducer(1, { type: types.INCREMENT })).toEqual(2);
        expect(reducer(5, { type: types.INCREMENT })).toEqual(6);
    });

    it("shoult decrement the state", () => {
      expect(reducer(undefined, { type: types.DECREMENT })).toEqual(-1);
      expect(reducer(1, { type: types.DECREMENT })).toEqual(0);
      expect(reducer(5, { type: types.DECREMENT })).toEqual(4);
    });
})