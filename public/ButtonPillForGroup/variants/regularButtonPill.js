import {CONTAINER_BUTTON_PILL, HOVER_OPTION, TITLE_ATTRIBUTE, TEXT_CONTAINER, WIDTH_ATTRIBUTE} from "../constants.js"
import {STATE_ATTRIBUTE,
        TEMPORARY_ATTRIBUTE} from "../constants.js"
import {NORMAL_OPTION,
        ACTIVE_OPTION} from "../constants.js"
import {DEFAULT_EVENT, 
        HOVER_EVENT, 
        ACTIVE_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"       

class buttonPill extends HTMLElement {
    constructor()
    {
        super();      
        this[NORMAL_OPTION] = []
        this[ACTIVE_OPTION] = []
        this[HOVER_OPTION] = []
        this.styles = null
        this.shadow = this.attachShadow({mode: 'open'});

    }
    static get observedAttributes() { return [ TITLE_ATTRIBUTE, STATE_ATTRIBUTE]; }
    attributeChangedCallback(name,oldValue,newValue) 
    {
     
        const state = this.getAttribute(STATE_ATTRIBUTE)
       
        if (oldValue !== newValue && name === TITLE_ATTRIBUTE) this.shadow.children[0].children[0].innerText = newValue
        if (name === STATE_ATTRIBUTE && oldValue!== newValue)
        {
            if (state === NORMAL_OPTION)
            {
                this[NORMAL_OPTION].forEach( (style)=>  style())
                this.shadow.children[0].onmouseover = () => this[HOVER_OPTION].forEach( (style)=>  style())
                this.shadow.children[0].onmouseout = () => this[NORMAL_OPTION].forEach( (style)=>  style())

            }
            else if (state === ACTIVE_OPTION)
            {
                this[ACTIVE_OPTION].forEach( (style)=>  style())
                this.shadow.children[0].onmouseover = null
                this.shadow.children[0].onmouseout = () => null
            }
        }
    }
    pushingEvents (stylesProcessed) {

        this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
        this[ACTIVE_OPTION].push(...stylesProcessed[ACTIVE_EVENT])
        this[HOVER_OPTION].push(...stylesProcessed[HOVER_EVENT])
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
        this.styles[CONTAINER_BUTTON_PILL].width = attributes[WIDTH_ATTRIBUTE]
        //Creation of all Subcomponents
        const container = this.creatingElement(CONTAINER_BUTTON_PILL)
        const textContainer = this.creatingElement(TEXT_CONTAINER)
        textContainer.innerText = attributes[TITLE_ATTRIBUTE]
        //container.innerText = attributes[TITLE_ATTRIBUTE]
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(container)  
            container.appendChild(textContainer)
           

        this[NORMAL_OPTION].forEach( (style)=>  style())
        this.setAttribute(STATE_ATTRIBUTE,attributes[STATE_ATTRIBUTE])
        this.setAttribute(TITLE_ATTRIBUTE,attributes[TITLE_ATTRIBUTE])


    }
}

const regularButtonP  = 'regular-button-pill'
if (customElements.get(regularButtonP) === undefined) customElements.define(regularButtonP, class extends buttonPill {});
export const regularButtonPill = function (attributes, parentElement)
{
   
    const customButtonP = document.createElement(regularButtonP)
    customButtonP.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

    return customButtonP;
}