export default class SvgNews extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M4.855 5.16v10.578c.001.67.51 1.23 1.178 1.295a1.986 1.986 0 01-.477-1.295V5.16h.698v10.577a1.3 1.3 0 001.3 1.3h12.68V7.16c0-.718-.582-1.3-1.3-1.302H7.656v-.698h11.278a2 2 0 011.998 2v10.575H6.156a2 2 0 01-2-1.998V5.16h.699zm13.984 5.115v4.89h-4.89v-4.89h4.89zm-6.295 4.191v.7H7.656v-.7h4.888zm5.596-3.493h-3.493v3.493h3.493v-3.493zm-5.596 1.402v.699H7.656v-.699h4.888zm0-2.096v.699H7.656v-.699h4.888zm6.286-2.447v.698H7.656v-.698H18.83z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'news-icon'
            customElements.define(customElementName, class extends SvgNews {});
            export const NEWS_ICON = customElementName;
            