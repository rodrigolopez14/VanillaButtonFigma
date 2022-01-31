import { CUSTOM_ELEMENT_NAME } from "../Accordion/constants.js"
const styleSheet = document.createElement("style")
styleSheet.innerText = `${CUSTOM_ELEMENT_NAME}:not(:defined) { display:none }`
document.head.appendChild(styleSheet)