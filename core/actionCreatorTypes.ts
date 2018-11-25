export const createTypes = (typeArray:Array<string>)=>{
    let _types = Object();
    typeArray.forEach((type)=>{
        _types[type]=type
    })
    return _types;
}