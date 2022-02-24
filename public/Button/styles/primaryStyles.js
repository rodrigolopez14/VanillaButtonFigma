
import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE} from "../constants.js"
import {PRIMARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    ON_OPTION,
    OFF_OPTION,} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_ICON_VARIANT, REGULAR_BUTTON_VARIANT} from "../constants.js"
import { SIZE_STYLES } from "./commonStyles.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const primaryStyles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style1[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
primaryStyles.push(styleWrapper1)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//
const Style2 = {}

Style2 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style2[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style2[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#ECE9E1",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style2[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#ECE9E1",
}
Style2[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style2Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
primaryStyles.push(styleWrapper2)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT] 
}
Style3[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#747468",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
primaryStyles.push(styleWrapper3)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style4 = {}

Style4 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 
}
Style4[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#747468",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style4[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#6F696C",
}
Style4[ICON_SUBCOMPONENT] = {
color: "#6F696C",
width: "13.5px",
height: "13.5px",
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style4Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
primaryStyles.push(styleWrapper4)

//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE BLACK NORMAL OFFICON */
const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style5[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 


const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
primaryStyles.push(styleWrapper5)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE BLACK NORMAL ONICON *//
const Style6 = {}
/* Auto layout */

Style6 [BUTTON_SUBCOMPONENT] = {    
transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style6[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style6[TEXT_SUBCOMPONENT] = {
fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
color: "#ECE9E1",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 

}
Style6[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#ECE9E1",
}
Style6[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
primaryStyles.push(styleWrapper6)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE BLACK DISABLED OFFICON *//
const Style7 = {}


Style7 [BUTTON_SUBCOMPONENT] = {


transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style7[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#747468",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style7Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style7Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
primaryStyles.push(styleWrapper7)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON //
const Style8 = {}

Style8 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style8[TEXT_SUBCOMPONENT] = {

position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#747468",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style8[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#6F696C",
}
Style8[ICON_SUBCOMPONENT] = {
color: "#6F696C",
width: "13.5px",
height: "13.5px",
}
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style8Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style8Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
primaryStyles.push(styleWrapper8)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE BLACK NORMAL OFFICON */
const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
boxSizing: "border-box",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style9[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style9[TEXT_SUBCOMPONENT] = {

fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style9Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style9Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
primaryStyles.push(styleWrapper9)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL BLACK NORMAL ONICON *//
const Style10 = {}
/* Auto layout */

Style10 [BUTTON_SUBCOMPONENT] = {    

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#190F14",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#443C40",
}
Style10[TEXT_SUBCOMPONENT] = {

fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
color: "#ECE9E1",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style10[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#ECE9E1",
}
Style10[ICON_SUBCOMPONENT] = {
color: "#ECE9E1",
width: "13.5px",
height: "13.5px",
}

const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style10Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style10Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style10Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
primaryStyles.push(styleWrapper10)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL BLACK DISABLED OFFICON *//
const Style11 = {}


Style11 [BUTTON_SUBCOMPONENT] = {


transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style11[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#747468",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style11Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
primaryStyles.push(styleWrapper11)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style12 = {}

Style12 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#D1CFD0",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style12[TEXT_SUBCOMPONENT] = {

position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#747468",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}
Style12[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#6F696C",
}
Style12[ICON_SUBCOMPONENT] = {
color: "#6F696C",
width: "13.5px",
height: "13.5px",
}

const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style12Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style12Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
primaryStyles.push(styleWrapper12)
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP WHITE NORMAL OFFICON */
const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "46px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style13[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style13[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style13Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style13Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style13Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path
primaryStyles.push(styleWrapper13)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE NORMAL ONICON *//
const Style14 = {}

Style14 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style14[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style14[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style14[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style14[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style14Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style14Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style14Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path
primaryStyles.push(styleWrapper14)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED OFFICON *//
const Style15 = {}


/* Interactive/02 Secondary/01 Enabled */

Style15 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style15[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style15Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style15Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style15Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
primaryStyles.push(styleWrapper15)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style16 = {}

Style16 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "48px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style16[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "16px",
color: "#190F14",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style16[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style16[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style16Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style16Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style16Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path
primaryStyles.push(styleWrapper16)
//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE WHITE NORMAL OFFICON */
const Style17 = {}
Style17 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style17[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style17[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style17Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style17Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style17Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style17Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper17 = {}
styleWrapper17[STYLE_OBJECT] = {...Style17}
styleWrapper17[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper17[PATH_STYLE] = Style17Path
primaryStyles.push(styleWrapper17)

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE NORMAL ONICON *//
const Style18 = {}
/* Auto layout */

Style18 [BUTTON_SUBCOMPONENT] = {    
transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "40px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style18[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style18[TEXT_SUBCOMPONENT] = {

fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 

}

Style18[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style18[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style18Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style18Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style18Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT] = {...Style18}
styleWrapper18[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE] = Style18Path
primaryStyles.push(styleWrapper18)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE DISABLED OFFICON *//
const Style19 = {}


Style19 [BUTTON_SUBCOMPONENT] = {


transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style19[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style19Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style19Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style19Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT] = {...Style19}
styleWrapper19[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper19[PATH_STYLE] = Style19Path
primaryStyles.push(styleWrapper19)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE DISABLED ONICON //
const Style20 = {}

Style20 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "38px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style20[TEXT_SUBCOMPONENT] = {

position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style20[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style20[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style20Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style20Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style20Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style20Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper20 = {}
styleWrapper20[STYLE_OBJECT] = {...Style20}
styleWrapper20[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper20[PATH_STYLE] = Style20Path
primaryStyles.push(styleWrapper20)
//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY SMALL WHITE NORMAL OFFICON */
const Style21 = {}
Style21 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
boxShadow: "inset 0 0 0 2px transparent",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style21[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style21[TEXT_SUBCOMPONENT] = {

fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style21Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style21Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style21Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper21 = {}
styleWrapper21[STYLE_OBJECT] = {...Style21}
styleWrapper21[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper21[PATH_STYLE] = Style21Path
primaryStyles.push(styleWrapper21)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL WHITE NORMAL ONICON *//
const Style22 = {}
/* Auto layout */

Style22 [BUTTON_SUBCOMPONENT] = {    

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#ECE9E1",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style22[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
background: "#F2F1ED",
}
Style22[TEXT_SUBCOMPONENT] = {

fontSize: "14px",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}
Style22[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style22[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style22Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style22Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style22Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style22Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper22 = {}
styleWrapper22[STYLE_OBJECT] = {...Style22}
styleWrapper22[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper22[PATH_STYLE] = Style22Path
primaryStyles.push(styleWrapper22)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL WHITE DISABLED OFFICON *//
const Style23 = {}


Style23 [BUTTON_SUBCOMPONENT] = {


transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "30px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]

}
Style23[TEXT_SUBCOMPONENT] = {
position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

const Style23Path = {}
Style23Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style23Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style23Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style23Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style23Path[ICON_ATTRIBUTE] = OFF_OPTION 

const styleWrapper23 = {}
styleWrapper23[STYLE_OBJECT] = {...Style23}
styleWrapper23[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper23[PATH_STYLE] = Style23Path
primaryStyles.push(styleWrapper23)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style24 = {}

Style24 [BUTTON_SUBCOMPONENT] = {

transition: "0.2s all ease-in-out",
position: "relative",
display: "flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
height: "32px", 
background: "#6F696C",
border: "none",
borderRadius: "2px",
boxShadow: "none",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT] 

}
Style24[TEXT_SUBCOMPONENT] = {

position: "static",
fontFamily: "SEATBCN",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "14px",
color: "#190F14",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT] 
}

Style24[ICON_CONTAINER_SUBCOMPONENT] ={
width: "24px",
height: "24px",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#190F14",
}
Style24[ICON_SUBCOMPONENT] = {
color: "#190F14",
width: "13.5px",
height: "13.5px",
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = PRIMARY_OPTION
Style24Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style24Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style24Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style24Path[ICON_ATTRIBUTE] = ON_OPTION 

const styleWrapper24 = {}
styleWrapper24[STYLE_OBJECT] = {...Style24}
styleWrapper24[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper24[PATH_STYLE] = Style24Path
primaryStyles.push(styleWrapper24)

export {primaryStyles}