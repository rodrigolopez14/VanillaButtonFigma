
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE} from "../constants.js"
import {BLACK_OPTION, 
        WHITE_OPTION, 
        BIG_OPTION, 
        SMALL_OPTION, 
        SMALLEST_OPTION} from "../constants.js"
import {CONTAINER_SUBCOMPONENT,
        TITLE_SUBCOMPONENT,
        TEXT_TITLE_SUBCOMPONENT,
        ICON_PARENT_TITLE_SUBCOMPONENT, 
        ICON_CHILD_SUBCOMPONENT,
        CONTENT_SUBCOMPONENT} from "../constants.js"
import { OPEN_ACCORDION_EVENT} from "../constants.js"
const Styles = []
//*----------------STYLING ACCORDIONS ------------------------*/

//*----------------NEW ACCORDION ------------------------*/

//*BLACK  BIG*/
const Style1 = {}
Style1 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style1[TITLE_SUBCOMPONENT] = {
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#7F7F72",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "72px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "transparent",
}
Style1[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "750",
    fontSize: "24px",
    lineHeight: "28px",
}
Style1[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: '#190F14',
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style1[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style1[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style1[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}
Style1[ICON_CHILD_SUBCOMPONENT] = {
    height: "18px",
    width: "18px",
}
const Style1Path = {}
Style1Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style1Path [SIZE_ATTRIBUTE] = BIG_OPTION



Styles.push({style: Style1, path: Style1Path})

//*----------------NEW ACCORDION ------------------------*/

//*BLACK  SMALL*/
const Style2 = {}
Style2 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style2[TITLE_SUBCOMPONENT] = {
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#7F7F72",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "56px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "transparent",
}

Style2[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
}

Style2[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: '#190F14',
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style2[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style2[ICON_CHILD_SUBCOMPONENT] = {
    height: "18px",
    width: "18px"
}
Style2[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style2[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}

const Style2Path = {}
Style2Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style2Path [SIZE_ATTRIBUTE] = SMALL_OPTION



Styles.push({style: Style2, path: Style2Path})

//*----------------NEW ACCORDION ------------------------*/

//*BLACK  SMALLEST*/
const Style3 = {}
Style3 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style3[TITLE_SUBCOMPONENT] = {
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#7F7F72",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "48px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "transparent",
}

Style3[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
}
Style3[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: '#190F14',
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24px",
    width: "24px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style3[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style3[ICON_CHILD_SUBCOMPONENT] = {
    height: "13.5px",
    width: "13.5px"
}
Style3[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style3[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}

const Style3Path = {}
Style3Path[COLOR_ATTRIBUTE] = BLACK_OPTION
Style3Path [SIZE_ATTRIBUTE] = SMALLEST_OPTION



Styles.push({style: Style3, path: Style3Path})


//*----------------NEW ACCORDION ------------------------*/


//*WHITE  BIG*/
const Style4 = {}
Style4 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style4[TITLE_SUBCOMPONENT] = {
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#ECE9E1",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "72px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#2E2A2B",
    color: "#ECE9E1",
}
Style4[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "750",
    fontSize: "24px",
    lineHeight: "28px",
}
Style4[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: "#ECE9E1",
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style4[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style4[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style4[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}
Style4[ICON_CHILD_SUBCOMPONENT] = {
    height: "18px",
    width: "18px",
}
const Style4Path = {}
Style4Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style4Path [SIZE_ATTRIBUTE] = BIG_OPTION



Styles.push({style: Style4, path: Style4Path})

//*----------------NEW ACCORDION ------------------------*/

//*WHITE  SMALL*/
const Style5 = {}
Style5 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style5[TITLE_SUBCOMPONENT] = {
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#ECE9E1",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "56px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#2E2A2B",
    color: "#ECE9E1",
}

Style5[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
}

Style5[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: "#ECE9E1",
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style5[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style5[ICON_CHILD_SUBCOMPONENT] = {
    height: "18px",
    width: "18px"
}
Style5[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style5[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}

const Style5Path = {}
Style5Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style5Path [SIZE_ATTRIBUTE] = SMALL_OPTION



Styles.push({style: Style5, path: Style5Path})

//*----------------NEW ACCORDION ------------------------*/

//*WHITE  SMALLEST*/
const Style6 = {}
Style6 [CONTAINER_SUBCOMPONENT] = {
    margin: "0px",
    padding: "0px",
    borderStyle: "none",
    display: "contents",
  
}

Style6[TITLE_SUBCOMPONENT] = {
    color: "#ECE9E1",
    borderStyle: "none",
    borderTopStyle: "groove",
    borderTopColor: "#ECE9E1",
    borderTopWidth: "1px",
    margin: "0px",
    padding: "0px",
    width: "100%",
    display: "flex",
    height: "48px",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#2E2A2B",
}

Style6[TEXT_TITLE_SUBCOMPONENT] = {
    position: "absolute",
    left: "0px",
    fontFamily: "SEAT BCN",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
}
Style6[ICON_PARENT_TITLE_SUBCOMPONENT] = {
    color: "#ECE9E1",
    position: "absolute",
    right: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24px",
    width: "24px",
    transition: "transform 1s",
    transform: "rotate(90deg)",
}
Style6[ICON_PARENT_TITLE_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    transform: "rotate(0deg)",
    transition: "transform 1s",
    
}
Style6[ICON_CHILD_SUBCOMPONENT] = {
    height: "13.5px",
    width: "13.5px"
}
Style6[CONTENT_SUBCOMPONENT] = {
    border: "none",
    margin:"none",
    padding: "0px",
    height: "0px",
    transition: "height 1s",
    overflow: "hidden"
}
Style6[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT] = {
    
    height: "1000px",
    transition: "height 1s",
}

const Style6Path = {}
Style6Path[COLOR_ATTRIBUTE] = WHITE_OPTION
Style6Path [SIZE_ATTRIBUTE] = SMALLEST_OPTION



Styles.push({style: Style6, path: Style6Path})

export default Styles;