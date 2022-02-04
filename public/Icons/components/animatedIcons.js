import {ICON_ATTRIBUTES, 
    ICON_COLOR_ATTRIBUTE, 
    ICON_HEIGHT_ATTRIBUTE, 
    ICON_WIDTH_ATTRIBUTE, 
    ICON_SELECTION_ATTRIBUTE,
    ICON_PATH_ATTRIBUTE,
    ICON_VIEWBOX_ATTRIBUTE,
    ICON_ANIMATION_DURATION
    } from '../constants.js'
export  class SvgIcon extends HTMLElement {
constructor() 
{
    super();
}

connectedCallback() {
    const attributes = {}
    ICON_ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
        if (this.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
        else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
    })
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", attributes[ICON_SELECTION_ATTRIBUTE][ICON_VIEWBOX_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "width", attributes[ICON_WIDTH_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "height", attributes[ICON_HEIGHT_ATTRIBUTE]);

    const lineargradient = document.createElementNS(xmlns, "linearGradient");
    lineargradient.setAttributeNS(null, "id", "left-to-right");
                    

    const stop1 = document.createElementNS(xmlns, "stop");
    stop1.setAttributeNS(null, "offset", "0");
    stop1.setAttributeNS(null, "stop-color", attributes[ICON_COLOR_ATTRIBUTE]);
    const animate1 = document.createElementNS(xmlns, "animate");
    animate1.setAttributeNS(null, "dur", "0.15s");
    animate1.setAttributeNS(null, "attributeName", "offset");
    animate1.setAttributeNS(null, "fill", "freeze");
    animate1.setAttributeNS(null, "from", "0")
    animate1.setAttributeNS(null, "to", "1")
    animate1.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]}s;op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop1.appendChild(animate1)

    const stop2 = document.createElementNS(xmlns, "stop");
    stop2.setAttributeNS(null, "offset", "0");
    stop2.setAttributeNS(null, "stop-color", "transparent");
    const animate2 = document.createElementNS(xmlns, "animate");
    animate2.setAttributeNS(null, "dur", "0.15s");
    animate2.setAttributeNS(null, "attributeName", "offset");
    animate2.setAttributeNS(null, "fill", "freeze");
    animate2.setAttributeNS(null, "from", "0")
    animate2.setAttributeNS(null, "to", "1")
    animate2.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]};op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop2.appendChild(animate2)

    lineargradient.appendChild(stop1)
    lineargradient.appendChild(stop2)
            
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'd', attributes[ICON_SELECTION_ATTRIBUTE][ICON_PATH_ATTRIBUTE]);
    path.setAttributeNS(null, 'fill','url(#left-to-right)')
                    
    svgElem.appendChild(lineargradient);
    svgElem.appendChild(path)
    this.innerHTML=svgElem.outerHTML
  }
}
const customElementName = 'animated-icons'
customElements.define(customElementName, class extends SvgIcon {});
export const ANIMATED_ICON = customElementName;

export const animatedIconFunction = function  (attributes)
{
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", attributes[ICON_SELECTION_ATTRIBUTE][ICON_VIEWBOX_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "width", attributes[ICON_WIDTH_ATTRIBUTE]);
    svgElem.setAttributeNS(null, "height", attributes[ICON_HEIGHT_ATTRIBUTE]);

    const lineargradient = document.createElementNS(xmlns, "linearGradient");
    lineargradient.setAttributeNS(null, "id", "left-to-right");
                    

    const stop1 = document.createElementNS(xmlns, "stop");
    stop1.setAttributeNS(null, "offset", "0");
    stop1.setAttributeNS(null, "stop-color", attributes[ICON_COLOR_ATTRIBUTE]);
    const animate1 = document.createElementNS(xmlns, "animate");
    animate1.setAttributeNS(null, "dur", "0.15s");
    animate1.setAttributeNS(null, "attributeName", "offset");
    animate1.setAttributeNS(null, "fill", "freeze");
    animate1.setAttributeNS(null, "from", "0")
    animate1.setAttributeNS(null, "to", "1")
    animate1.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]}s;op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop1.appendChild(animate1)

    const stop2 = document.createElementNS(xmlns, "stop");
    stop2.setAttributeNS(null, "offset", "0");
    stop2.setAttributeNS(null, "stop-color", "transparent");
    const animate2 = document.createElementNS(xmlns, "animate");
    animate2.setAttributeNS(null, "dur", "0.15s");
    animate2.setAttributeNS(null, "attributeName", "offset");
    animate2.setAttributeNS(null, "fill", "freeze");
    animate2.setAttributeNS(null, "from", "0")
    animate2.setAttributeNS(null, "to", "1")
    animate2.setAttributeNS(null, "begin", `${attributes[ICON_ANIMATION_DURATION]};op.end+${attributes[ICON_ANIMATION_DURATION]}s`)

    stop2.appendChild(animate2)

    lineargradient.appendChild(stop1)
    lineargradient.appendChild(stop2)
            
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'd', attributes[ICON_SELECTION_ATTRIBUTE][ICON_PATH_ATTRIBUTE]);
    path.setAttributeNS(null, 'fill','url(#left-to-right)')
                    
    svgElem.appendChild(lineargradient);
    svgElem.appendChild(path)

    return svgElem;
}

