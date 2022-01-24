export default class SvgInfotainment extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M20.896 6.073v9.742a2.558 2.558 0 01-2.552 2.551H6.18v-.947h12.164a1.607 1.607 0 001.604-1.604V7.02H5.778a1.607 1.607 0 00-1.603 1.604v9.742h-.948V8.624A2.552 2.552 0 015.78 6.073h15.117zM9.218 13.165v1.886H7.333v-1.886h1.885zm3.786 0v1.886H11.12v-1.886h1.885zm3.787 0v1.886h-1.886v-1.886h1.886zm-7.573-3.78v1.886H7.333V9.385h1.885zm3.786 0v1.886H11.12V9.385h1.885zm3.787 0v1.886h-1.886V9.385h1.886z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'infotainment-icon'
            customElements.define(customElementName, class extends SvgInfotainment {});
            export const INFOTAINMENT_ICON = customElementName;
            