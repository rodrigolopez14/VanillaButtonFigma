export default class SvgClimateProtection extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M16.781 8.925c-.34-.001-.68.035-1.012.108a5.781 5.781 0 00-10.283.215l.857.42a4.829 4.829 0 018.737.12l.174.384.4-.124a3.81 3.81 0 111.127 7.45L5.946 17.5a2.997 2.997 0 112.911-3.705l.927-.225a3.95 3.95 0 10-3.838 4.892h10.835a4.762 4.762 0 000-9.524v-.012z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "climate-protection-icon"
customElements.define(customElementName, class extends SvgClimateProtection {});
export const CLIMATE_PROTECTION_ICON = customElementName;