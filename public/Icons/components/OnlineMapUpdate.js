export default class SvgOnlineMapUpdate extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M20.654 18.474V7.68a2 2 0 00-1.091-1.791L14.74 3.383 9.126 6.24 3 3v14.111a2.017 2.017 0 001.057 1.778l5.074 2.748 5.529-3.086 5.374 2.963.415-.751-5.312-2.929V4.554L19.17 6.65c.389.196.632.596.628 1.031v10.794h.857zM9.511 7l4.758-2.42v13.203l-4.746 2.654L9.51 7zM3.857 17.111V4.423l4.809 2.554v13.429l-4.2-2.286a1.163 1.163 0 01-.609-1.009z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'online-map-update-icon'
            customElements.define(customElementName, class extends SvgOnlineMapUpdate {});
            export const ONLINE_MAP_UPDATE_ICON = customElementName;
            