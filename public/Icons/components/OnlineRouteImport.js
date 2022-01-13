export default class SvgOnlineRouteImport extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M19.975 3.18v2.577h-2.988v2.306h-5.184a1.937 1.937 0 00-1.935 1.934 1.891 1.891 0 001.889 1.935h7.04a3.094 3.094 0 013.15 3.038c0 1.668-1.436 3.038-3.198 3.038H5.825l1.626-2.785a2.41 2.41 0 10-4.532-1.14c.01.4.11.793.291 1.15l2.117 3.638.273-.474.663.388-.939 1.602-2.785-4.81a3.415 3.415 0 01-.374-1.493 3.177 3.177 0 115.967 1.519l-.96 1.648h11.57c1.326 0 2.438-1.033 2.438-2.259a2.327 2.327 0 00-2.383-2.26h-7.04a2.65 2.65 0 01-2.656-2.724 2.706 2.706 0 012.702-2.704h4.417V3.18h3.755zM5.83 12.82a1.311 1.311 0 11-1.007 2.421A1.311 1.311 0 015.83 12.82zm-.503.661a.552.552 0 100 1.104.552.552 0 000-1.104zm13.868-9.534h-2.208v1.045h2.208V3.947z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'online-route-import-icon'
            customElements.define(customElementName, class extends SvgOnlineRouteImport {});
            export const ONLINE_ROUTE_IMPORT_ICON = customElementName;
            