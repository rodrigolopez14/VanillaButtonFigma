export const NAME_OF_COMPONENT = 'seat-tags'
// components variants of text Inputs
export const REGULAR_TAGS_VARIANT = 'regular tag variant'
export const REGULAR_TAGS_ICON_RIGHT_VARIANT = 'regular tag icon right variant'
export const REGULAR_TAGS_ICON_LEFT_VARIANT = 'regular tag icon left variant'
export const REGULAR_TAGS_CLOSE_ICON_VARIANT = 'regular tag icon close variant'
export const REGULAR_TAGS_CLOSE_VARIANT = 'regular tag close variant'

// attributeNames
export const COLOR_ATTRIBUTE = "data-color";
export const COLOR_FONT_ATTRIBUTE = "data-color-font"
export const ICON_ATTRIBUTE = "data-icon";
export const ICON_SELECTION_ATTRIBUTE = "data-icon-selection";
export const POSTION_ICON_ATTRIBUTE = "data-position-icon";
export const CLOSE_ATTRIBUTE = "data-close";
export const TITLE_ATTRIBUTE = "data-title"

//CLOSE OPTIONS
export const YES_CLOSE_OPTION = 'yes'
export const NO_CLOSE_OPTION = 'no'
export const TEMPORARY_ATTRIBUTE = 'data-temporary'

// icon option
export const ON_ICON_OPTION = "on";
export const OFF_ICON_OPTION = "off";

// icon POSITION option
export const LEFT_ICON_POSITION_OPTION = "left";
export const RIGHT_ICON_POSITION_OPTION = "right";

//icon selection default value
export const ICON_DEFAULT = "nothing"
const ATTRIBUTES = [];

export const NORMAL_OPTION = 'normal'
export const COLOR_DEFAULT = "#190F14"

function probarEntrada(cadena)
{
    if (/[0-9A-Fa-f]{6}/g.test(cadena)) return true
    else return false
}

ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : COLOR_DEFAULT,
    proccessValue: (value) => {
        value = value.slice(1)
        if (value.length !== 6)
        {
            if (value.length>6)
            {
            value = value.slice(0,5)
            }
        else 
        {
            value = value.padEnd(6, '0')
        }
        }
        if (probarEntrada(value)) 
        {
            value = "#"+value.toUpperCase()
            return   value
        }
        else return COLOR_DEFAULT;
        
        }

})
ATTRIBUTES.push({
    attributeName: COLOR_FONT_ATTRIBUTE,
    defaultValue : "#ECE9E1",
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: ICON_SELECTION_ATTRIBUTE,
    defaultValue : ICON_DEFAULT,
    proccessValue: (value) => {return   value}

})

ATTRIBUTES.push({
    attributeName: CLOSE_ATTRIBUTE,
    defaultValue : NO_CLOSE_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: POSTION_ICON_ATTRIBUTE,
    defaultValue : RIGHT_ICON_POSITION_OPTION,
    proccessValue: (value) => {return   value}

})
export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'

export const CONTAINER_BUTTON_PILL = 'container button'
export const TEXT_CONTAINER = 'text container'
export const ICON_SUBCOMPONENT = 'icon subcomponent'
// Defining constants for events 
export const DEFAULT_EVENT = 'default'

//array of events
const EVENTS_OF_COMPONENT = []


export {EVENTS_OF_COMPONENT}




