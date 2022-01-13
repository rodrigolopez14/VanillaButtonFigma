export default class SvgTrunk extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M1.598 6.273l.176.08.082.078 1.668 1.823.447.538h.145c2.6-.301 5.221-.385 7.835-.25.83.057 1.64.282 2.38.663a34.156 34.156 0 013.25 1.838c.05.031.104.054.16.067h.198c1.75.158 3.87.398 4.764.911.073.046.583.392 1.075 1.428l.034.07v.076a8.008 8.008 0 01-.07 1.698l.13.149-.02.547-.587.34c-.225.12-.472.195-.726.219h-.082c-.198.021-.483.055-.887.055a2.321 2.321 0 01-4.363-.025l-10.633-.054a2.324 2.324 0 01-4.46-.161l-.911-.228-.076-.061c-.088-.08-.295-.228-.735-1.598l-.04-.125.499-1.971.884.225-.435 1.72c.11.337.237.669.383.992l.395.1a2.321 2.321 0 014.606.19l10.399.026a2.321 2.321 0 014.639.03c.282-.008.492-.03.647-.045h.085c.124-.013.246-.048.358-.103v-.219a8.446 8.446 0 00.088-1.537 2.686 2.686 0 00-.695-.97c-.53-.303-2.002-.567-4.363-.77h-.2a1.382 1.382 0 01-.566-.204 33.722 33.722 0 00-3.168-1.793 5.365 5.365 0 00-2.02-.57 46.575 46.575 0 00-7.705.245l-.638.043-.726-.878L1.3 7.185H.246v-.912h1.352zm3.3 8.21a1.413 1.413 0 10-1.077 2.611 1.413 1.413 0 001.077-2.612zm14.509-.107a1.413 1.413 0 100 2.825 1.413 1.413 0 000-2.825zm-13.3-3.819c.456.155.92.283 1.39.386l7.51.422c.429.219 1.064.562 1.823 1.015l-9.475-.538a12.981 12.981 0 01-1.258-.322l-1.504-.763.028-.054c.218-.028.75-.085 1.485-.146z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'trunk-icon'
            customElements.define(customElementName, class extends SvgTrunk {});
            export const TRUNK_ICON = customElementName;
            