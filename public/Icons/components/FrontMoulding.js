export default class SvgFrontMoulding extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.643 5.163l.5.86H8.83c-.697 0-1.34.373-1.688.977l-3.377 5.897v5.972H5.49v-2.532H18.35v2.532h.394a1.343 1.343 0 001.34-1.343v-4.629l-2.957-5.163h.988l1.963 3.429h1.694v.857h-1.2l.369.649v4.857a2.2 2.2 0 01-2.197 2.2H17.5v-2.532H6.357v2.532H2.914v-7.057l.372-.649H2.057v-.857h1.714L6.4 6.57a2.809 2.809 0 012.431-1.408h7.812zm2.511 9.868v.858H4.606v-.858h14.548zm-2.485-3.017l-.82 2.509h-.903l.54-1.652H8.363l.54 1.652H8l-.82-2.509h9.489z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-moulding-icon'
            customElements.define(customElementName, class extends SvgFrontMoulding {});
            export const FRONT_MOULDING_ICON = customElementName;
            