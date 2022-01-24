export default class SvgNavArrowThin extends HTMLElement {
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
        svgElem.setAttributeNS(null, "viewBox", "0 0 7 12");
        svgElem.setAttributeNS(null, "width", "6.2px");
        svgElem.setAttributeNS(null, "height", "11.19px");

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');

        var path = document.createElementNS(xmlns, "path");
        path.setAttributeNS(null, 'd', 'M5.8945,6.2348 C6.0955,6.0488 6.2015,5.8358 6.2015,5.6238 C6.2015,5.3958 6.0985,5.1798 5.9035,5.0008 L0.7805,-0.0002 L-0.0005,0.9058 L3.5215,4.2698 L4.8305,5.6128 L3.5285,6.9498 L0.0335,10.3498 L0.8345,11.1938 L5.8945,6.2348 Z');
        path.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
        g.appendChild(path);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}
var customElementName = "nav-arrow-thin-icon"
customElements.define(customElementName, class extends SvgNavArrowThin {});
export const NAV_ARROW_THIN_ICON = customElementName;

