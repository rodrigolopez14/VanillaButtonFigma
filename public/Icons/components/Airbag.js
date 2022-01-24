export default class SvgAirbag extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M12.54 8.377l5.588.57-.09.87-4.928-.504-1.591 4.101 2.206 2.258a.354.354 0 000-.095c-.053-.534.739-2.852 1.08-3.861l.027-.244.87.093-.032.392-.141.404-.14.412c-.415 1.24-.777 2.469-.777 2.723a1.55 1.55 0 01-.174.887l1.855 1.898-.623.606-1.841-1.884a1.472 1.472 0 01-.87.174l-3.133-.316-1.643 5.078-2.03-.206a1.496 1.496 0 01-1.254-2l2.029-6.704 3.59.368.12-.113 1.901-4.907zm-5 5.582L5.715 20a.632.632 0 00.522.87l1.319.133 1.655-5.09 3.829.397h.092l-1.974-2.006v.035l-3.62-.38zM6.837 2.328a4.696 4.696 0 110 9.39 4.696 4.696 0 010-9.39zm2.71 1.99a3.826 3.826 0 10-5.414 5.41 3.826 3.826 0 005.413-5.41zm11.271.697l.567.66-2.794 2.401-.567-.66 2.794-2.4zm-5.708-2.74a2.391 2.391 0 111.39 4.576 2.391 2.391 0 01-1.39-4.576zm.85.776a1.522 1.522 0 10-.31 3.027 1.522 1.522 0 00.31-3.027z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "airbag-icon"
customElements.define(customElementName, class extends SvgAirbag {});
export const AIRBAG_ICON = customElementName;
