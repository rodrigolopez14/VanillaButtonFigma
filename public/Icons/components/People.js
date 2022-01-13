export default class SvgPeople extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.246 8.023l-.217.857H9.486a.651.651 0 00-.517.223.486.486 0 00-.075.426c.157.626.337 1.416.512 2.214l.104.478c.36 1.668.673 3.233.673 3.256v5.472h1.34a.923.923 0 00.92-.923l.014-4.572 1.177-4.654v-.203h.857v.363L13.3 15.614v4.412a1.78 1.78 0 01-1.777 1.78H9.326V15.6a225.7 225.7 0 00-.64-3.086l-.106-.493a83 83 0 00-.526-2.287 1.32 1.32 0 01.232-1.163 1.497 1.497 0 011.2-.548h5.76zM11.482 2.02a2.157 2.157 0 11.002 4.314 2.157 2.157 0 01-.002-4.314zm.004.857a1.3 1.3 0 10-.006 2.6 1.3 1.3 0 00.006-2.6z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'people-icon'
            customElements.define(customElementName, class extends SvgPeople {});
            export const PEOPLE_ICON = customElementName;
            