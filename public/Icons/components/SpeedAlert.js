export default class SvgSpeedAlert extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.18 15.65a1.355 1.355 0 11.006 2.71 1.355 1.355 0 01-.007-2.71zm.003.896a.46.46 0 10-.002.92.46.46 0 00.002-.92zm9.14-4.886a9.82 9.82 0 01.596 3.39v1.266h-.895v-1.274a8.934 8.934 0 00-.543-3.084zm-9.266-6.472a9.85 9.85 0 017.52 3.478l.238.28-4.699 5.905-.698-.547 4.233-5.33A8.955 8.955 0 003.1 15.05v1.236h-.895v-1.248c.013-5.435 4.416-9.838 9.85-9.85zm1.707 2.669v.895h-1.886a.328.328 0 00-.326.352l.358 4.672h.538l.298-3.185.896.08-.37 4H11.08l-.424-5.492a1.224 1.224 0 011.22-1.322h1.887z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'speed-alert-icon'
            customElements.define(customElementName, class extends SvgSpeedAlert {});
            export const SPEED_ALERT_ICON = customElementName;
            