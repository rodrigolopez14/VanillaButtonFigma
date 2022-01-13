export default class SvgMultipointCheck extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.8 20.64a8.832 8.832 0 008.823-8.823 8.74 8.74 0 00-1.921-5.494l-.428.914a7.829 7.829 0 011.475 4.58 7.935 7.935 0 11-3.818-6.787l-4.205 8.982-2.573-3.694-.726.508 3.464 4.954 5.17-11.066-.313-.21A8.82 8.82 0 1011.8 20.64z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'multipoint-check-icon'
            customElements.define(customElementName, class extends SvgMultipointCheck {});
            export const MULTIPOINT_CHECK_ICON = customElementName;
            