export default class SvgParking extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M6.148 3.179l.184.003h13.494v.813H6.324c-.79 0-1.24.45-1.24 1.231v15.051h12.318a1.56 1.56 0 001.54-1.573V6.154h.814v12.55a2.373 2.373 0 01-2.354 2.387H4.272V5.226a1.939 1.939 0 012.06-2.044zM13.28 7.16a2.913 2.913 0 010 5.825H9.082v4.138h-.814V7.16zm0 .814H9.082v4.198h4.212a2.099 2.099 0 10-.014-4.198z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'parking-icon'
            customElements.define(customElementName, class extends SvgParking {});
            export const PARKING_ICON = customElementName;
            