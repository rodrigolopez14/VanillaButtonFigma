import { SEAT_BUTTON } from "./Button/index.js";
import { ICON } from "./Icons/index.js";
import {SEAT_ACCORDION} from "./Accordion/index.js"
import {SEAT_TEXT_INPUT} from "./TextInput/index.js";
import {loadFonts} from "./Fonts/index.js"
import {SEAT_DROPDOWN} from "./Dropdown/index.js"
import {SEAT_RADIO_BUTTON} from "./RadioButton/index.js"
import {SEAT_CHECKBOX} from "./Checkbox/index.js"
import {SEAT_TEXT_AREA} from "./Textarea/index.js"
import {SEAT_BUTTON_PILL} from "./ButtonPillForGroup/index.js";
import {SEAT_BUTTON_GROUP} from "./ButtonGroup/index.js"
const styleSheet = document.createElement("style")
styleSheet.innerText = `${SEAT_ACCORDION}:not(:defined) { display:none }`
document.head.appendChild(styleSheet)
loadFonts()