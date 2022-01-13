export default class SvgFuel extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.834 19.943L7.852 5.946a3.228 3.228 0 00-4.566 0L2 7.23l.652.653 1.286-1.284a2.31 2.31 0 013.262 0l2.243 2.24-2.988 2.985 4.923 4.923a2.034 2.034 0 002.88 0l.465-.464-.655-.647-.465.465a1.11 1.11 0 01-1.575 0l-4.265-4.277 2.332-2.341 5.379 5.39 5.055 5.071h1.305z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'fuel-icon'
            customElements.define(customElementName, class extends SvgFuel {});
            export const FUEL_ICON = customElementName;
            