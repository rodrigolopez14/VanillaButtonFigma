import {MAX_WIDTH_MEDIUM_OPTION} from '../commonMethodsAndConstants/Styles/commonConstants.js'
export const NAME_OF_COMPONENT = 'seat-checkbox'
//Variants keys
export const REGULAR_CHECKBOX_VARIANT = 'regular checkbox'

//Attributes names
export const COLOR_ATTRIBUTE = "data-color"
export const SIZE_ATTRIBUTE = "data-size"
export const STATE_ATTRIBUTE = "data-state"
export const ENABLE_ATTRIBUTE = "data-enable"
export const LABEL_ATTRIBUTE = "data-label"
export const ERROR_MESSAGE_ATTRIBUTE = "data-error-message";
//SVG attributes
export const SVG_ATTRIBUTES = "svg attributes"
export const SVG_STYLES = "svg styles"
export const SVG_TYPE = "svg type"

export const TEMPORARY_ATTRIBUTE = "data-temporary"
//COLOR OPTIONS
export const BLACK_OPTION = 'black'
export const WHITE_OPTION = 'white'
//SIZE OPTIONS
export const LARGE_OPTION = 'L'
export const MEDIUM_OPTION = 'M'
//STATE OPTIONS
export const NORMAL_OPTION = 'normal'
export const SELECTED_OPTION = 'selected'
export const INDETERMINATED_OPTION = 'indeterminated'
export const ERROR_OPTION = 'error'
//ENABLE OPTIONS
export const ON_OPTION = 'on'
export const OFF_OPTION = 'off'
const ATTRIBUTES = [];
ATTRIBUTES.push({
    attributeName: COLOR_ATTRIBUTE,
    defaultValue: BLACK_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: SIZE_ATTRIBUTE,
    defaultValue : (() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < MAX_WIDTH_MEDIUM_OPTION)
        {
           return MEDIUM_OPTION;
        }
        else if (vw >= MAX_WIDTH_MEDIUM_OPTION)
        {
           return LARGE_OPTION;
        }
    }) (),
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: STATE_ATTRIBUTE,
    defaultValue: NORMAL_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: ENABLE_ATTRIBUTE,
    defaultValue: ON_OPTION,
    proccessValue: (value) => {return   value}
})
ATTRIBUTES.push({
    attributeName: ERROR_MESSAGE_ATTRIBUTE,
    defaultValue: "",
    proccessValue: (value) => {return   value}
})
export {ATTRIBUTES}
// CONTAINER_SLOT_WRAPPER
// I----------->INPUT_SLOT
// I----------->LABEL_SLOT

// WRAPPER_SUBCOMPONENT
// I----------->CHECKBOX_SUBCOMPONENT
// I                I----------->CHECK_SUBCOMPONENT
// I                I                   I----------->BACKGROUND_SVG_SUBCOMPONENT
// I                I                   I----------->SUCCESS_SVG_SUBCOMPONENT
// I                I----------->LABEL_SUBCOMPONENT
// I----------->ERROR_SUBCOMPONENT
// subcomponents of component
export const CONTAINER_SLOT_WRAPPER = 'slot wrapper'
export const LABEL_SLOT = 'labelSlot'
export const INPUT_SLOT = 'inputSlot'
export const WRAPPER_SUBCOMPONENT = 'wrapper'
export const CHECKBOX_SUBCOMPONENT = 'checkbox subcomponent'
export const CHECK_SUBCOMPONENT = 'check subcomponent'
export const BACKGROUND_SVG_SUBCOMPONENT = 'background subcomponent'
export const SUCCESS_SVG_SUBCOMPONENT = 'success subcomponent'
export const LABEL_SUBCOMPONENT = 'label subcomponent'
export const ERROR_SUBCOMPONENT = 'error subcomponent'

export const DEFAULT_EVENT = 'default'
export const SELECTED_EVENT = 'selection'
export const ERROR_EVENT = 'error'
export const INDETERMINATED_EVENT = 'indeterminated'

const EVENTS_OF_COMPONENT = []
EVENTS_OF_COMPONENT.push(SELECTED_EVENT)
EVENTS_OF_COMPONENT.push(ERROR_EVENT)
EVENTS_OF_COMPONENT.push(INDETERMINATED_EVENT)


export {EVENTS_OF_COMPONENT}