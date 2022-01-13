export default class SvgComfort extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M17.785 17.212h-5.982l.721-2.336-5.403-6.97.24-1.097L6.094 2H3v5.897l4.203 10.467.845-.355L3.91 7.721V2.91h1.485l1.03 3.94-.285 1.3 5.376 6.912-.942 3.06h7.212a2.097 2.097 0 012.082 2.097v.679H8.087l.37.91h12.319v-1.589a3.006 3.006 0 00-2.991-3.006z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "comfort-icon"
customElements.define(customElementName, class extends SvgComfort {});
export const COMFORT_ICON = customElementName;

