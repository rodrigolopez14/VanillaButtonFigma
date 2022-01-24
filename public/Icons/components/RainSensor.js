export default class SvgRainSensor extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.317 10.387c3.582.01 7.588.208 7.631.208l.278.015 1.104 3.922h-.808l-.893-3.171c-.86-.04-3.577-.156-6.287-.187l-.65-.006-.643-.002c-3.085 0-6.579.148-7.579.195l-1.273 4.52h18.517l.218.779H2.17l1.704-6.05.28-.015c.042 0 4.25-.208 7.896-.208zm1.57 1.265l.668.401L13 14.643l-.668-.402 1.556-2.59zm2.922-.023l.668.401-1.556 2.59-.668-.402 1.556-2.59zm3.567-4.49l.668.401-1.556 2.59-.668-.402 1.556-2.589zm-2.986-.084l.668.401-1.556 2.59-.668-.402 1.556-2.589zm-3.117-.006l.668.402-1.557 2.589-.668-.402 1.557-2.589z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'rain-sensor-icon'
            customElements.define(customElementName, class extends SvgRainSensor {});
            export const RAIN_SENSOR_ICON = customElementName;
            