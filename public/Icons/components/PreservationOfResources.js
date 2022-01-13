export default class SvgPreservationOfResources extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.915 11.817V9.224L11.61 2 6.76 8.525l-.024.03a2.783 2.783 0 00-.448 1.496v1.766H2l.597.824 4.508 6.101h3.993v2.966h1.017V9.441h-1.017v8.284H7.62l-3.606-4.891h3.291V10.05c0-.33.092-.653.268-.932l4.02-5.424 4.305 5.86v3.279h3.305l-2.996 4.068c-.385.52-.994.825-1.64.823v1.017c.969.001 1.881-.46 2.457-1.24l4.18-5.685h-4.289z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'preservation-of-resources-icon'
            customElements.define(customElementName, class extends SvgPreservationOfResources {});
            export const PRESERVATION_OF_RESOURCES_ICON = customElementName;
            