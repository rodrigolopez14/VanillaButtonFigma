export default class SvgParkingSensor extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.305 4.172a8.854 8.854 0 01-.017 16.366v-.92a8.01 8.01 0 00.017-14.524zM8.54 4.163v.923a8.01 8.01 0 000 14.532v.92a8.854 8.854 0 010-16.375zm3.372 1.5a6.688 6.688 0 110 13.375 6.688 6.688 0 010-13.376zm0 .846a5.844 5.844 0 100 11.688 5.844 5.844 0 000-11.688zm1.08 2.497a1.918 1.918 0 110 3.836H10.65v2.883h-.844V9.006h3.187zm.003.841H10.65v2.149h2.346a1.077 1.077 0 100-2.149z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'parking-sensor-icon'
            customElements.define(customElementName, class extends SvgParkingSensor {});
            export const PARKING_SENSOR_ICON = customElementName;
            