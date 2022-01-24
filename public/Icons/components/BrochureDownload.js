export default class SvgBrochureDownload extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M18.252 4.228v.806H5.356a1.386 1.386 0 00-1.383 1.384v.422c.43-.35.97-.54 1.526-.538h15.044v.033h.4v11.21a2.262 2.262 0 01-2.329 2.185H3.16V6.418a2.19 2.19 0 012.186-2.19h12.907zm1.888 12.17H3.962v2.529h14.793a1.459 1.459 0 001.385-1.381v-1.147zm0-9.298H5.488a1.596 1.596 0 00-1.091.417 1.314 1.314 0 00-.435.967v7.106H20.14V7.1zm-7.495 1.44v4.36l1.461-1.48.575.567-2.431 2.461-2.501-2.407.558-.58 1.532 1.475V8.54h.806z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "brochure-download-icon"
customElements.define(customElementName, class extends SvgBrochureDownload {});
export const BROCHURE_DOWNLOAD_ICON = customElementName;




