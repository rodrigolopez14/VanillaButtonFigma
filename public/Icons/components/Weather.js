export default class SvgWeather extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.636 12.26v-.896h-3.88a5.97 5.97 0 00-1.428-3.445l2.705-2.704-.633-.633-2.704 2.705A5.937 5.937 0 0012.25 5.86V2h-.896v3.86A5.928 5.928 0 007.91 7.287L5.176 4.555l-.633.633L7.278 7.92a5.94 5.94 0 00-1.43 3.445H2v.896h3.863a5.97 5.97 0 001.424 3.439l-2.744 2.746.633.627 2.743-2.747a5.934 5.934 0 003.451 1.436v3.869h.896v-3.863a5.97 5.97 0 003.438-1.424l2.75 2.75.62-.618-2.749-2.75a5.952 5.952 0 001.433-3.45l3.878-.015zm-9.818 4.633a5.075 5.075 0 110-10.15 5.075 5.075 0 010 10.15z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'weather-icon'
            customElements.define(customElementName, class extends SvgWeather {});
            export const WEATHER_ICON = customElementName;
            