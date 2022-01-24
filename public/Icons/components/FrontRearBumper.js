export default class SvgFrontRearBumper extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.714 10.997H20.02L18.057 7.57h-.988l2.957 5.162v.643h-3.429l1.026 2.337h2.414v.449H17.18l-1.351-2.754H7.88L6.549 16.16h-2.84v-.443h2.38l1.025-2.337H3.71v-.649l3.377-5.897a1.949 1.949 0 011.688-.977h8.312L16.597 5H8.774c-1.003 0-1.93.536-2.431 1.406l-2.629 4.591H2v.857h1.229l-.372.649v7.057H6.3v-2.537h11.143v2.537h1.243a2.2 2.2 0 002.197-2.2v-4.857l-.369-.649h1.2v-.857zM8.417 14.263h6.874l.915 1.888h-8.7l.911-1.888zm9.754.594l-.285-.626h2.128v.629l-1.843-.003zm-12.368-.626l-.286.626H3.71v-.628l2.094.002zm-.36 4.472H3.709v-1.68h1.734v1.68zm13.243 0h-.395v-1.68h1.735v.337c0 .74-.6 1.341-1.34 1.343z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-rear-bumper-icon'
            customElements.define(customElementName, class extends SvgFrontRearBumper {});
            export const FRONT_REAR_BUMPER_ICON = customElementName;
            