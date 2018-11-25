import {AjaxStates,appendFeature} from './utils';

export const createTypes = (typeArray:Array<string>,feature='')=>{
    feature = appendFeature(feature);
    let _types = Object();
    typeArray.forEach((type)=>{
        _types[`${feature}${type}`]=`${feature}${type}`;
    })
    return _types;
}

export const createAsyncTypes = (type:string,feature='')=>{
    feature = appendFeature(feature);
    let _types=Object();
    _types[`${feature}${type}${AjaxStates.INIT}`]=`${feature}${type}${AjaxStates.INIT}`;
    _types[`${feature}${type}${AjaxStates.FAILURE}`]=`${feature}${type}${AjaxStates.FAILURE}`;
    _types[`${feature}${type}${AjaxStates.SUCCESS}`]=`${feature}${type}${AjaxStates.SUCCESS}`;
    
}