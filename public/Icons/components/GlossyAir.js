export default class SvgGlossyAir extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.91 3.04a8.888 8.888 0 018.885 8.524 8.884 8.884 0 01-8.16 9.218v-.87a8.016 8.016 0 10-1.741-.033v.871A8.887 8.887 0 0111.91 3.04zm0 1.963c3.824 0 6.924 3.1 6.924 6.924a6.933 6.933 0 01-6.924 6.925 6.924 6.924 0 110-13.849zm5.092 10.19H6.821a6.05 6.05 0 005.089 2.788 6.05 6.05 0 005.092-2.787zm.883-4.206H5.938c-.052.312-.08.627-.081.943 0 .823.168 1.638.496 2.393H17.47a6.036 6.036 0 00.493-2.396 6.262 6.262 0 00-.078-.94zM11.91 5.874a6.059 6.059 0 00-5.775 4.242h11.552a6.065 6.065 0 00-5.777-4.242z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'glossy-air-icon'
            customElements.define(customElementName, class extends SvgGlossyAir {});
            export const GLOSSY_AIR_ICON = customElementName;
            