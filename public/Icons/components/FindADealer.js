export default class SvgFindADealer extends HTMLElement {
                constructor() 
                {
                    super();
                }
                
connectedCallback() {
var colorFill = "#190F14"
if (this.getAttribute('color'))
{
  colorFill = this.getAttribute('color')
} 
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
                    path2.setAttributeNS(null, 'd', 'M15.064 3.172a6.54 6.54 0 013.27 5.664 6.472 6.472 0 01-.498 2.454c-.46 1.137-1.866 3.582-3.164 5.776l-1.04-.01c1.356-2.262 2.908-4.946 3.377-6.1a5.648 5.648 0 10-10.469 0c.729 1.79 4.093 7.313 5.233 9.163.2-.322.466-.755.773-1.26h1.051c-.785 1.29-1.376 2.245-1.433 2.35l-.382.597-.379-.597a216.003 216.003 0 01-3.19-5.281l-.307-.528c-.962-1.665-1.834-3.259-2.175-4.11a6.54 6.54 0 019.333-8.118zm-3.29 3.183a2.48 2.48 0 110 4.961 2.48 2.48 0 010-4.96zm0 .899a1.585 1.585 0 100 3.17 1.585 1.585 0 000-3.17z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'find-a-dealer-icon'
            customElements.define(customElementName, class extends SvgFindADealer {});
            export const FIND_A_DEALER_ICON = customElementName;
            