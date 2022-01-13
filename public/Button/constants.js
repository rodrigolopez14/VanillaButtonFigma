


// attributeNames
export const MODE_ATTRIBUTE = "mode";
export const SIZE_ATTRIBUTE = "size";
export const THEME_ATTRIBUTE = "theme";
export const TYPE_ATTRIBUTE = "type";
export const ACTIVE_ATTRIBUTE = "active";
export const ICON_ATTRIBUTE = "icon";
export const CHILDREN_ATTRIBUTE = "children";
export const SHOWARROW_ATTRIBUTE = "showArrow";
export const ONCLICK_ATTRIBUTE = "onClick";
// mode options
export const BUTTON_OPTION = "button";
export const LINK_OPTION = "link";
//type options
export const PRIMARY_OPTION = "primary";
export const SECONDARY_OPTION = "secondary";
// theme options
export const DARK_OPTION = "dark";
export const LIGHT_OPTION = "light";
export const PURCHASE_OPTION = "purchase";
//active options
export const ACTIVE_OPTION = "active";
export const INACTIVE_OPTION = "inactive"
// showarrow options 
export const SHOWARROW_OPTION = "show";
//size options 
export const BIG_OPTION = "big";
export const SMALL_OPTION = "small";
// icon default option
export const NO_ICON_OPTION = "nothing";
// children default value
export const CHILDREN_DEFAULT_OPTION = "This is a button";




const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: MODE_ATTRIBUTE,
    defaultValue: BUTTON_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : BIG_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: THEME_ATTRIBUTE,
    defaultValue : DARK_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: TYPE_ATTRIBUTE,
    defaultValue : PRIMARY_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ACTIVE_ATTRIBUTE,
    defaultValue : ACTIVE_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ICON_ATTRIBUTE,
    defaultValue : NO_ICON_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: CHILDREN_ATTRIBUTE,
    defaultValue : CHILDREN_DEFAULT_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: SHOWARROW_ATTRIBUTE,
    defaultValue: SHOWARROW_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: ONCLICK_ATTRIBUTE,
    defaultValue: ()=>{},
    proccessValue: (value) => {return  Function("return " + value)()}

})

export {ATTRIBUTES};