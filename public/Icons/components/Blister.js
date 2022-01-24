export default class SvgBlister extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M.191 12.667c1.4.034 2.759.11 4.135.207 1.37.11 2.74.237 4.113.383 1.37.152 2.723.35 4.08.565 1.358.215 2.707.486 4.047.79a67.441 67.441 0 00-4.077-.565 87.158 87.158 0 00-4.095-.335 98.423 98.423 0 00-4.107-.155 87.596 87.596 0 00-4.096.022zm23.727-2.603l.01.911a194.041 194.041 0 00-7.754.049c-2.591.067-5.173.185-7.756.392 2.564-.356 5.144-.632 7.729-.848 2.585-.216 5.17-.389 7.771-.504z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "blister-icon"
customElements.define(customElementName, class extends SvgBlister {});
export const BLISTER_ICON = customElementName;