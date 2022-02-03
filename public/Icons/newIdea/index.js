import { ICON_ATTRIBUTES, ICON_SELECTION_ATTRIBUTE ,animatedIcons } from './constants.js';
import { REGULAR_ICON } from './components/regularIcons.js'
import { ANIMATED_ICON } from './components/animatedIcons.js'
export  class SvgIconSeat extends HTMLElement {
    constructor() 
    {
        super();
    }
    
    connectedCallback() 
    {
        const ICON = [];
        if (animatedIcons.hasOwnProperty(this.getAttribute(ICON_SELECTION_ATTRIBUTE))) ICON.push(document.createElement(ANIMATED_ICON))
        else ICON.push(document.createElement(REGULAR_ICON))
        ICON_ATTRIBUTES.forEach((ATTRIBUTE)=>{
            if (this.getAttribute(ATTRIBUTE.attributeName)) ICON[0].setAttribute (ATTRIBUTE.attributeName, this.getAttribute(ATTRIBUTE.attributeName))
        })
        this.innerHTML=`${ICON[0].outerHTML}`
      }
}
const customElementName = 'seat-icons'
customElements.define(customElementName, class extends SvgIconSeat {});
export const ICON = customElementName;

