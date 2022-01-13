export default class SvgAntiThieftAlert extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M11.995 21.429l-5.879-3.915C4.79 16.59 4.004 15.11 4 13.531V3.883L11.995 2 20 3.883l-.02.99-7.985-1.866L5.027 4.66v8.885a3.882 3.882 0 001.681 3.174l5.287 3.508 5.297-3.527a3.878 3.878 0 001.66-3.168V7.965h-2.92l-3.955 8.988-3.804-5.285.846-.565 2.739 3.809 3.492-7.928h4.63v6.547c-.008 1.57-.79 3.042-2.106 3.964l-5.88 3.934z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "anti-thieft-alert-icon"
customElements.define(customElementName, class extends SvgAntiThieftAlert {});
export const ANTI_THIEFT_ALERT_ICON = customElementName;
