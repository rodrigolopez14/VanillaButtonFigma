export default class SvgHeart extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.315 4a5.236 5.236 0 00-5.246 5.839h.981a4.297 4.297 0 118.391.622c-.82 2.945-6.312 7.334-7.651 8.368-1.335-1.038-6.824-5.433-7.648-8.375a4.297 4.297 0 016.408-4.82l.52-.832a5.285 5.285 0 00-7.874 5.917c1.024 3.659 8.008 8.899 8.306 9.118l.291.22.295-.22c.298-.22 7.282-5.459 8.316-9.115A5.285 5.285 0 0015.314 4z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'heart-icon'
            customElements.define(customElementName, class extends SvgHeart {});
            export const HEART_ICON = customElementName;
            