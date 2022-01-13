export default class SvgMyDestinations extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.876 2a6.649 6.649 0 016.64 6.636 6.57 6.57 0 01-.483 2.485c-.365.904-1.318 2.626-2.348 4.395l-.518.885-.346.584h-1.057c1.375-2.297 2.951-5.021 3.427-6.197a5.73 5.73 0 10-10.627 0c.739 1.818 4.154 7.424 5.312 9.3.203-.327.482-.767.785-1.279h1.054c-.797 1.312-1.397 2.279-1.463 2.388l-.388.606-.385-.606c-.1-.172-1.506-2.43-2.921-4.831l-.314-.535c-1.097-1.875-2.141-3.748-2.523-4.704a6.57 6.57 0 01-.485-2.49A6.649 6.649 0 0111.876 2zm-.014 3.501c.176 0 .335.101.41.26l.864 1.806 1.976.254c.173.02.32.138.376.303a.458.458 0 01-.121.47L13.918 9.96l.37 1.957a.458.458 0 01-.667.482l-1.745-.955-1.749.955a.455.455 0 01-.485-.03.452.452 0 01-.163-.452l.37-1.957-1.464-1.373a.445.445 0 01.251-.773l1.964-.254.852-1.8a.455.455 0 01.41-.26zm.014 1.517l-.549 1.155a.455.455 0 01-.351.257l-1.27.164.93.87a.46.46 0 01.137.415l-.24 1.257 1.125-.606a.458.458 0 01.436 0l1.121.606-.236-1.257a.452.452 0 01.133-.41l.93-.875-1.266-.164a.455.455 0 01-.355-.257l-.545-1.155z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'my-destinations-icon'
            customElements.define(customElementName, class extends SvgMyDestinations {});
            export const MY_DESTINATIONS_ICON = customElementName;
            