export default class SvgChat extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M19.66 9.466a2.269 2.269 0 012.265 2.265v9.415H12.51a2.269 2.269 0 01-2.265-2.265v-6.75h.895v6.75a1.373 1.373 0 001.37 1.37h8.52v-8.52a1.373 1.373 0 00-1.37-1.37h-9.382v-.895h9.382zm-.442 8.062v.896h-6.26v-.896h6.26zm0-2.704v.895h-6.26v-.895h6.26zM11.606 3.179a2.269 2.269 0 012.266 2.266v3.107h-.896V5.445a1.373 1.373 0 00-1.37-1.37h-8.52v8.519a1.373 1.373 0 001.37 1.37h4.926v.896H4.457a2.269 2.269 0 01-2.266-2.266V3.179h9.415zm7.612 8.95v.895h-6.26v-.896h6.26z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "chat-icon"
customElements.define(customElementName, class extends SvgChat {});
export const CHAT_ICON = customElementName;