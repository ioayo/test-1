import * as actions from './counter';
import * as types from '../types/counter';

describe('counter actions', () => {
    it('should create correct action on INCREMENT', () => {
        const expected = {
            type: types.INCREMENT
        }

        expect(actions.increment()).toEqual(expected);
    });

    it('should create correct actions on DECREMENT', () => {
        const expected = {
            type: types.DECREMENT
        }

    expect(actions.decrement()).toEqual(expected);
    })
})