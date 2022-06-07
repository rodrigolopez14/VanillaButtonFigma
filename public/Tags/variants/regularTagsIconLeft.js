import {CONTAINER_SLOT_WRAPPER, CONTAINER_BUTTON_PILL, TEXT_CONTAINER, ICON_SUBCOMPONENT} from "../constants.js"
import {TEMPORARY_ATTRIBUTE, TITLE_ATTRIBUTE, NORMAL_OPTION, ICON_SELECTION_ATTRIBUTE, COLOR_ATTRIBUTE, COLOR_FONT_ATTRIBUTE} from "../constants.js"
import {DEFAULT_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"       

import {NAME_OF_COMPONENT as ICON} from "../../Icons/constants.js"
import {ICON_SELECTION_ATTRIBUTE as ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT,
        ICON_COLOR_ATTRIBUTE, 
        ICON_HEIGHT_ATTRIBUTE,
        ICON_WIDTH_ATTRIBUTE} from "../../Icons/constants.js"

class regularTagsClass extends HTMLElement {
    constructor()
    {
        super();      
        this.styles = null
        this.shadow = this.attachShadow({mode: 'open'});
        this[NORMAL_OPTION] = []

    }
    pushingEvents (stylesProcessed) {

        this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
        
    }
    creatingElement (NAME_OF_SUBCOMPONENT) 
    {
    const subComponent = document.createElement('div')
    const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
    this.pushingEvents(stylesProccessed)
    return subComponent;
    }
    connectedCallback() {
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        
        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))

        //Component width dimensions and display
        this.style.display = 'contents' 
        this.styles[CONTAINER_BUTTON_PILL].background = attributes[COLOR_ATTRIBUTE]
        this.styles[TEXT_CONTAINER].color = attributes[COLOR_FONT_ATTRIBUTE]
        this.styles[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE] = attributes[COLOR_FONT_ATTRIBUTE]
        //Creation of all Subcomponents
        const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
        const container = this.creatingElement(CONTAINER_BUTTON_PILL)
        const textContainer = this.creatingElement(TEXT_CONTAINER)
        textContainer.innerText = attributes[TITLE_ATTRIBUTE]
        const spanSlot = document.createElement('slot')

        const iconSelected = document.createElement(ICON)
        iconSelected.setAttribute(ICON_SELECTION_ATTRIBUTE_FOR_COMPONENT, attributes[ICON_SELECTION_ATTRIBUTE])
        iconSelected.setAttribute(ICON_HEIGHT_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_HEIGHT_ATTRIBUTE])
        iconSelected.setAttribute(ICON_WIDTH_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_WIDTH_ATTRIBUTE])
        iconSelected.setAttribute(ICON_COLOR_ATTRIBUTE, this.styles[ICON_SUBCOMPONENT][ICON_COLOR_ATTRIBUTE])
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper)
            slotWrapper.appendChild(spanSlot)  
        this.shadow.appendChild(container)  
            container.appendChild(iconSelected)
            container.appendChild(textContainer)

        this[NORMAL_OPTION].forEach( (style)=>  style())


    }
}

const regularTagsVariant  = 'regular-tags-icon-left'
if (customElements.get(regularTagsVariant) === undefined) customElements.define(regularTagsVariant, class extends regularTagsClass {});
export const regularTagsIconLeft = function (attributes, parentElement)
{
   
    const customTags = document.createElement(regularTagsVariant)
    if (parentElement.getElementsByTagName('span').length>0)  
    {
        attributes[TITLE_ATTRIBUTE] = parentElement.getElementsByTagName('span')[0].innerText
        customTags.appendChild(parentElement.getElementsByTagName('span')[0])      
    }
    customTags.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.firstChild);
      }
    return customTags;
}