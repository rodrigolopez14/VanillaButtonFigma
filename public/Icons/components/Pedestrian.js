export default class SvgPedestrian extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.885 10.315v3.54c.017.315.146.615.364.844l2.13 1.835 1.265 4.537h1.37l-.009.822h-1.983l-1.37-4.898-1.98-1.713a2.148 2.148 0 01-.601-1.315l-.008-.186v-3.466h.822zm-1.748 5.964l.666.48-2.433 3.378.986.78a.422.422 0 00.274.094l-.03.822a1.225 1.225 0 01-.759-.274l-1.605-1.266 2.901-4.014zm.578-8.613l1.45.274c.7.127 1.228.707 1.29 1.416l.413 2.926 2.228-.296.11.822-3.036.406-.532-3.737a.767.767 0 00-.622-.718l-.906-.184-2.655 4.11-.69-.444 2.95-4.575zM11.773 2.2l2.643.274c.213.013.41.112.548.274a.773.773 0 01.168.58l-.411 3.908-2.872-.304a.868.868 0 01-.775-.946l.238-2.276.822.085L11.9 6.07c0 .017 0 .039.04.041l2.056.214.312-3.03-2.62-.274.086-.822z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'pedestrian-icon'
            customElements.define(customElementName, class extends SvgPedestrian {});
            export const PEDESTRIAN_ICON = customElementName;
            