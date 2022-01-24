
import {HIERARCHY_ATTRIBUTE, 
    DEVICE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    LINE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    PURCHASE_HIERARCHY_ATTRIBUTE} from "../constants.js"
import {SECONDARY_OPTION,
    TERTIARY_OPTION,
    GHOST_OPTION,
    PURCHASE_OPTION,
    HYPERLINK_OPTION,
    DESKTOP_OPTION,
    TABLET_MOBILE_OPTION,
    SMALL_OPTION,
    BLACK_OPTION,
    WHITE_OPTION,
    NORMAL_OPTION,
    DISABLED_OPTION,
    TITLE_OPTION,
    PARAGRAPH_OPTION,
    ON_OPTION,
    OFF_OPTION,
    PRIMARY_PURCHASE_HIERARCHY_OPTION,
    SECONDARY_PURCHASE_HIERARCHY_OPTION,
    TERTIARY_PURCHASE_HIERARCHY_OPTION} from "../constants.js"

import {HOVER_BUTTON_EVENT} from "../constants.js"
const Styles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "46px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style1['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style1['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style1Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 



Styles.push({style: Style1, path: Style1Path})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//
const Style2 = {}

Style2 ['button'] = {
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
}
Style2['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style2['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}
Style2['icon'] ={
    color: "#ECE9E1",
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style2Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style2Path[ICON_ATTRIBUTE] = ON_OPTION 


Styles.push({style: Style2, path: Style2Path})



//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style3 = {}
Style3 ['button'] = {
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box", 
}
Style3['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#747468",
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 10px",
    lineHeight: "20px",
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style3Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 

Styles.push({style: Style3, path: Style3Path})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style4 = {}

Style4 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style4['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#747468",
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 10px",
    lineHeight: "20px",
}
Style4['icon'] ={
    color: "#6F696C",
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style4Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style4Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style4Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style4Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style4Path, style: Style4})

//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE BLACK NORMAL OFFICON */
const Style5 = {}
Style5 ['button'] = {

    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style5['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style5['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "16px",
}
const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style5Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style5Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style5Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style5Path, style: Style5})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE BLACK NORMAL ONICON *//
const Style6 = {}
/* Auto layout */

Style6 ['button'] = {    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style6['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style6['textButton'] = {

    fontSize: "14px",
    margin: "0px 8px",
    lineHeight: "16px",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#ECE9E1",
    
}
Style6['icon'] ={
    color: "#ECE9E1",
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style6Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style6Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style6Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style6Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style6Path, style: Style6})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE BLACK DISABLED OFFICON *//
const Style7 = {}


Style7 ['button'] = {

    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style7['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#747468",
    margin: "0px 10px",
    lineHeight: "16px",
}

const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style7Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style7Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style7Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style7Path, style: Style7})



//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON //
const Style8 = {}

Style8 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style8['textButton'] = {
    
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
    color: "#747468",
    margin: "0px 10px",
    lineHeight: "16px",
}
Style8['icon'] ={
    color: "#6F696C",
}
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style8Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style8Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style8Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style8Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style8Path, style: Style8})


//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE BLACK NORMAL OFFICON */
const Style9 = {}
Style9 ['button'] = {

    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "30px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style9['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style9['textButton'] = {

    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    alignItems: "center",
    textAlign: "center",
    color: "#ECE9E1",
    flex: "none",
    margin: "0px 10px",
    lineHeight: "16px",
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style9Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style9Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style9Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style9Path, style: Style9})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL BLACK NORMAL ONICON *//
const Style10 = {}
/* Auto layout */

Style10 ['button'] = {    

    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "#190F14",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style10['button'][HOVER_BUTTON_EVENT] = {
    background: "#443C40",
}
Style10['textButton'] = {

    fontSize: "14px",
    margin: "0px 8px",
    lineHeight: "16px",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#ECE9E1",
    
}
Style10['icon'] ={
    color: "#ECE9E1",
}
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style10Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style10Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style10Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style10Path, style: Style10})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL BLACK DISABLED OFFICON *//
const Style11 = {}


Style11 ['button'] = {

    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "30px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style11['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#747468",
    margin: "0px 10px",
    lineHeight: "16px",
}

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style11Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style11Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style11Path, style: Style11})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED ONICON *//
const Style12 = {}

Style12 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
    width: "230px",
    height: "32px", 
    background: "#D1CFD0",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style12['textButton'] = {
    
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
    color: "#747468",
    margin: "0px 10px",
    lineHeight: "16px",
}
Style12['icon'] ={
    color: "#6F696C",
}
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style12Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style12Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style12Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style12Path, style: Style12})

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP WHITE NORMAL OFFICON */
const Style13 = {}
Style13 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "46px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style13['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style13['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}
const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style13Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style13Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style13Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style13Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style13Path, style: Style13})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE NORMAL ONICON *//
const Style14 = {}

