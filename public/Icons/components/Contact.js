export default class SvgContact extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M20.909 3.177v.806H5.496c-.829.002-1.5.673-1.502 1.502v14.64h4.769c-.304-1.438-.661-3.123-.954-4.3a1.526 1.526 0 01.269-1.343 1.752 1.752 0 011.4-.642h6.837v.806H9.477a.951.951 0 00-.763.33.73.73 0 00-.118.65c.314 1.229.685 3.007.997 4.495h5.118l.736-2.925v-.269h.806v.42l-.71 2.774h3.066a1.502 1.502 0 001.5-1.501V5.614h.805V18.62a2.31 2.31 0 01-2.305 2.307H3.189V5.485a2.31 2.31 0 012.307-2.308h15.413zm-6.894 3.197v.806H10.59c-.094 0-.094.016-.094.073v4.091h2.777a.175.175 0 00.183-.171v-2.94h.806v2.94a.983.983 0 01-.989.977H9.69V7.253a.852.852 0 01.9-.879h3.425z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "contact-icon"
customElements.define(customElementName, class extends SvgContact {});
export const CONTACT_ICON = customElementName;