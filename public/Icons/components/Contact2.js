export default class SvgContact2 extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
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
        path2.setAttributeNS(null, 'd', "M11.915 3.022a8.905 8.905 0 018.897 8.893 8.896 8.896 0 11-8.897-8.893zm0 .815a8.078 8.078 0 000 16.157 8.086 8.086 0 008.079-8.079 8.078 8.078 0 00-8.079-8.078zm.03 6.098a1.81 1.81 0 011.809 1.792v5.728h-.819v-5.722a.993.993 0 00-.99-.99H10.91v4.909a.99.99 0 00.976.984h.41v.819h-.41a1.81 1.81 0 01-1.794-1.792V9.935zm.006-3.572a1.364 1.364 0 110 2.727 1.364 1.364 0 010-2.727zm0 .818v.01a.545.545 0 00-.546.535.545.545 0 10.546-.545z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "contact2-icon"
customElements.define(customElementName, class extends SvgContact2 {});
export const CONTACT2_ICON = customElementName;


