export const NAME_OF_COMPONENT = 'seat-button-pill-group'
// components variants of text Inputs
export const REGULAR_BUTTON_PILL_VARIANT = 'regular button pill'

// attributeNames
export const SIZE_ATTRIBUTE = "data-size";
export const COLOR_ATTRIBUTE = "data-color";
export const STATE_ATTRIBUTE = "data-state";
export const POSITION_ATTRIBUTE = "data-position";
export const TITLE_ATTRIBUTE = "data-title";

export const TEMPORARY_ATTRIBUTE = 'data-temporary'
//size options 
export const LARGE_OPTION = "L";
export const MEDIUM_OPTION = "M";
// color options
export const BLACK_OPTION = "black";
export const WHITE_OPTION = "white";
//state options
export const NORMAL_OPTION = "normal";
export const ACTIVE_OPTION = "active";
export const HOVER_OPTION = "hover";

//positions options
export const LEFT_OPTION = "left";
export const CENTER_OPTION = "center";
export const RIGHT_OPTION = "right";

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
    attributeName: STATE_ATTRIBUTE,
    defaultValue : NORMAL_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: POSITION_ATTRIBUTE,
    defaultValue : CENTER_OPTION,
    proccessValue: (value) => {return   value}

})
ATTRIBUTES.push({
    attributeName: TITLE_ATTRIBUTE,
    defaultValue : "Option",
    proccessValue: (value) => {return   value}

})
export {ATTRIBUTES};

//Definining names of subcomponents of component. This is used to identify the style to assign that subcomponent

export const CONTAINER_BUTTON_PILL = 'container button'

//  Defining constants for events 
export const DEFAULT_EVENT = 'default'
export const HOVER_EVENT = 'hoverEvent'
export const ACTIVE_EVENT = 'activeEvent'

//array of events
const EVENTS_OF_COMPONENT = []

EVENTS_OF_COMPONENT.push(HOVER_EVENT)
EVENTS_OF_COMPONENT.push(ACTIVE_EVENT)

export {EVENTS_OF_COMPONENT}




