export default class SvgBicycleRack extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M10.695 6.145v.923H8.923L8.53 8.542h8V7.505h-.683v-.923h2.194v.923h-.588v1.433l.77 1.594a4.11 4.11 0 011.378-.243 4.148 4.148 0 11-4.123 4.594H13.72L8.21 9.815l-.188.73a4.16 4.16 0 11-.896-.219L8.2 6.145h2.495zM1.963 9.022a1.886 1.886 0 011.886 1.901h-.923a.972.972 0 10-1.941 0v7.625H.062v-7.625a1.886 1.886 0 011.883-1.901zm4.95 2.156h-.307a3.262 3.262 0 101.206.231l-.87 3.385-.896-.23.868-3.386zm12.687 0c-.336.001-.67.053-.99.154l1.713 3.542h-3.95a3.268 3.268 0 003.227 2.818 3.234 3.234 0 002.825-1.621 3.262 3.262 0 00-2.825-4.893zm-2.63-1.2L14.802 14h.674a4.157 4.157 0 011.945-3.098l-.453-.924zm.84 1.739A3.28 3.28 0 0016.371 14h2.539zm-1.57-2.252H9.142l4.744 4.363 2.354-4.363z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "bicycle-rack-icon"
customElements.define(customElementName, class extends SvgBicycleRack {});

export const BICYCLE_RACK_ICON = customElementName;

