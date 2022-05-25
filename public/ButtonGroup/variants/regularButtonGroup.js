import {SEAT_BUTTON_PILL} from "../../ButtonPillForGroup/index.js"
import {COLOR_ATTRIBUTE, SIZE_ATTRIBUTE} from "../constants.js"
import {CONTAINER_SLOT_WRAPPER,
        BUTTON_SLOT,
        CONTAINER_SUB_WRAPPER, 
        BUTTON_CONTAINER_SUBCOMPONENT} from "../constants.js"
import {
        WIDTH_ATTRIBUTE,
        NUMBER_OF_BUTTONS,
        TEMPORARY_ATTRIBUTE} from "../constants.js"
import {DEFAULT_EVENT} from "../constants.js"
import {setStyle, processStyle} from "../styles/index.js"
import {STYLE_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { STATE_ATTRIBUTE,CENTER_OPTION, LEFT_OPTION, POSITION_ATTRIBUTE,TITLE_ATTRIBUTE, RIGHT_OPTION,NORMAL_OPTION,ACTIVE_OPTION, WIDTH_ATTRIBUTE as WIDTH_PILL_ATTRIBUTE } from "../../ButtonPillForGroup/constants.js"

// CONTAINER_SLOT_WRAPPER
// I----------->BUTTON_SLOT[]
// CONTAINER_SUB_WRAPPER
// I----------->ixBUTTON_CONTAINER_SUBCOMPONENT

class buttonGroupComponent extends HTMLElement {
    constructor()
    {
        super();      
        this.styles = null
        this[NORMAL_OPTION] = []
        this.shadow = this.attachShadow({mode: 'open'});
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
        const thisComponent = this
        const attributes = JSON.parse(this.getAttribute(TEMPORARY_ATTRIBUTE))
        this.removeAttribute(TEMPORARY_ATTRIBUTE)

        this.styles = JSON.parse(JSON.stringify(setStyle(attributes[STYLE_KEY])))
        if (attributes[WIDTH_ATTRIBUTE]!== "") this.styles[BUTTON_CONTAINER_SUBCOMPONENT].width = attributes[WIDTH_ATTRIBUTE]

        const realWidth = parseInt(this.styles[BUTTON_CONTAINER_SUBCOMPONENT].width.slice(0, -2))
        const buttonPillWidth = (realWidth/attributes[NUMBER_OF_BUTTONS]).toString()+'px'
        //Component width dimensions and display
        this.style.display = 'none' 
        
        //Creation of all Subcomponents
        const slotWrapper = this.creatingElement(CONTAINER_SLOT_WRAPPER)

        const buttonSlots = []
        for (var i=0; i<attributes[NUMBER_OF_BUTTONS];i++)
        {
            buttonSlots.push(document.createElement('slot'))
            buttonSlots[i].setAttribute('name',BUTTON_SLOT[i])
        }
       
        

        const wrapper = this.creatingElement(CONTAINER_SUB_WRAPPER)
        const buttonsContainer = this.creatingElement(BUTTON_CONTAINER_SUBCOMPONENT)
        const buttonElement = []
        const selected = {}
        selected.option = 0
        const solvingClosure = () =>
        {
            const indexCopy = i
            return () => {return indexCopy};
        }
        for (var i=0; i<attributes[NUMBER_OF_BUTTONS];i++)
        {
            const indexCopy = solvingClosure()()
            buttonElement.push(document.createElement(SEAT_BUTTON_PILL))
            buttonSlots[indexCopy].addEventListener('slotchange', function(e) {
                thisComponent.style.display = 'contents'
                buttonElement[indexCopy].setAttribute(TITLE_ATTRIBUTE,buttonSlots[indexCopy].assignedElements()[0].innerText)
                if (indexCopy === 0) 
                {
                    buttonElement[indexCopy].setAttribute(STATE_ATTRIBUTE,ACTIVE_OPTION)
                }
            
            })
            
            buttonElement[indexCopy].setAttribute(SIZE_ATTRIBUTE,attributes[SIZE_ATTRIBUTE])
            buttonElement[indexCopy].setAttribute(COLOR_ATTRIBUTE,attributes[COLOR_ATTRIBUTE])
            buttonElement[indexCopy].setAttribute(WIDTH_PILL_ATTRIBUTE,buttonPillWidth)
            if (indexCopy === 0) 
            {
                buttonElement[indexCopy].setAttribute(POSITION_ATTRIBUTE,LEFT_OPTION)
            }
            else if (indexCopy === (attributes[NUMBER_OF_BUTTONS]-1)) 
            {
                buttonElement[indexCopy].setAttribute(POSITION_ATTRIBUTE,RIGHT_OPTION)
            }
            else 
            {
                buttonElement[indexCopy].setAttribute(POSITION_ATTRIBUTE,CENTER_OPTION)
    
            }
            buttonElement[indexCopy].onclick = () => {selected.option = indexCopy}
        }
        
        
        
        //Appending subcomponents with its respective parent
        this.shadow.appendChild(slotWrapper)
            buttonSlots.forEach(element => {slotWrapper.appendChild(element)})
        this.shadow.appendChild(wrapper)
            wrapper.appendChild(buttonsContainer)
                buttonElement.forEach(element => {buttonsContainer.appendChild(element)})

        //Adding some behaviour to the component
        document.addEventListener('click', function(event) {
           
            const isClickInsideElement = thisComponent.contains(event.target);
            if (isClickInsideElement) 
            {
                buttonElement.forEach(element => {
                    element.setAttribute(STATE_ATTRIBUTE,NORMAL_OPTION)})
                buttonElement[selected.option].setAttribute(STATE_ATTRIBUTE,ACTIVE_OPTION)
                buttonSlots[selected.option].assignedElements()[0].click()
            }
        })

        this[NORMAL_OPTION].forEach( (style)=>  style())

    }
}

const regularButtonGroups  = 'regular-button-group'
if (customElements.get(regularButtonGroups) === undefined) customElements.define(regularButtonGroups, class extends buttonGroupComponent {});
export const regularButtonGroup = function (attributes,parentElement)
{
    var indexButtons = 0
    const customButtonGroup = document.createElement(regularButtonGroups)
    customButtonGroup.setAttribute(TEMPORARY_ATTRIBUTE,JSON.stringify(attributes))

    if (parentElement.getElementsByTagName('button').length>0)  
    {
            while(parentElement.getElementsByTagName('button').length > 0 && indexButtons<5)
            {  
                parentElement.getElementsByTagName('button')[0].setAttribute('slot',BUTTON_SLOT[indexButtons])
                customButtonGroup.appendChild(parentElement.getElementsByTagName('button')[0])
                indexButtons = indexButtons + 1
            }       
    }
    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.firstChild);
      }
    return customButtonGroup;
}