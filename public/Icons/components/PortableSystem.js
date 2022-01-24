export default class SvgPortableSystem extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.4 5.088c.462 0 .905.183 1.231.509.344.35.536.822.532 1.313v2.956l3.878 1.014c.969.5.834 1.59.762 2.18-.06.483-.151.9-.263 1.429l-.624 2.407H15.9l.68-2.627c.11-.512.193-.893.245-1.333.08-.647.07-1.008-.216-1.17l-.05-.019-4.38-1.116V6.91a.854.854 0 00-.246-.628.736.736 0 00-.532-.22h-.2v8.038h-.985v-2.544H8.75v2.758c0 .847 1.205 2.614 3.067 4.541h4.778l.059 3.94h-4.532c-.629 0-1.232-.251-1.674-.699a2.413 2.413 0 01-.713-1.724V18.86h.73c-1.258-1.385-2.7-3.254-2.7-4.547v-2.805a.942.942 0 01.942-.935h1.508V5.088zm4.223 14.76H10.72v.525c-.005.387.145.76.417 1.034.26.265.615.413.985.41h3.53l-.03-1.97zM11.54 1.325a4.433 4.433 0 014.433 4.433c0 .801-.219 1.587-.634 2.272h-1.198a3.448 3.448 0 10-5.172 0H7.745a4.387 4.387 0 01-.637-2.272 4.433 4.433 0 014.433-4.433z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'portable-system-icon'
            customElements.define(customElementName, class extends SvgPortableSystem {});
            export const PORTABLE_SYSTEM_ICON = customElementName;
            