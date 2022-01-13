export default class SvgSteeringWheel extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.864 3a8.863 8.863 0 108.863 8.86A8.873 8.873 0 0011.864 3zm2.268 11.272h-4.53l-.96-3.793h6.452l-.962 3.793zM3.934 11.86c0-.28.015-.56.044-.838l3.016-.552a.773.773 0 01.838.583l.578 2.281-4.463-1.04a6.705 6.705 0 01-.013-.434zm11.977-.807a.736.736 0 01.785-.59l3.054.563c.03.276.046.553.046.831v.438l-4.463 1.04.578-2.282zm-4.035-7.137a7.945 7.945 0 017.71 6.135l-2.75-.506a1.623 1.623 0 00-.55.025v-.022H7.448v.034a1.732 1.732 0 00-.621-.034l-2.703.497a7.945 7.945 0 017.74-6.114l.012-.015zm-7.811 9.363l4.596 1.07 1.316 5.214a7.954 7.954 0 01-5.912-6.284zm6.917 6.461l-1.148-4.537H13.9L12.75 19.74a7.616 7.616 0 01-1.769 0zm2.775-.177l1.306-5.214 4.59-1.07a7.957 7.957 0 01-5.896 6.284z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'steering-wheel-icon'
            customElements.define(customElementName, class extends SvgSteeringWheel {});
            export const STEERING_WHEEL_ICON = customElementName;
            