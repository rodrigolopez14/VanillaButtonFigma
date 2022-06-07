import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {CLOSE_ATTRIBUTE, ICON_ATTRIBUTE, POSTION_ICON_ATTRIBUTE, RIGHT_ICON_POSITION_OPTION} from "../constants.js"
import {ON_ICON_OPTION, NO_CLOSE_OPTION} from "../constants.js"
import {TEXT_CONTAINER, CONTAINER_SLOT_WRAPPER, ICON_SUBCOMPONENT} from "../constants.js"
import {REGULAR_TAGS_ICON_RIGHT_VARIANT} from "../constants.js"
import {ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"
import {CONTAINER_BUTTON_PILL} from "../constants.js"

const regularTagsIconRightStyles = []
const Style1 = {}
Style1[CONTAINER_SLOT_WRAPPER] = {
    display: "none"
}
Style1[CONTAINER_BUTTON_PILL] = {
display:"flex",
alignItems: "flex-start",
boxSizing: "border-box",
padding: "4px 8px",
background: "black",
height: "24px",
width:"fit-content",
background: "#009196",
borderRadius: "2px",
}



Style1[TEXT_CONTAINER] = {
    height:"100%",
    boxSizing: "border-box",
    width:"fit-content",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#190F14",
    marginRight: "4px",
    userSelect: "none"
}

Style1[ICON_SUBCOMPONENT] = {}
Style1[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE]="#190F14"
Style1[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE]="16px"
Style1[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE]="16px"
const Style1Path = {}

Style1Path[ICON_ATTRIBUTE] = ON_ICON_OPTION;
Style1Path[CLOSE_ATTRIBUTE] = NO_CLOSE_OPTION;
Style1Path[POSTION_ICON_ATTRIBUTE] = RIGHT_ICON_POSITION_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_TAGS_ICON_RIGHT_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
regularTagsIconRightStyles.push(style1Wrapper)



export  {regularTagsIconRightStyles};