export default class SvgAllwaysOnCall extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M16.654 6.5l.489.857H8.83c-.697 0-1.342.374-1.688.98l-3.377 5.897v5.972H5.49v-2.532H18.35V20.2h.394a1.343 1.343 0 001.34-1.343v-4.623l-2.957-5.163h.988l1.963 3.429h1.694v.857h-1.2l.369.643v4.857a2.2 2.2 0 01-2.197 2.206H17.5V18.53H6.357v2.526H2.91V14l.377-.643H2.057V12.5h1.714L6.4 7.909A2.809 2.809 0 018.831 6.5h7.823zm.015 6.854l-.82 2.506h-.903l.54-1.649H8.363l.54 1.649H8l-.82-2.506h9.489zm.377-11.165A3.634 3.634 0 0120.729 6h-.858a2.897 2.897 0 00-.808-2.146 2.857 2.857 0 00-2.017-.808zm0 1.637a2.366 2.366 0 011.383.665c.4.405.641.94.68 1.509h-.858a1.523 1.523 0 00-.428-.914 1.483 1.483 0 00-.777-.403z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "allways-on-call-icon"
customElements.define(customElementName, class extends SvgAllwaysOnCall {});
export const ALLWAYS_ON_CALL_ICON = customElementName;
