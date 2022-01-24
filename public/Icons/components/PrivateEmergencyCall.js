export default class SvgPrivateEmergencyCall extends HTMLElement {
                constructor() 
                {
                    super();
                }
                
connectedCallback() {
var colorFill = "#190F14"
if (this.getAttribute('color'))
{
  colorFill = this.getAttribute('color')
} 
                    var xmlns = "http://www.w3.org/2000/svg";
            
                    var svgElem = document.createElementNS(xmlns, "svg");
                    svgElem.setAttributeNS(null, "viewBox", "0 0 24 24");
                    svgElem.setAttributeNS(null, "width", "1em");
                    svgElem.setAttributeNS(null, "height", "1em");
            
                    var g = document.createElementNS(xmlns, "g");
                    g.setAttributeNS(null, 'fill', 'none');
                    g.setAttributeNS(null, 'fillRule', 'evenodd');
            
                    var path1 = document.createElementNS(xmlns, "path");
                    path1.setAttributeNS(null, 'd', "M0 0h24v24H0z");
                    path1.setAttributeNS(null, 'fill','none')
                    path1.setAttributeNS(null, 'fillOpacity','{0}')
            
                    var path2 = document.createElementNS(xmlns, "path");
                    path2.setAttributeNS(null, 'd', 'M17.238 22L4.373 9.172a1.26 1.26 0 010-1.79L8.733 3l3.036 3.016a1.264 1.264 0 010 1.797l-1.06 1.071 4.643 4.646 1.95-1.945 3.036 3.016a1.267 1.267 0 010 1.793l-1.403 1.394-.657-.66 1.403-1.393a.328.328 0 00.1-.239.331.331 0 00-.1-.238l-2.378-2.379-1.951 1.948-5.959-5.943 1.734-1.722a.347.347 0 00.1-.238.34.34 0 00-.1-.239L8.75 4.32 5.033 8.036a.347.347 0 00-.1.238.36.36 0 00.1.239L17.894 21.34l-.656.66z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'private-emergency-call-icon'
            customElements.define(customElementName, class extends SvgPrivateEmergencyCall {});
            export const PRIVATE_EMERGENCY_CALL_ICON = customElementName;
            