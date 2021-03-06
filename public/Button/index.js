import {ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        SIZE_ATTRIBUTE
        } from "./constants.js"
import {ON_OPTION,
        OFF_OPTION,
        ICON_DEFAULT } from "./constants.js"
import {ATTRIBUTES} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"

class vanillaButton extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        
    }
    construction() {
        const buttonOrAnchor = []
        //CREATION OF A DEFAULT BUTTON IF NOTHING IS APPENDED 
        const buttonDefault = document.createElement('button')
        const textNode = document.createTextNode('Call to action')
        buttonDefault.appendChild(textNode)
        buttonDefault.onclick = () => {alert('Call to action')}
        buttonOrAnchor.push(buttonDefault)
        if (this.getElementsByTagName('button').length>0) 
        {
            buttonOrAnchor.pop()
            buttonOrAnchor.push(this.getElementsByTagName('button')[0])
        }
        else if (this.getElementsByTagName('a').length>0) 
        {
            buttonOrAnchor.pop()
            buttonOrAnchor.push(this.getElementsByTagName('a')[0])
        }
        const slotContainer = document.createElement('div')
        slotContainer.style.display = 'none'
        const slotSubComponent = document.createElement('slot')

        const attributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        if (!this.getAttribute(SIZE_ATTRIBUTE)) this.setAttribute(SIZE_ATTRIBUTE,attributes[SIZE_ATTRIBUTE])
        
        const keysAttributes = {...attributes}
        delete keysAttributes[CHILDREN_ATTRIBUTE];

        delete keysAttributes[ICON_SELECTION_ATTRIBUTE];
        if (attributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) keysAttributes[ICON_ATTRIBUTE] = OFF_OPTION
        else keysAttributes[ICON_ATTRIBUTE] = ON_OPTION
        
        
        const stylesKeys = setKeys(keysAttributes)
        
        attributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        attributes[CHILDREN_ATTRIBUTE] = buttonOrAnchor[0].textContent
        const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (attributes)
        button.onclick = () => {buttonOrAnchor[0].click()}
        if (this.shadow.children.length === 0) {
        this.shadow.appendChild(slotContainer)
            slotContainer.appendChild(slotSubComponent)
        this.shadow.appendChild(button) 
        }
        this.style.display = 'contents'
      }
      connectedCallback() {
          
        const WebComponent = this
        WebComponent.style.display = 'none'
        
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
          document.addEventListener('DOMContentLoaded', WebComponent.construction);
        } else {  // `DOMContentLoaded` has already fired
            WebComponent.construction();
        }
      }
      
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const SEAT_BUTTON = NAME_OF_COMPONENT;
