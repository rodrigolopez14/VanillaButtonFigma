export default class SvgFrontAxle extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M8.244 18.688v2.118H5.067v-5.294h3.177v2.117h3.176V7.256l-.83.83-.748-.748 1.36-1.36-1.36-1.358.749-.748 1.358 1.359 1.36-1.36.747.749-1.358 1.359 1.358 1.359-.748.748-.83-.83V17.63h3.177v-2.12h3.177v5.293h-3.177v-2.114H8.244zm-1.06-2.12H6.127v3.176h1.059v-3.177zm10.589 0h-1.059v3.176h1.059v-3.177zM8.247 3.331v2.117h1.63v1.06h-1.63v2.117H5.071V3.332h3.176zm10.585 0v5.294h-3.177V6.508h-1.563V5.45h1.563V3.332h3.177zM7.188 4.39H6.13v3.176h1.06V4.391zm10.585 0h-1.059v3.176h1.059V4.391z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-axle-icon'
            customElements.define(customElementName, class extends SvgFrontAxle {});
            export const FRONT_AXLE_ICON = customElementName;
            