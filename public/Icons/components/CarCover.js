export default class SvgCarCover extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M16.78 7.231l.459.806H9.424c-.656 0-1.261.35-1.588.92L4.66 14.503v5.615h1.623v-2.38h12.09v2.374h.37a1.263 1.263 0 001.26-1.262v-4.347l-2.78-4.855h.93l1.845 3.224h1.593v.806h-1.128l.346.605v4.567a2.069 2.069 0 01-2.066 2.074h-1.168v-2.38H7.097v2.374H3.854v-6.635l.355-.605H3.054v-.806h1.612l2.471-4.317A2.64 2.64 0 019.424 7.23h7.355zm.013 6.443l-.771 2.359h-.85l.509-1.553H8.983l.508 1.553h-.85l-.77-2.36h8.922zm4.42-10.494v4.027h-.807V3.986h-16.1v3.221H3.5V3.18h17.712z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "car-cover-icon"
customElements.define(customElementName, class extends SvgCarCover {});
export const CAR_COVER_ICON = customElementName;


