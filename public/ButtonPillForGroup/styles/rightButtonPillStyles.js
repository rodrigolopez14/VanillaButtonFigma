import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import {SIZE_ATTRIBUTE,
    COLOR_ATTRIBUTE,
    POSITION_ATTRIBUTE} from "../constants.js"
import {LARGE_OPTION,
    MEDIUM_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,  
    RIGHT_OPTION} from "../constants.js"
import {REGULAR_BUTTON_PILL_VARIANT} from "../constants.js"
import {CONTAINER_BUTTON_PILL} from "../constants.js"
import {HOVER_EVENT, 
    ACTIVE_EVENT} from "../constants.js"

const rightButtonPill = []
const Style1 = {}
Style1[CONTAINER_BUTTON_PILL] = {
//transition: "0.1s all ease-in-out",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
textAlign: "center",
flexGrow: "1",
flexBasis: "0",
padding: "8px 16px",
borderRadius: "0px 2px 2px 0px",
fontFamily: 'SEATBCN',
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
lineHeight: "16px",
height: "32px",
boxSizing: "border-box",
color: "#190F14",
background: "transparent",
userSelect: "none",
width: "57.6px",
overflow: "hidden",
whiteSpace: "nowrap",
}
Style1[CONTAINER_BUTTON_PILL][HOVER_EVENT] = {
    fontWeight: "500",
}
Style1[CONTAINER_BUTTON_PILL][ACTIVE_EVENT] = {
    fontWeight: "500",
    background: "#190F14",
    color: "#ECE9E1",
}

const Style1Path = {}

Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style1Path[POSITION_ATTRIBUTE] = RIGHT_OPTION;


const style1Wrapper = {}
style1Wrapper[STYLE_OBJECT] = {...Style1}
style1Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_PILL_VARIANT
style1Wrapper[PATH_STYLE] = Style1Path
rightButtonPill.push(style1Wrapper)

const Style2 = JSON.parse(JSON.stringify(Style1))
Style2[CONTAINER_BUTTON_PILL].fontSize = "12px"

const Style2Path = {}
Style2Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION;
Style2Path[POSITION_ATTRIBUTE] = RIGHT_OPTION;

const style2Wrapper = {}
style2Wrapper[STYLE_OBJECT] = {...Style2}
style2Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_PILL_VARIANT
style2Wrapper[PATH_STYLE] = Style2Path
rightButtonPill.push(style2Wrapper)

const Style3 = JSON.parse(JSON.stringify(Style1))
Style3[CONTAINER_BUTTON_PILL].color = "#ECE9E1"
Style3[CONTAINER_BUTTON_PILL][ACTIVE_EVENT].background = "#ECE9E1"
Style3[CONTAINER_BUTTON_PILL][ACTIVE_EVENT].color = "#190F14"

const Style3Path = {}
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION;
Style3Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style3Path[POSITION_ATTRIBUTE] = RIGHT_OPTION;

const style3Wrapper = {}
style3Wrapper[STYLE_OBJECT] = {...Style3}
style3Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_PILL_VARIANT
style3Wrapper[PATH_STYLE] = Style3Path
rightButtonPill.push(style3Wrapper)

const Style4 = JSON.parse(JSON.stringify(Style3))
Style4[CONTAINER_BUTTON_PILL].fontSize = "12px"

const Style4Path = {}
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION;
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION;
Style4Path[POSITION_ATTRIBUTE] = RIGHT_OPTION;

const style4Wrapper = {}
style4Wrapper[STYLE_OBJECT] = {...Style4}
style4Wrapper[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_PILL_VARIANT
style4Wrapper[PATH_STYLE] = Style4Path
rightButtonPill.push(style4Wrapper)

export  {rightButtonPill};