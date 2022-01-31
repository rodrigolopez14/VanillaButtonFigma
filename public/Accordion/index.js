import {CUSTOM_ELEMENT_NAME} from "./constants.js"
import {loadFonts} from "../Fonts/index.js"
import {setStyle, processStyle} from "./styles/index.js"

import {OPENED_OPTION, CLOSED_OPTION, OPEN_ATTRIBUTE, TITLE_ATTRIBUTE} from "./constants.js"
import { OPEN_ACCORDION_EVENT, DEFAULT_EVENT } from "./constants.js"
import {CONTAINER_SUBCOMPONENT, TITLE_SUBCOMPONENT, TEXT_TITLE_SUBCOMPONENT, ICON_PARENT_TITLE_SUBCOMPONENT, ICON_CHILD_SUBCOMPONENT , CONTENT_SUBCOMPONENT} from "./constants.js"
import { ATTRIBUTES } from "./constants.js"

import {PLUS_ICON_OPTION, MINUS_ICON_OPTION} from "./accordionIcons/constants.js"
import accordionIcons from "./accordionIcons/index.js"
loadFonts()
class vanillaAccordion extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.styles = null
        this.openStyles = []
        this.closeStyles = []
        this.iconParent = document.createElement('div')
        this.slot = null


        
    }
    static get observedAttributes() { return [OPEN_ATTRIBUTE]; }
    attributeChangedCallback() 
    {
        const state = this.getAttribute(OPEN_ATTRIBUTE)
        if (state === OPENED_OPTION)
            {                
                this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(accordionIcons[MINUS_ICON_OPTION])
                this.iconChild.setAttribute('color',this.styles[ICON_PARENT_TITLE_SUBCOMPONENT]['color'])
                this.iconChild.setAttribute('height',this.styles[ICON_CHILD_SUBCOMPONENT]['height'])
                this.iconChild.setAttribute('width',this.styles[ICON_CHILD_SUBCOMPONENT]['width'])
                this.iconParent.appendChild(this.iconChild)
                this.openStyles.forEach( (style)=>  style())
            }
        else if (state !== OPENED_OPTION)
            {                
                this.iconParent.removeChild(this.iconChild)
                this.iconChild = document.createElement(accordionIcons[PLUS_ICON_OPTION])
                this.iconChild.setAttribute('color',this.styles[ICON_PARENT_TITLE_SUBCOMPONENT]['color'])
                this.iconChild.setAttribute('height',this.styles[ICON_CHILD_SUBCOMPONENT]['height'])
                this.iconChild.setAttribute('width',this.styles[ICON_CHILD_SUBCOMPONENT]['width'])
                this.iconParent.appendChild(this.iconChild)
                this.closeStyles.forEach( (style)=>  style())
                return;
            }

    }
    connectedCallback() {
        
        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        const styleAttributes = {...attributes}
        delete styleAttributes[OPEN_ATTRIBUTE];
        delete styleAttributes[TITLE_ATTRIBUTE];
        this.styles = setStyle(styleAttributes)

        const container = document.createElement('div')
        const stylesProccessedContainer = processStyle(container,this.styles[CONTAINER_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedContainer[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedContainer[OPEN_ACCORDION_EVENT])
        
        const title = document.createElement('button')
        const stylesProccessedTitle = processStyle(title,this.styles[TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedTitle[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedTitle[OPEN_ACCORDION_EVENT])

        const content = document.createElement('div')    
        
        

        const contentToAppend = document.createElement('slot')
        
        
        content.appendChild(contentToAppend)

        const textTitleNode = document.createTextNode(attributes[TITLE_ATTRIBUTE])
        const textTitle= document.createElement('div')
        const stylesProccessedText = processStyle(textTitle,this.styles[TEXT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedText[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedText[OPEN_ACCORDION_EVENT])
        textTitle.appendChild(textTitleNode)
        title.appendChild(textTitle)

        
        const stylesProccessedIconParent = processStyle (this.iconParent, this.styles[ICON_PARENT_TITLE_SUBCOMPONENT])
        this.closeStyles.push(...stylesProccessedIconParent[DEFAULT_EVENT])
        this.openStyles.push(...stylesProccessedIconParent[OPEN_ACCORDION_EVENT])

        if (attributes[OPEN_ATTRIBUTE] === OPENED_OPTION) this.iconChild = document.createElement(accordionIcons[MINUS_ICON_OPTION])
        else if (attributes[OPEN_ATTRIBUTE] !== OPENED_OPTION) this.iconChild = document.createElement( accordionIcons[PLUS_ICON_OPTION])
        this.iconChild.setAttribute('color',this.styles[ICON_PARENT_TITLE_SUBCOMPONENT]['color'])
        this.iconChild.setAttribute('height',this.styles[ICON_CHILD_SUBCOMPONENT]['height'])
        this.iconChild.setAttribute('width',this.styles[ICON_CHILD_SUBCOMPONENT]['width'])
        this.iconParent.appendChild(this.iconChild)
        title.appendChild(this.iconParent)

        
        this.slot = contentToAppend
       
        

        container.appendChild(title)
        container.appendChild(content)
        

        this.closeStyles.forEach((style) =>  style())
        const clickAccordion = (event) => {
            event.preventDefault()
            const state = this.getAttribute(OPEN_ATTRIBUTE)
            if (state === OPENED_OPTION)
            {
                this.setAttribute(OPEN_ATTRIBUTE,CLOSED_OPTION)
                return;
            }
            else if (state !== OPENED_OPTION)
            {
                this.setAttribute(OPEN_ATTRIBUTE,OPENED_OPTION)
                return;
            }
            
        }
        const customClass = this
        contentToAppend.addEventListener('slotchange', function(e) {
            contentToAppend.assignedElements()[0].style['padding']='1px'
            const st = JSON.parse(JSON.stringify(customClass.styles));
            st[CONTENT_SUBCOMPONENT][OPEN_ACCORDION_EVENT]['height'] = `${contentToAppend.assignedElements()[0].scrollHeight}px`
            const stylesProccessedContent = processStyle(content,st[CONTENT_SUBCOMPONENT])
            customClass.closeStyles.push(...stylesProccessedContent[DEFAULT_EVENT])
            customClass.openStyles.push(...stylesProccessedContent[OPEN_ACCORDION_EVENT])
            customClass.closeStyles.forEach((style) =>  style())
            if (attributes[OPEN_ATTRIBUTE] === OPENED_OPTION) customClass.openStyles.forEach( (style)=>  style())
        })
        title.addEventListener("click", clickAccordion)
        this.shadow.appendChild(container) 
      }
}


customElements.define(CUSTOM_ELEMENT_NAME, class extends vanillaAccordion {});
export const SEAT_ACCORDION = CUSTOM_ELEMENT_NAME;
