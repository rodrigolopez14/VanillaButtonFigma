export default class SvgAdaptativeChassis extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M8.244 15.512v2.117h7.411v-2.117h3.177v5.294h-3.177v-2.118H8.244v2.118H5.067v-5.294h3.177zm-1.06 1.059H6.127v3.176h1.059v-3.176zm10.589 0h-1.059v3.176h1.059v-3.176zM8.243 3.33V5.45h7.412V3.332h3.173v5.294h-3.176V6.508h-3.124v8.944H11.47V6.508H8.244v2.118H5.067V3.332h3.177zm-1.058 1.06h-1.06v3.176h1.06V4.391zm10.588 0h-1.059v3.176h1.059V4.391z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "adaptative-chassis-icon"
customElements.define(customElementName, class extends SvgAdaptativeChassis {});
export const ADAPTATIVE_CHASSIS_ICON = customElementName;
