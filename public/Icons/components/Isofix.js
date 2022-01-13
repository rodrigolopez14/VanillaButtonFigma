export default class SvgIsofix extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.044 12.24l-2.135.682-1.952-2.813-2.25.883a9.25 9.25 0 00-.48-1.969 2.531 2.531 0 10-2.85-3.282 4.92 4.92 0 00-1.968-.523H3l3.48 12.347h.874L4.114 6.062h2.28a4.38 4.38 0 013.058 1.564c1.443 1.687 1.859 4.5 1.24 8.347l-.115.706.672-.242c.031 0 3.043-1.074 4.781-.07.585.346.987.933 1.097 1.603l-.675 1.192H6.93l.236.844h9.77l1.067-1.887-.025-.135a4.34 4.34 0 00-.119-.492l2.793-1.688-2.607-3.563zM9.128 6.189a1.688 1.688 0 111.727 2.025 6.041 6.041 0 00-.76-1.125 5.344 5.344 0 00-.967-.9zm7.313 9.45c-1.527-.891-3.73-.483-4.81-.185.169-1.182.221-2.377.158-3.57l1.865-.728 1.915 2.76 2.146-.687 1.704 2.32-1.907 1.15a2.956 2.956 0 00-1.065-1.06h-.006z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'isofix-icon'
            customElements.define(customElementName, class extends SvgIsofix {});
            export const ISOFIX_ICON = customElementName;
            