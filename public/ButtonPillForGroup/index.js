import {NAME_OF_COMPONENT} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        POSITION_ATTRIBUTE,
        TITLE_ATTRIBUTE} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
class SeatButtonPill extends HTMLElement {
    constructor()
    {
        super();
        
    }
    static get observedAttributes() { return [ TITLE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const title = this.getAttribute(TITLE_ATTRIBUTE)
        this.children[0].setAttribute(TITLE_ATTRIBUTE,title)
    }
    connectedCallback() {
        const WebComponent = this
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const keysAttributes = {}
        keysAttributes[SIZE_ATTRIBUTE] = attributes[SIZE_ATTRIBUTE]
        keysAttributes[COLOR_ATTRIBUTE] = attributes[COLOR_ATTRIBUTE]
        keysAttributes[POSITION_ATTRIBUTE] = attributes[POSITION_ATTRIBUTE]


        const stylesKeys = setKeys(keysAttributes) 
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        const container = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        this.appendChild(container)
        this.style.display = 'contents' 
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SeatButtonPill {});
export const SEAT_BUTTON_PILL = NAME_OF_COMPONENT;

