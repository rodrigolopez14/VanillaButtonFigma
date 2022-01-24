export default class SvgDownloadHyre extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M7.714 2.054l.163.003h9.32v.857h-9.32a.877.877 0 00-.966.96v.752h10.286V19.66a2.094 2.094 0 01-2.077 2.106H6.054V3.874a1.714 1.714 0 011.823-1.817zm8.626 16.283H6.911v2.572h8.209a1.234 1.234 0 001.22-1.249v-1.323zm-4.76.683a.597.597 0 110 1.194.597.597 0 010-1.194zm4.76-13.537H6.911v12h9.429v-12zM12.083 8.29v4.366l1.557-1.574.609.603-2.586 2.617-2.657-2.56.591-.617 1.629 1.565v-4.4h.857z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'download-hyre-icon'
            customElements.define(customElementName, class extends SvgDownloadHyre {});
            export const DOWNLOAD_HYRE_ICON = customElementName;
            