export default class SvgEuroncap extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.926 3a8.926 8.926 0 108.927 8.923v-.442h-8.484V3.906a8.08 8.08 0 017.297 5.863h.91A8.976 8.976 0 0011.925 3zm-.442.885v2.379C7.276 6.52 6.41 10.212 6.22 11.48H3.9a8.05 8.05 0 017.584-7.584v-.012zM3.9 12.355h7.584v7.583A8.047 8.047 0 013.9 12.366v-.012zm8.47 7.583v-2.37c4.207-.242 5.086-3.93 5.255-5.202h2.33a8.053 8.053 0 01-7.586 7.584v-.012zm4.37-7.572a6.37 6.37 0 01-.632 1.96c-.764 1.451-2.024 2.242-3.745 2.36v-4.32h4.376zm-9.638-.885a6.332 6.332 0 01.634-1.96c.765-1.454 2.022-2.242 3.742-2.36v4.32H7.102z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'euroncap-icon'
            customElements.define(customElementName, class extends SvgEuroncap {});
            export const EURONCAP_ICON = customElementName;
            