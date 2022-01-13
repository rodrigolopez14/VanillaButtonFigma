export default class SvgTrafficSign extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.056 3.121c4.936.002 8.937 4 8.944 8.935a8.935 8.935 0 11-8.944-8.935zm.012.885a8.05 8.05 0 00-.012 16.1c4.45.009 8.059-3.6 8.059-8.05a8.05 8.05 0 00-8.047-8.05zm6.344 6.291v3.541H5.724v-3.54h12.688zm-.885.886H6.609v1.77h10.918v-1.77z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'traffic-sign-icon'
            customElements.define(customElementName, class extends SvgTrafficSign {});
            export const TRAFFIC_SIGN_ICON = customElementName;
            