Style14 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style14['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style14['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}
Style14['icon'] ={
    color: "#190F14",
}
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style14Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style14Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style14Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style14Path, style: Style14})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED OFFICON *//
const Style15 = {}


/* Interactive/02 Secondary/01 Enabled */

Style15 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style15['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}

const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style15Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style15Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style15Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style15Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style15Path, style: Style15})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style16 = {}

Style16 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "48px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style16['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "20px",
}
Style16['icon'] ={
    color: "#190F14",
}
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style16Path[DEVICE_ATTRIBUTE] = DESKTOP_OPTION
Style16Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style16Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style16Path, style: Style16})

//*---------TABLET AND MOBILE *-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY TABLET&MOBILE WHITE NORMAL OFFICON */
const Style17 = {}
Style17 ['button'] = {

    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style17['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style17['textButton'] = {
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
    margin: "0px 10px",
    lineHeight: "16px",
}
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style17Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style17Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style17Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style17Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style17Path, style: Style17})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE NORMAL ONICON *//
const Style18 = {}
/* Auto layout */

Style18 ['button'] = {    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "40px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style18['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style18['textButton'] = {

    fontSize: "14px",
    margin: "0px 8px",
    lineHeight: "16px",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#190F14",
    
}
Style18['icon'] ={
    color: "#190F14",
}
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style18Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style18Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style18Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style18Path, style: Style18})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE DISABLED OFFICON *//
const Style19 = {}


Style19 ['button'] = {

    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style19['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    margin: "0px 10px",
    lineHeight: "16px",
}

const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style19Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style19Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style19Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style19Path, style: Style19})



//*----------------NEW BUTTON ------------------------*/
//* PRIMARY TABLET&MOBILE WHITE DISABLED ONICON //
const Style20 = {}

Style20 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "38px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style20['textButton'] = {
    
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
    color: "#190F14",
    margin: "0px 10px",
    lineHeight: "16px",
}
Style20['icon'] ={
    color: "#190F14",
}
const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style20Path[DEVICE_ATTRIBUTE] = TABLET_MOBILE_OPTION
Style20Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style20Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style20Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style20Path, style: Style20})


//*---------SMALL-----------------------//
//*----------------NEW BUTTON ------------------------*/

//* PRIMARY SMALL WHITE NORMAL OFFICON */
const Style21 = {}
Style21 ['button'] = {

    transition: "0.2s all ease-in-out",
    boxShadow: "inset 0 0 0 2px transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "30px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style21['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style21['textButton'] = {

    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    flex: "none",
    margin: "0px 10px",
    lineHeight: "16px",
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style21Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style21Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style21Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style21Path, style: Style21})


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL WHITE NORMAL ONICON *//
const Style22 = {}
/* Auto layout */

Style22 ['button'] = {    

    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "32px", 
    background: "#ECE9E1",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style22['button'][HOVER_BUTTON_EVENT] = {
    background: "#F2F1ED",
}
Style22['textButton'] = {

    fontSize: "14px",
    margin: "0px 8px",
    lineHeight: "16px",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#190F14",
    
}
Style22['icon'] ={
    color: "#190F14",
}
const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style22Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style22Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style22Path [STATE_ATTRIBUTE] = NORMAL_OPTION
Style22Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style22Path, style: Style22})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY SMALL WHITE DISABLED OFFICON *//
const Style23 = {}


Style23 ['button'] = {

    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "230px",
    height: "30px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style23['textButton'] = {
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#190F14",
    margin: "0px 10px",
    lineHeight: "16px",
}

const Style23Path = {}
Style23Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style23Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style23Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style23Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style23Path[ICON_ATTRIBUTE] = OFF_OPTION 
Styles.push({path:Style23Path, style: Style23})

//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP WHITE DISABLED ONICON *//
const Style24 = {}

Style24 ['button'] = {
    
    transition: "0.2s all ease-in-out",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
    width: "230px",
    height: "32px", 
    background: "#6F696C",
    border: "none",
    borderRadius: "2px",
    boxShadow: "none",
    boxSizing: "border-box",
    
}
Style24['textButton'] = {
    
    position: "static",
    fontFamily: "SEATBCN",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
    color: "#190F14",
    margin: "0px 10px",
    lineHeight: "16px",
}
Style24['icon'] ={
    color: "#190F14",
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = SECONDARY_OPTION
Style24Path[DEVICE_ATTRIBUTE] = SMALL_OPTION
Style24Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style24Path [STATE_ATTRIBUTE] = DISABLED_OPTION
Style24Path[ICON_ATTRIBUTE] = ON_OPTION 
Styles.push({path:Style24Path, style: Style24})

export default Styles;