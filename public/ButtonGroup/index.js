import {NAME_OF_COMPONENT, NUMBER_OF_BUTTONS} from './constants.js'
import {ATTRIBUTES} from './constants.js'
import {COLOR_ATTRIBUTE,
        SIZE_ATTRIBUTE} from './constants.js'
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
class SeatButtonGroup extends HTMLElement {
    constructor()
    {
        super();
        
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


        const stylesKeys = setKeys(keysAttributes) 
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        attributes[NUMBER_OF_BUTTONS] = WebComponent.getElementsByTagName('button').length
        if (attributes[NUMBER_OF_BUTTONS]>5) attributes[NUMBER_OF_BUTTONS] = 5
        const container = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes, WebComponent)
        this.appendChild(container)
        this.style.display = 'contents' 
      }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SeatButtonGroup {});
export const SEAT_BUTTON_GROUP = NAME_OF_COMPONENT;

