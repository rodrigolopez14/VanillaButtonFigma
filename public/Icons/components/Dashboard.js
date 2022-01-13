export default class SvgDashboard extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.831 9.42a9.971 9.971 0 00-4.828-2.269v.858a9.103 9.103 0 014.263 2.042 7.263 7.263 0 012.571 5.512v.857h-6.451a2.143 2.143 0 00-4.2 0H2.857v-.857c0-3.46 3.48-7.289 8.572-7.68v5.411h.857V7C7.429 7 2 10.523 2 15.571v1.715h9v-.423a1.286 1.286 0 012.571 0v.428h8.14v-1.714a8.111 8.111 0 00-2.88-6.157z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'dashboard-icon'
            customElements.define(customElementName, class extends SvgDashboard {});
            export const DASHBOARD_ICON = customElementName;
            