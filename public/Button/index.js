import {ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        ONCLICK_ATTRIBUTE} from "./constants.js"
import {ATTRIBUTES} from "./constants.js"
import {loadFonts} from "../Fonts/index.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
loadFonts()

class vanillaButton extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        
    }
    connectedCallback() {
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const keysAttributes = {...attributes}
        delete keysAttributes[CHILDREN_ATTRIBUTE];
        delete keysAttributes[ONCLICK_ATTRIBUTE];
        delete keysAttributes[ICON_SELECTION_ATTRIBUTE];
        const stylesKeys = setKeys(keysAttributes)
        const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes,stylesKeys[STYLE_KEY])
        this.shadow.appendChild(button)
      }
}

var customElementName = NAME_OF_COMPONENT;
customElements.define(customElementName, class extends vanillaButton {});
export const SEAT_BUTTON = customElementName;
