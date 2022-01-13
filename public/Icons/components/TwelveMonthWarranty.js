export default class SvgTwelveMonthWarranty extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.24 11.252a5.7 5.7 0 10-8.754.194L5 20.018l3.677-1.938 2.086 3.6 2.46-8.462a5.714 5.714 0 002.32-1.25l1.823 6.287-2.64-1.383-1.495 2.571-.348-1.185-.823.25.911 3.104 2.086-3.6 3.692 1.926-2.509-8.686zm-5.714 8.266l-1.492-2.572-2.643 1.377 1.8-6.191a5.674 5.674 0 003.6 1.286c.175 0 .346 0 .515-.026l-1.78 6.126zm1.265-6.938a4.857 4.857 0 113.426-1.413 4.857 4.857 0 01-3.451 1.413h.025z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'twelve-month-warranty-icon'
            customElements.define(customElementName, class extends SvgTwelveMonthWarranty {});
            export const TWELVE_MONTH_WARRANTY_ICON = customElementName;
            