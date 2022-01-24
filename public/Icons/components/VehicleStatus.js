export default class SvgVehicleStatus extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.643 5.2l.5.857H8.83c-.697 0-1.342.374-1.688.98l-3.377 5.897v5.972H5.49v-2.532H18.35v2.54h.394a1.343 1.343 0 001.34-1.343v-4.637l-2.957-5.163h.988l1.963 3.429h1.694v.857h-1.2l.369.657v4.857a2.2 2.2 0 01-2.197 2.192H17.5V17.23H6.357v2.54H2.91v-7.057l.377-.657H2.057V11.2h1.714L6.4 6.609A2.809 2.809 0 018.831 5.2h7.812zm.026 6.854l-.82 2.506h-.903l.54-1.649H8.363l.54 1.649H8l-.82-2.506h9.489z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'vehicle-status-icon'
            customElements.define(customElementName, class extends SvgVehicleStatus {});
            export const VEHICLE_STATUS_ICON = customElementName;
            