export default class SvgWirelessConnection extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.383 11.04l.463.87H9.217a1.046 1.046 0 00-.918.55l-2.371 4.441v4.096h1.034V19.13h9.53v1.867a1.043 1.043 0 001.036-1.043V16.9l-1.661-3.11h.985l.852 1.606h1.16v.87h-.681l.223.417v3.27a1.916 1.916 0 01-1.913 1.913h-.87V20H7.832v1.867H5.058v-5.183l.223-.417h-.678v-.87h1.136l1.791-3.345a1.91 1.91 0 011.687-1.011h6.166zm-.067 4.995l-.635 1.916h-.916l.348-1.047H9.345l.345 1.047h-.916l-.632-1.916h7.174zM8.38 9.005a4.899 4.899 0 016.713 0l-.684.552a4.032 4.032 0 00-5.342 0zm3.358-4.059c2.074 0 4.058.844 5.497 2.338l-.681.545a6.768 6.768 0 00-9.635 0l-.678-.545a7.632 7.632 0 015.497-2.338zm.014-2.7c2.892 0 5.652 1.211 7.61 3.34l-.692.547a9.467 9.467 0 00-6.934-3.017A9.46 9.46 0 004.82 6.133l-.678-.547a10.342 10.342 0 017.61-3.34z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'wireless-connection-icon'
            customElements.define(customElementName, class extends SvgWirelessConnection {});
            export const WIRELESS_CONNECTION_ICON = customElementName;
            