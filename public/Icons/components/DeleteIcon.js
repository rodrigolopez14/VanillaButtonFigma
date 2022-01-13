export default class SvgdDeleteIcon extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
        var xmlns = "http://www.w3.org/2000/svg";

        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 19.96 25.07");
        svgElem.setAttributeNS(null, "width", "19.96px");
        svgElem.setAttributeNS(null, "height", "25.07px");

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');

        var path = document.createElementNS(xmlns, "path");
        path.setAttributeNS(null, 'd', "M18.89,6.54,17.58,22.73a2.55,2.55,0,0,1-2.53,2.34H4.91a2.55,2.55,0,0,1-2.53-2.34h0L1.28,9.14h2L4.35,22.57a.57.57,0,0,0,.56.52H15.05a.57.57,0,0,0,.56-.52h0l1.3-16ZM12.1,9.64l2,.1-.53,11.34-2-.1Zm-4,0,.64,11.3-2,.11L6.09,9.75ZM18.22,3a1.65,1.65,0,0,1,1.51.59A2.11,2.11,0,0,1,20,4.79h0V5L0,5.12V4.7a1.87,1.87,0,0,1,.22-1,1.65,1.65,0,0,1,1.5-.6h0ZM12.34,0a1.53,1.53,0,0,1,1.42.57A2.05,2.05,0,0,1,14,1.73h0V2L6.4,2V1.55A1.71,1.71,0,0,1,6.61.6,1.52,1.52,0,0,1,8,0H8Z");
        path.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
        g.appendChild(path);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}
var customElementName = "delete-icon"
customElements.define(customElementName, class extends SvgdDeleteIcon {});
export const DELETE_ICON = customElementName;
