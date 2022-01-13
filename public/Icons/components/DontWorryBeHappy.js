export default class SvgDontWorryBeHappy extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.643 5.06l.5.857H8.83c-.697 0-1.34.373-1.688.977l-3.377 5.897v5.975H5.49v-2.532H18.35v2.532h.394a1.343 1.343 0 001.34-1.343V12.79l-2.957-5.16h.988l1.963 3.429h1.694v.857h-1.2l.369.649v4.857a2.203 2.203 0 01-2.197 2.2H17.5V17.09H6.357v2.532H2.914v-7.057l.372-.649H2.057v-.857h1.714L6.4 6.469A2.809 2.809 0 018.831 5.06h7.812zm-1.612 7.331l.649.572a5.186 5.186 0 01-7.831 0l.645-.572a4.326 4.326 0 006.537 0z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'dont-worry-be-happy-icon'
            customElements.define(customElementName, class extends SvgDontWorryBeHappy {});
            export const DONT_WORRY_BE_HAPPY_ICON = customElementName;
            