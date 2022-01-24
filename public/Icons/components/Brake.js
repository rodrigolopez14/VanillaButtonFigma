export default class SvgBrake extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M13.296 3.278v1.5a8.044 8.044 0 11-8.198 10.331h1.037a7.06 7.06 0 107.174-9.344v1.61h-.49a5.436 5.436 0 00-5.443 5.443v.491H3.278v-.49a9.537 9.537 0 019.54-9.54h.478zM10.92 10.92a2.66 2.66 0 113.763 3.763 2.66 2.66 0 01-3.763-3.763zm3.062.684A1.679 1.679 0 1011.628 14a1.679 1.679 0 002.354-2.395zm-1.668-7.33a8.555 8.555 0 00-8.04 8.03h2.15a6.418 6.418 0 015.89-5.89z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "brake-icon"
customElements.define(customElementName, class extends SvgBrake {});
export const BRAKE_ICON = customElementName;


