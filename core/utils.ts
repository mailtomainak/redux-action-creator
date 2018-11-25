export const appendFeature=(feature:string)=>{
    if(feature!==''){
        return`${feature}_`;
    }
    return feature;
}

export enum AjaxStates {
    INIT="INIT",
    SUCCESS="SUCCESS",
    FAILURE="FAILURE"
}
