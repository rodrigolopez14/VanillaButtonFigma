export default class SvgConnectedApp extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M7.714 2.054l.163.003h9.32v.857h-9.32a.857.857 0 00-.966.96v.755h10.286V19.66a2.094 2.094 0 01-2.077 2.106H6.054V3.874a1.714 1.714 0 011.823-1.817zm8.626 16.289H6.911v2.571h8.209c.328-.01.64-.143.87-.378.229-.235.355-.551.35-.879v-1.314zm-4.757.677a.597.597 0 11.006 1.194.597.597 0 01-.006-1.194zM16.34 5.486H6.911v12h9.429v-12z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "connected-app-icon"
customElements.define(customElementName, class extends SvgConnectedApp {});
export const CONNECTED_APP_ICON = customElementName;
