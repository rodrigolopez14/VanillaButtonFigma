

import {CONTAINER_SLOT_WRAPPER,
        LABEL_SLOT,
        INPUT_SLOT,
        WRAPPER_SUBCOMPONENT,
        CHECKBOX_SUBCOMPONENT,
        CHECK_SUBCOMPONENT,
        BACKGROUND_SVG_SUBCOMPONENT,
        SUCCESS_SVG_SUBCOMPONENT,
        LABEL_SUBCOMPONENT,
        ERROR_SUBCOMPONENT,
        ERROR_EVENT,
        INDETERMINATED_EVENT} from "../constants.js"
import {SVG_ATTRIBUTES, SVG_STYLES, SVG_TYPE} from "../constants.js"
import {STATE_ATTRIBUTE, 
        LABEL_ATTRIBUTE,
        ENABLE_ATTRIBUTE,
        TEMPORARY_ATTRIBUTE} from "../constants.js"
import {NORMAL_OPTION,
        SELECTED_OPTION,
        ERROR_OPTION,
        INDETERMINATED_OPTION,
        ON_OPTION,} from "../constants.js"
import { DEFAULT_EVENT, SELECTED_EVENT } from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"

 

class regCheckbox extends HTMLElement {
    constructor()
    {
        super();      
        this[NORMAL_OPTION] = []
        this[SELECTED_OPTION] = []
        this[ERROR_OPTION] = []
        this[INDETERMINATED_OPTION] = []
        this.styles = null
        this.shadow = this.attachShadow({mode: 'open'});
    
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }
    attributeChangedCallback() 
    {       
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (state === NORMAL_OPTION)
        {
            this[NORMAL_OPTION].forEach( (style)=>  style())
        }
        else if (state === SELECTED_OPTION)
        {
            this[SELECTED_OPTION].forEach( (style)=>  style())
        }
        else if (state === ERROR_OPTION)
        {
            this[ERROR_OPTION].forEach( (style)=>  style())
        }
        else if (state === INDETERMINATED_OPTION)
        {
            this[INDETERMINATED_OPTION].forEach( (style)=>  style())
        }
    }
    pushingEvents (stylesProcessed) {
            this[NORMAL_OPTION].push(...stylesProcessed[DEFAULT_EVENT])
            this[SELECTED_OPTION].push(...stylesProcessed[SELECTED_EVENT])
            this[ERROR_OPTION].push(...stylesProcessed[ERROR_EVENT])
            this[INDETERMINATED_OPTION].push(...stylesProcessed[INDETERMINATED_EVENT])
    }
    creatingElement (NAME_OF_SUBCOMPONENT) 
    {
        const subComponent = document.createElement('div')
        const stylesProccessed= processStyle(subComponent,this.styles[NAME_OF_SUBCOMPONENT])
        this.pushingEvents(stylesProccessed)
        return subComponent;
    }
    createSvgElement (svgSubComponent)  {
        const svgType = this.styles[svgSubComponent][SVG_ATTRIBUTES][SVG_TYPE]
        const svgAttributes = {...this.styles[svgSubComponent][SVG_ATTRIBUTES]}
        delete svgAttributes[SVG_TYPE]
        const keysAttributes = Object.keys(svgAttributes)
        const xmlns = "http://www.w3.org/2000/svg";
        const svgElem = document.createElementNS(xmlns, svgType);
        keysAttributes.forEach(key=> {
            svgElem.setAttributeNS(null, key, svgAttributes[key]);
        })
        const stylesSVG = processStyle(svgElem,this.styles[svgSubComponent][SVG_STYLES])
        this.pushingEvents(stylesSVG)
        return svgElem;
    } 
    connectedCallback() {
        const thisComponent = this
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)
        //Obtain an independent copy of the style Object selected
        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
        //Creation of all Subcomponents
        const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)
        const inputSlot = document.createElement('slot')
        inputSlot.setAttribute('name',INPUT_SLOT)
        const labelSlot = document.createElement('slot')
        labelSlot.setAttribute('name',LABEL_SLOT)
        const wrapper = this.creatingElement(WRAPPER_SUBCOMPONENT)
        const label = this.creatingElement(LABEL_SUBCOMPONENT)
        const textNodeLabel = document.createTextNode(attributes[LABEL_ATTRIBUTE])

        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper) 
            slotWrapper.appendChild(labelSlot)
            slotWrapper.appendChild(inputSlot) 
        this.shadow.appendChild(wrapper) 
            wrapper.appendChild(label)
                label.appendChild(textNodeLabel)
        // Stating initial attributes for the component

        this[NORMAL_OPTION].forEach( (style)=>  style())
    }
    }
    
const regularCB  = 'regular-checkbox'
if (customElements.get(regularCB) === undefined) customElements.define(regularCB, class extends regCheckbox {});

export const regularCheckboxComponent = function (attributes, parentElement)
{
    const contentToAppend = {}
    const labelElement = 'labelElement'
    const inputElement = 'inputElement'
    if (parentElement.getElementsByTagName('label').length>0)  contentToAppend[labelElement] = parentElement.getElementsByTagName('label')[0].cloneNode(true)
    if (parentElement.getElementsByTagName('input').length>0)  contentToAppend[inputElement] = parentElement.getElementsByTagName('input')[0].cloneNode(true)
    while (parentElement.hasChildNodes()) 
    {
            parentElement.removeChild(parentElement.firstChild);
    }
    attributes[LABEL_ATTRIBUTE] = contentToAppend[labelElement].textContent
    const customCheckbox = document.createElement(regularCB)
    customCheckbox.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))
    contentToAppend[inputElement].setAttribute('slot',INPUT_SLOT)
    customCheckbox.appendChild(contentToAppend[inputElement])
    contentToAppend[labelElement].setAttribute('slot',LABEL_SLOT)
    customCheckbox.appendChild(contentToAppend[labelElement])

    return customCheckbox;
}


