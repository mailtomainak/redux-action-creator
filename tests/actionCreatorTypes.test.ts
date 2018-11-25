import {createTypes} from '../core/actionCreatorTypes';

test('to verify that a type object is returned when a type array is passed',()=>{
    expect(createTypes(['OPEN_DRAWER','CLOSE_DRAWER'])).toBeInstanceOf(Object)
})


test('to verify that the result from createTypes has correct objects',()=>{
    expect(createTypes(['OPEN_DRAWER','CLOSE_DRAWER'])).toEqual({OPEN_DRAWER:'OPEN_DRAWER',CLOSE_DRAWER:'CLOSE_DRAWER'})
})

test('to verify that the feature name is appended correctly to the created types ',()=>{
    expect(createTypes(['OPEN_DRAWER','CLOSE_DRAWER'],'BOX')).toEqual({BOX_OPEN_DRAWER:'BOX_OPEN_DRAWER',BOX_CLOSE_DRAWER:'BOX_CLOSE_DRAWER'})
})

