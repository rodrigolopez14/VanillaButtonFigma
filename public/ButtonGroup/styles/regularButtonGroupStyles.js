import {PATH_STYLE,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
        COLOR_ATTRIBUTE} from "../constants.js"
import {LARGE_OPTION,
        MEDIUM_OPTION,
        BLACK_OPTION,
        WHITE_OPTION} from "../constants.js"
import {REGULAR_BUTTON_GROUP_VARIANT} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        CONTAINER_SUB_WRAPPER,
        BUTTON_CONTAINER_SUBCOMPONENT} from "../constants.js"


const regularButtonGroupStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none",
}

Style1[CONTAINER_SUB_WRAPPER] = {
        width: "fit-content",

}

Style1[BUTTON_CONTAINER_SUBCOMPONENT] = {
    
        display: "flex",
        width: "288px",
        //flexDirection: "column"
}



const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_GROUP_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularButtonGroupStyles.push(style1Wrapper)


export  {regularButtonGroupStyles};