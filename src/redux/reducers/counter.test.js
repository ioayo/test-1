import reducer from '../reducers/counter';
import * as types from '../types/counter';

describe('counter reducer', () => {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(0);
    });

    it('should be ok on INCREMENT action', () => {
        expect(reducer(undefined, { type: types.INCREMENT })).toEqual(1);
        expect(reducer(1, { type: types.INCREMENT })).toEqual(2);
        expect(reducer(-828, { type: types.INCREMENT })).toEqual(-827);
    })

    it('should be ok on DECREMENT action', () => {
        expect(reducer(undefined, { type: types.DECREMENT })).toEqual(-1);
        expect(reducer(1, { type: types.DECREMENT })).toEqual(0);
        expect(reducer(-828, { type: types.DECREMENT })).toEqual(-829);
    })
})