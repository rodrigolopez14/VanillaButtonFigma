export default class SvgHeadlights extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.887 6.55V6L5.591 10.296 2 17.252l12.426-2.727 4.215.472a2.446 2.446 0 002.608-1.739c.398-1.514.603-3.072.612-4.638l-.87.247c-.015 1.4-.2 2.793-.553 4.147a1.586 1.586 0 01-1.699 1.12l-4.348-.473-10.765 2.36 2.568-4.983 14.823-3.916.87-.24V6.55z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'headlights-icon'
            customElements.define(customElementName, class extends SvgHeadlights {});
            export const HEADLIGHTS_ICON = customElementName;
            