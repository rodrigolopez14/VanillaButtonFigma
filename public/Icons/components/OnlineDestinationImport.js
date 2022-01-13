export default class SvgOnlineDestinationImport extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M20.94 4.175v.806H4.88a1.059 1.059 0 00-.907 1.002v9.502h16.186l-.019-8.892h.806V16.98a1.79 1.79 0 01-1.558 1.72h-6.934v.806h2.816v.806H8.822v-.806h2.826V18.7h-8.47V6.087A1.88 1.88 0 014.82 4.175h16.12zM3.97 16.283v1.612h15.343c.515-.101.87-.576.822-1.099v-.505L3.97 16.283zm8.076.473a.406.406 0 110 .811.406.406 0 010-.811zM11.203 6.53a2.8 2.8 0 013.435 3.962l-1.096 1.897-.696-.406 1.107-1.899a1.993 1.993 0 10-3.761-.938c.01.332.093.657.244.952l1.747 3.006.464.806-.464.806-2.467-4.245a2.996 2.996 0 01-.335-1.322 2.8 2.8 0 011.822-2.62zm.977 1.389a1.2 1.2 0 110 2.401 1.2 1.2 0 010-2.401zm.151.836a.395.395 0 10-.302.73.395.395 0 00.302-.73z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'online-destination-import-icon'
            customElements.define(customElementName, class extends SvgOnlineDestinationImport {});
            export const ONLINE_DESTINATION_IMPORT_ICON = customElementName;
            