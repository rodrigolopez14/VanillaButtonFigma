export default class SvgSafetyTransport extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.783 2L4 3.913V9.06h1V4.683l6.783-1.666 6.784 1.666v8.967a3.957 3.957 0 01-1.627 3.197l-5.157 3.56-5.146-3.554A3.967 3.967 0 015 13.65v-1.373h8.573l-1.83 1.9.72.693 3-3.103-3.053-3-.703.71 1.836 1.813H4v2.373a4.973 4.973 0 002.06 4.02l5.723 3.937 5.734-3.957a4.97 4.97 0 002.05-4v-9.75L11.783 2z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'safety-transport-icon'
            customElements.define(customElementName, class extends SvgSafetyTransport {});
            export const SAFETY_TRANSPORT_ICON = customElementName;
            