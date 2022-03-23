import { SEAT_BUTTON } from "./Button/index.js";
import { ICON } from "./Icons/index.js";
import {SEAT_ACCORDION} from "./Accordion/index.js"
import {SEAT_TEXT_INPUT} from "./TextInput/index.js";
import {loadFonts} from "./Fonts/index.js"

const styleSheet = document.createElement("style")
styleSheet.innerText = `${SEAT_ACCORDION}:not(:defined) { display:none }`
document.head.appendChild(styleSheet)
loadFonts()