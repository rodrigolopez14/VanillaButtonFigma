export default class SvgBoardComputer extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M19.725 13.308V6H6.003A3.007 3.007 0 003 9.003v7.78h9.472V15.8H3.984v-1.384l3.944-3.373 6.482 2.177v6.6l3.583-3.328 4.81-.879-3.078-2.305zM3.987 9.003a2.023 2.023 0 012.02-2.02h5.137l-7.16 6.138.003-4.118zM8.8 10.292l3.856-3.308h6.085v5.59L14.407 9.33v2.846L8.8 10.292zm8.734 5.282l-2.14 1.99v-6.266l5.016 3.751-2.876.525z");
		path2.setAttributeNS(null, 'fill','#190F14')

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "board-computer-icon"
customElements.define(customElementName, class extends SvgBoardComputer {});
export const BOARD_COMPUTER_ICON = customElementName;
