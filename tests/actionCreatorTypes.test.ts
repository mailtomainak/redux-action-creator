import {createTypes} from '../core/actionCreatorTypes';

test('to verify that a type object is returned when a type array is passed',()=>{
    expect(createTypes(['OPEN_DRAWER','CLOSE_DRAWER'])).toBeInstanceOf(Object)
})


test('to verify that the result from createTypes has correct objects',()=>{
    expect(createTypes(['OPEN_DRAWER','CLOSE_DRAWER'])).toEqual({OPEN_DRAWER:'OPEN_DRAWER',CLOSE_DRAWER:'CLOSE_DRAWER'})
})