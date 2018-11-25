export const appendFeature=(feature:string)=>{
    if(feature!==''){
        return`${feature}_`;
    }
    return feature;
}

export enum AjaxStates {
    INIT="_INIT",
    SUCCESS="_SUCCESS",
    FAILURE="_FAILURE"
}
