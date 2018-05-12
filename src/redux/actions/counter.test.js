import * as actions from '../actions/counter';
import * as types from '../types/counter';

describe('counter actions', () => {
    it('increment action', () => {
        const expected = {
            type: types.INCREMENT
        }

        expect(actions.increment()).toEqual(expected)
    });

    it('decrement action', () => {
        const expected = {
            type: types.DECREMENT
        }

        expect(actions.decrement()).toEqual(expected)
    });
});


