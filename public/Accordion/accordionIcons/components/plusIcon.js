export default class SvgPlus extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
        var colorFill = '#190F14'
        var width = "14px"
        var height = "14px"
        if (this.getAttribute('color'))
        {
            colorFill = this.getAttribute('color')
        } 
        if (this.getAttribute('width'))
        {
            width = this.getAttribute('width')
        } 
        if (this.getAttribute('height'))
        {
            height = this.getAttribute('height')
        } 
        var xmlns = "http://www.w3.org/2000/svg";

        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 14 14");
        svgElem.setAttributeNS(null, "width", width);
        svgElem.setAttributeNS(null, "height", height);

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');
        g.setAttributeNS(null, 'stroke', 'none');
        g.setAttributeNS(null, 'strokeWidth', '1');

        var g1 = document.createElementNS(xmlns, "g");
        g1.setAttributeNS(null, 'fill', colorFill);
        g1.setAttributeNS(null, 'transform', 'translate(-5.000000, -5.000000)');

        var polygon = document.createElementNS(xmlns, "polygon");
        polygon.setAttributeNS(null, 'points', "19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11");
        
        svgElem.appendChild(g);
        g.appendChild(g1);
        g1.appendChild(polygon)
        this.style.display ="flex"
        this.style.allignItems = "center"
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "plus-icon"
customElements.define(customElementName, class extends SvgPlus {});
export const PLUS_ICON = customElementName;
