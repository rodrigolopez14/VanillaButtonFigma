export default class SvgNewsletter extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M1 7v.822h5.196l8.076 6.43 7.63-6.085v7.875a1.014 1.014 0 01-1.01 1.011H6.82V9.601H1.841v.835h4.158v1.593H2.707v.82H6v1.59H3.523v.835h2.476V17.9H20.88c1.01 0 1.83-.82 1.83-1.83V7H1zm6.536.822h13.45l-6.725 5.363-6.725-5.363z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'newsletter-icon'
            customElements.define(customElementName, class extends SvgNewsletter {});
            export const NEWSLETTER_ICON = customElementName;
            