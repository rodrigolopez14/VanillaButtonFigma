
import {MODE_ATTRIBUTE, 
        SIZE_ATTRIBUTE, 
        THEME_ATTRIBUTE,
        TYPE_ATTRIBUTE,
        ACTIVE_ATTRIBUTE,
        ICON_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        SHOWARROW_ATTRIBUTE,
        ONCLICK_ATTRIBUTE} from "./constants.js"
import {BUTTON_OPTION,
        DARK_OPTION,
        BIG_OPTION, 
        ACTIVE_OPTION, 
        PRIMARY_OPTION, 
        SHOWARROW_OPTION, 
        NO_ICON_OPTION} from "./constants.js"
import { ATTRIBUTES } from "./constants.js"
import {loadFonts} from "../Fonts/index.js"
import {addStyle, 
        BUTTON_CLASSNAME, 
        ICON_CLASSNAME, 
        ICONARROW_CLASSNAME} from "./styles.js"
import Icons from "../Icons/index.js"
import {NAV_ARROW_ICON_OPTION} from "../Icons/constants.js"

//console.log(ATTRIBUTES)


class vanillaButton extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        // Create Default CSS to apply to the shadow dom,
        var style = document.createElement('style');
        style.textContent= addStyle()
        this.shadow.appendChild(style)   
    }
    connectedCallback() {
   
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        
        this.shadow.childNodes[0].textContent= addStyle(attributes[MODE_ATTRIBUTE],attributes[SIZE_ATTRIBUTE],attributes[ACTIVE_ATTRIBUTE],attributes[THEME_ATTRIBUTE],attributes[TYPE_ATTRIBUTE],attributes[SHOWARROW_ATTRIBUTE])
        const button = document.createElement('button')
        button.className = BUTTON_CLASSNAME
        button.addEventListener("click",attributes[ONCLICK_ATTRIBUTE])
        if (attributes[ICON_ATTRIBUTE]!== NO_ICON_OPTION)
        {
            const iconParent = document.createElement('div')
            iconParent.className = ICON_CLASSNAME
            const iconChild = document.createElement(Icons[attributes[ICON_ATTRIBUTE]])
            iconParent.appendChild(iconChild)
            button.appendChild(iconParent)
        }
        var textButton = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
        button.appendChild(textButton)
        if (attributes[SHOWARROW_ATTRIBUTE] === SHOWARROW_OPTION)
        {
            const iconArrowParent = document.createElement('div')
            iconArrowParent.className = ICONARROW_CLASSNAME
            const iconArrowChild=document.createElement(Icons[NAV_ARROW_ICON_OPTION])
            iconArrowParent.appendChild(iconArrowChild)
            button.appendChild(iconArrowParent)
        }
        this.shadow.appendChild(button)
      }
}
loadFonts()
var customElementName = "seat-button"
customElements.define(customElementName, class extends vanillaButton {});
export const SEAT_BUTTON = customElementName;
