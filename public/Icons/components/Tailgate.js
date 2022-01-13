export default class SvgTailgate extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M5.157 7.385a44.207 44.207 0 017.401-.234 5.782 5.782 0 012.233.625 32.512 32.512 0 013.07 1.736c.05.035.107.06.167.075l.187.017c1.652.128 3.656.351 4.493.837.07.042.547.368 1.013 1.342l.033.095-.08 1.63.147.14-.02.505-.557.318c-.21.11-.438.177-.673.2h-.075c-.182.02-.452.054-.837.054a2.182 2.182 0 01-4.106-.031l-8.29-.042v-.837l8.168.039a2.182 2.182 0 014.359.03c.276-.008.477-.044.625-.044h.08c.122-.013.24-.048.35-.103v-.154l.075-1.537a2.512 2.512 0 00-.653-.899c-.494-.287-1.89-.539-4.122-.728l-.192-.017a1.331 1.331 0 01-.53-.19 32.255 32.255 0 00-2.992-1.694 4.973 4.973 0 00-1.915-.541 43.767 43.767 0 00-7.28.234l-.347.02-1.775 1.775-.279.173-.014 1.06-.337 1.342c.102.33.224.652.365.966l.388.098a2.182 2.182 0 11.162 1.233H1.186l-.837-.837a.52.52 0 11.711-.48l.472.469h.64a6.229 6.229 0 01-.523-1.3l-.036-.115.385-1.527V9.872l.04-.081c.055-.123.077-.145.588-.458l.968-.977-.184-.212.198-.664zm.235 5.25a1.348 1.348 0 100 2.695 1.348 1.348 0 000-2.696zm14.201-.003a1.348 1.348 0 10.006 2.695 1.348 1.348 0 00-.006-2.695zM6.198 8.705l2.174.765 6.854.337c.385.201.96.514 1.644.919L8.202 10.3l-2.62-.923.616-.673z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'tailgate-icon'
            customElements.define(customElementName, class extends SvgTailgate {});
            export const TAILGATE_ICON = customElementName;
            