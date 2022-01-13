export default class SvgCustomCare extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21 9.53h-1.056V4H7.324a3.321 3.321 0 00-3.321 3.321v2.222H3v6.117h2.932v5.274h9.3v-.996H6.928V7.73c0-.413.334-.748.747-.748h9.355v10.495H14.13V16.4H9.83v2.81h4.298v-.738h3.952a1.863 1.863 0 001.863-1.863v-.95H21V9.53zm-7.868 8.684h-2.304v-.817h2.304v.817zm-9.136-3.55v-4.138h1.936v4.138H3.996zm3.68-8.678A1.747 1.747 0 005.932 7.73v1.8H5.02V7.308a2.325 2.325 0 012.325-2.325h11.624V9.53h-.94V5.986H7.676zm11.272 10.627a.867.867 0 01-.867.864h-.053V15.66h.92v.953zm1.056-1.946H18.01v-4.141h1.993v4.141z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'custom-care-icon'
            customElements.define(customElementName, class extends SvgCustomCare {});
            export const CUSTOM_CARE_ICON = customElementName;
            