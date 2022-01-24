export default class SvgXperience extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M22.179 8.624h-6.444v2.049H10.86L13.911 8H8.19L6.957 9.08 5.724 8H0l4.098 3.585L0 15.173h5.724l1.233-1.08 1.233 1.08h5.721l-2.598-2.277H9.948l1.572 1.377h-3l-1.572-1.377L5.4 14.273h-3l3.066-2.7L2.4 8.9h3l1.572 1.377L8.544 8.9h3l-3.078 2.673h7.269v3.018h.9v-3.018h5.523c.428.044.857-.076 1.2-.336.29-.255.457-.624.456-1.011a1.473 1.473 0 00-.414-1.149 1.755 1.755 0 00-1.221-.453zm.6 1.926a.816.816 0 01-.54.126h-5.604V9.524H22.2a.9.9 0 01.57.189.6.6 0 01.141.465.453.453 0 01-.135.372h.003z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'xperience-icon'
            customElements.define(customElementName, class extends SvgXperience {});
            export const XPERIENCE_ICON = customElementName;
            