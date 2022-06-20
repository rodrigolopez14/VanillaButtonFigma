import { COMPONENTS } from "./variants/index.js";
import { CUSTOM_ELEMENT_NAME } from "./constants.js";
import { ATTRIBUTES } from "./constants.js";
import { OPEN_ATTRIBUTE, TITLE_ATTRIBUTE } from "./constants.js";
import { setKeys } from "./styles/index.js";
import {COMPONENT_VARIANT_KEY, STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"
class vanillaAccordion extends HTMLElement {
    constructor()
    {
        super();
    }
  
      construction() 
      {
        this.style.display = 'initial'
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const styleAttributes = {...attributes}
        delete styleAttributes[OPEN_ATTRIBUTE];
        delete styleAttributes[TITLE_ATTRIBUTE];
        const keys = setKeys(styleAttributes)
        attributes[STYLE_KEY] = keys[STYLE_KEY]
        const accordion = COMPONENTS[keys[COMPONENT_VARIANT_KEY]] (attributes, this)
        this.appendChild(accordion)
      }
      connectedCallback() {
        const WebComponent = this
        WebComponent.style.display='none'
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
            document.addEventListener('DOMContentLoaded', WebComponent.construction);
          } else {  // `DOMContentLoaded` has already fired
            WebComponent.construction();
          }
        
      }
}


if (customElements.get(CUSTOM_ELEMENT_NAME) === undefined) customElements.define(CUSTOM_ELEMENT_NAME, class extends vanillaAccordion {});
export const SEAT_ACCORDION = CUSTOM_ELEMENT_NAME;
