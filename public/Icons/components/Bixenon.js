export default class SvgBixenon extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M16.98 17.443a3.279 3.279 0 01-.865-.128l-4.361-1.23.227-.8 4.356 1.23c.515.141.913.13 1.182-.03.269-.161.457-.502.576-1.036l1.385-7.134L3.3 14.552l-.3-.776L20.585 7l-1.676 8.629c-.177.78-.49 1.293-.96 1.578a1.86 1.86 0 01-.97.236z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "bixenon-icon"
customElements.define(customElementName, class extends SvgBixenon {});
export const BIXENON_ICON = customElementName;

