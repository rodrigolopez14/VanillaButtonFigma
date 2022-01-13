export default class SvgParkingPosition extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.876 2a6.649 6.649 0 016.64 6.636 6.57 6.57 0 01-.483 2.485c-.365.904-1.318 2.626-2.348 4.395l-.518.885-.346.584h-1.057c1.375-2.297 2.951-5.021 3.427-6.197a5.73 5.73 0 10-10.627 0c.739 1.818 4.154 7.424 5.312 9.3.203-.327.482-.767.785-1.279h1.054c-.794 1.312-1.397 2.279-1.463 2.388l-.388.606-.385-.606c-.1-.172-1.506-2.43-2.921-4.831l-.314-.535c-1.097-1.875-2.141-3.748-2.523-4.704a6.57 6.57 0 01-.485-2.49A6.649 6.649 0 0111.876 2zm1.148 3.612a2.07 2.07 0 110 4.136h-2.527v3.11h-.91v-7.24h3.437zm0 .915h-2.527v2.318h2.527a1.16 1.16 0 100-2.318z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'parking-position-icon'
            customElements.define(customElementName, class extends SvgParkingPosition {});
            export const PARKING_POSITION_ICON = customElementName;
            