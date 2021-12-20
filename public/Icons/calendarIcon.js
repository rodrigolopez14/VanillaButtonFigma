export default class vanillaCalendarIcon extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
        var xmlns = "http://www.w3.org/2000/svg";

        var svgElem = document.createElementNS(xmlns, "svg");
        svgElem.setAttributeNS(null, "viewBox", "0 0 20 21.818");
        svgElem.setAttributeNS(null, "width", "20px");
        svgElem.setAttributeNS(null, "height", "21.818px");

        var g = document.createElementNS(xmlns, "g");
        g.setAttributeNS(null, 'fill', 'none');
        g.setAttributeNS(null, 'fillRule', 'evenodd');

        var path1 = document.createElementNS(xmlns, "path");
        path1.setAttributeNS(null, 'd', "M0 0h24v24H0z");
        path1.setAttributeNS(null, 'fill','none')
        path1.setAttributeNS(null, 'fillOpacity','{0}')

        var path2 = document.createElementNS(xmlns, "path");
        path2.setAttributeNS(null, 'd', "M5,2V1A1,1,0,0,1,7,1V2h6V1a1,1,0,0,1,2,0V2h2a3,3,0,0,1,3,3V18.84a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V5A3,3,0,0,1,3,2ZM5,4H3A1,1,0,0,0,2,5v3H18V5a1,1,0,0,0-1-1H15V5a1,1,0,0,1-2,0V4H7V5A1,1,0,0,1,5,5ZM18,9.92H2v8.92a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1Z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "calendar-icon"
customElements.define(customElementName, class extends vanillaCalendarIcon {});
export const CALENDAR_ICON = customElementName;
