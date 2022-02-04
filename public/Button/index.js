
import {HIERARCHY_ATTRIBUTE, 
        DEVICE_ATTRIBUTE, 
        COLOR_ATTRIBUTE,
        STATE_ATTRIBUTE,
        LINE_ATTRIBUTE,
        ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        PURCHASE_HIERARCHY_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        ONCLICK_ATTRIBUTE} from "./constants.js"
import {TERTIARY_OPTION, PURCHASE_OPTION, TERTIARY_PURCHASE_HIERARCHY_OPTION, ON_OPTION, ICON_DEFAULT} from "./constants.js"
import { ATTRIBUTES } from "./constants.js"
import { DEFAULT_EVENT, HOVER_BUTTON_EVENT } from "./constants.js"
import { BUTTON_SUBCOMPONENT, ICON_SUBCOMPONENT, TEXT_SUBCOMPONENT, ICONARROW_SUBCOMPONENT } from "./constants.js"
import {loadFonts} from "../Fonts/index.js"
import {setStyle, processStyle} from "./styles/index.js"

import {ICON} from "../Icons/index.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT} from "../Icons/constants.js"
import { ICON_COLOR_ATTRIBUTE } from "../Icons/constants.js"
import {NAV_ARROW_ICON_OPTION} from "../Icons/constants.js"
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
        const styleAttributes = {...attributes}
        delete styleAttributes[CHILDREN_ATTRIBUTE];
        delete styleAttributes[ONCLICK_ATTRIBUTE];
        delete styleAttributes[ICON_SELECTION_ATTRIBUTE];
        const styles = setStyle(styleAttributes)

        const button = document.createElement('button')
        const stylesProccessedButton = processStyle(button,styles[BUTTON_SUBCOMPONENT])
        const onMouseOutButtonStyles = stylesProccessedButton[DEFAULT_EVENT]
        const onMouseOverButtonStyles = stylesProccessedButton[HOVER_BUTTON_EVENT]
        
        button.addEventListener("click",attributes[ONCLICK_ATTRIBUTE])
        if (attributes[ICON_ATTRIBUTE] === ON_OPTION && attributes[ICON_SELECTION_ATTRIBUTE] !== ICON_DEFAULT)
        {
            const iconParent = document.createElement('div')
            const iconChild = document.createElement(ICON)
            iconChild.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
            const stylesProccessedIcon = processStyle (iconParent, styles[ICON_SUBCOMPONENT])
            onMouseOutButtonStyles.push(...stylesProccessedIcon[DEFAULT_EVENT])
            onMouseOverButtonStyles.push(...stylesProccessedIcon[HOVER_BUTTON_EVENT])
            if (styles[ICON_SUBCOMPONENT].color) iconChild.setAttribute(ICON_COLOR_ATTRIBUTE,styles[ICON_SUBCOMPONENT].color)
            iconParent.appendChild(iconChild)
            button.appendChild(iconParent)
        }
        
        const textNode = document.createTextNode(attributes[CHILDREN_ATTRIBUTE])
        const textButton = document.createElement('div')
        const stylesProccessedText = processStyle(textButton,styles[TEXT_SUBCOMPONENT])
        onMouseOutButtonStyles.push(...stylesProccessedText[DEFAULT_EVENT])
        onMouseOverButtonStyles.push(...stylesProccessedText[HOVER_BUTTON_EVENT])
        textButton.appendChild(textNode)
        button.appendChild(textButton)
        if (attributes[HIERARCHY_ATTRIBUTE] === TERTIARY_OPTION || (attributes [HIERARCHY_ATTRIBUTE] === PURCHASE_OPTION && attributes[PURCHASE_HIERARCHY_ATTRIBUTE] === TERTIARY_PURCHASE_HIERARCHY_OPTION))
        {
            const iconArrowParent = document.createElement('div')
            const stylesProccessedIconArrow = processStyle (iconArrowParent, styles[ICONARROW_SUBCOMPONENT])
            onMouseOutButtonStyles.push(...stylesProccessedIconArrow[DEFAULT_EVENT])
            onMouseOverButtonStyles.push(...stylesProccessedIconArrow[HOVER_BUTTON_EVENT])
            const iconArrowChild = document.createElement(Icons[NAV_ARROW_ICON_OPTION])
            if (styles[ICONARROW_SUBCOMPONENT].color) iconArrowChild.setAttribute('color',styles[ICONARROW_SUBCOMPONENT].color)
            iconArrowParent.appendChild(iconArrowChild)
            button.appendChild(iconArrowParent)
        }
        onMouseOutButtonStyles.forEach( (style)=> style())
        button.onmouseover = () => onMouseOverButtonStyles.forEach((style)=> style())
        button.onmouseout = () => onMouseOutButtonStyles.forEach((style)=> style())
        this.shadow.appendChild(button)
          
        
      }
}

var customElementName = "seat-button"
customElements.define(customElementName, class extends vanillaButton {});
export const SEAT_BUTTON = customElementName;
