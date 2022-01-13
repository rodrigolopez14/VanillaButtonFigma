export default class SvgNavArrow extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
        var xmlns = "http://www.w3.org/2000/svg";

        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 7 12");
        svgElem.setAttributeNS(null, "width", "7px");
        svgElem.setAttributeNS(null, "height", "12px");

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');

        var path = document.createElementNS(xmlns, "path");
        path.setAttributeNS(null, 'd', 'M4.66971 5.9997L3.64017 4.94287L0.151868 1.54997C-0.0194247 1.40052 -0.0622478 1.16567 0.109045 1.01622L0.944096 0.142643C1.11539 -0.0281582 1.30809 -0.0495083 1.45797 0.0999428L6.57177 5.09232C6.85012 5.34852 7 5.66877 7 6.01038C7 6.33063 6.85012 6.65088 6.57177 6.90708L1.45797 11.8995C1.30809 12.0489 1.11539 12.0293 0.944096 11.8568L0.109045 10.9832C-0.0622478 10.8337 -0.0194247 10.5989 0.151868 10.4494L3.64017 7.05653L4.66971 5.9997Z');
        path.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
        g.appendChild(path);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}
var customElementName = "nav-arrow-icon"
customElements.define(customElementName, class extends SvgNavArrow {});
export const NAV_ARROW_ICON = customElementName;