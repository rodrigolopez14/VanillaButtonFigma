export default class SvgMinus extends HTMLElement {
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

        var polygon = document.createElementNS(xmlns, "polygon");
        polygon.setAttributeNS(null, 'points', "0 6 0 8 14 8 14 6");
        
        svgElem.appendChild(g);
        g.appendChild(g1);
        g1.appendChild(polygon)

        this.style.display ="flex"
        this.style.alignItems = "center"
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "minus-icon"
customElements.define(customElementName, class extends SvgMinus {});
export const MINUS_ICON = customElementName;
