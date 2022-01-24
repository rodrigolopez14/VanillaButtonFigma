export default class SvgResistanceTray extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.76 5.137v1.95h1.2v9.904h-.695V7.783h-1.201v-1.95H6.119v1.95H4.828v9.324c0 .714.58 1.294 1.294 1.294H19.96v.695H6.119a1.992 1.992 0 01-1.99-1.99V7.088h1.292v-1.95H18.76zm-6.366 3.508v8.316H11.7V8.645h.695zm-1.741 0v8.316h-.696V8.645h.696zm-1.742 0v8.316h-.695V8.645h.695zm-1.741 0v8.316h-.696V8.645h.696zm10.449 0v8.316h-.696V8.645h.696zm-1.742 0v8.316h-.696V8.645h.696zm-1.741 0v8.316h-.696V8.645h.696z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'resistance-tray-icon'
            customElements.define(customElementName, class extends SvgResistanceTray {});
            export const RESISTANCE_TRAY_ICON = customElementName;
            