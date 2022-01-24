export default class SvgBrochure extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M5.414 6.21a2.485 2.485 0 00-1.529.514v-.458a1.384 1.384 0 011.384-1.38h13.668V4H5.27A2.272 2.272 0 003 6.266v13.66h15.285a2.36 2.36 0 002.414-2.267V6.21H5.414zM4.322 7.511c.298-.271.688-.42 1.092-.416h14.4v8.413H3.879V8.476c.005-.37.166-.72.443-.965zm13.963 11.53h-14.4v-2.656H19.82v1.274a1.475 1.475 0 01-1.535 1.381z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "brochure-icon"
customElements.define(customElementName, class extends SvgBrochure {});
export const BROCHURE_ICON = customElementName;


