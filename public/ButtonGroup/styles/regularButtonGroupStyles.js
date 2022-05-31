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
        display:"contents"
        //width: "fit-content",

}

Style1[BUTTON_CONTAINER_SUBCOMPONENT] = {
    
        display: "flex",
        width: "288px",
        height: "32px",
        //border: "1px solid #7F7F72",
        borderTop: "none",
        borderRadius: "2px",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "1",
        flexBasis: "0",
}



const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_GROUP_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularButtonGroupStyles.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
//Style2[BUTTON_CONTAINER_SUBCOMPONENT].border =  "1px solid #FFFFFF"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style2Path[COLOR_ATTRIBUTE] = WHITE_OPTION;

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_GROUP_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
regularButtonGroupStyles.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION;

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_GROUP_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
regularButtonGroupStyles.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style2))

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_GROUP_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
regularButtonGroupStyles.push(style4Wrapper)
export  {regularButtonGroupStyles};