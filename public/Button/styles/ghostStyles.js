import {HIERARCHY_ATTRIBUTE, 
    DEVICE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE} from "../constants.js"
import {GHOST_OPTION,
    DESKTOP_OPTION,
    TABLET_MOBILE_OPTION,
    SMALL_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    OFF_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
        TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "./constants.js"
const ghostStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#ECE9E1"
}
Style1[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "20px",
}

const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style1Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
ghostStyles.push(styleWrapper1)


//Nuevo boton
const Style2 = {}
Style2 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style2[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#D1CFD0",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "20px",
}

const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style2Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style2Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
ghostStyles.push(styleWrapper2)


const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style3[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#ECE9E1"
}
Style3[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style3Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style3Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
ghostStyles.push(styleWrapper3)


//Nuevo boton
const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style4[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#D1CFD0",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style4Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
ghostStyles.push(styleWrapper4)

// new button
const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#ECE9E1"
}
Style5[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style5Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
ghostStyles.push(styleWrapper5)


//Nuevo boton
const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style6[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#D1CFD0",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style6Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style6Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
ghostStyles.push(styleWrapper6)


const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style7[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#7F7F72"
}
Style7[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#ECE9E1",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "20px",
}

const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style7Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style7Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style7Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style7Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
ghostStyles.push(styleWrapper7)


//Nuevo boton
const Style8 = {}
Style8 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style8[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#98928F",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "20px",
}

const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style8Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style8Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
ghostStyles.push(styleWrapper8)


const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style9[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#7F7F72"
}
Style9[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#ECE9E1",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style9Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style9Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
ghostStyles.push(styleWrapper9)


//Nuevo boton
const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style10[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#98928F",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style10Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style10Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style10Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style10Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
ghostStyles.push(styleWrapper10)

// new button
const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style11[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    background: "#7F7F72"
}
Style11[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#ECE9E1",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style11Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style11Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style11Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
ghostStyles.push(styleWrapper11)


//Nuevo boton
const Style12 = {}
Style12 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style12[TEXT_SUBCOMPONENT] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#98928F",
    flex: "none",
    order: "0",
    flexGrow: "0",
    lineHeight: "16px",
}

const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = GHOST_OPTION
Style12Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style12Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path [ICON_ATTRIBUTE] = OFF_OPTION

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
ghostStyles.push(styleWrapper12)
export {ghostStyles}