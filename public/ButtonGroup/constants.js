export const NAME_OF_COMPONENT = 'seat-button-group'
// components variants of text Inputs
export const REGULAR_BUTTON_GROUP_VARIANT = 'regular button group'
// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const WIDTH_ATTRIBUTE = "data-group-width";
export const NUMBER_OF_BUTTONS = "data-number-buttons"
export const TEMPORARY_ATTRIBUTE = 'data-temporary'
//size options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";


const ATTRIBUTES = [];



ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue : null,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: WIDTH_ATTRIBUTE,
    defaultValue : "",
    proccessValue: (value) => {return   value}

})

export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent
// CONTAINER_SLOT_WRAPPER
// I----------->BUTTON_SLOT[]
// CONTAINER_SUB_WRAPPER
// I----------->ixBUTTON_CONTAINER_SUBCOMPONENT


export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const BUTTON_SLOT = []
BUTTON_SLOT.push('BUTTON_1')
BUTTON_SLOT.push('BUTTON_2')
BUTTON_SLOT.push('BUTTON_3')
BUTTON_SLOT.push('BUTTON_4')
BUTTON_SLOT.push('BUTTON_5')
export const CONTAINER_SUB_WRAPPER = 'container sub wrapper'
export const BUTTON_CONTAINER_SUBCOMPONENT = 'button container subcomponent'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const HOVER_BUTTON_EVENT = 'hoverButton'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(HOVER_BUTTON_EVENT)

export {EVENTS_OF_COMPONENT}

