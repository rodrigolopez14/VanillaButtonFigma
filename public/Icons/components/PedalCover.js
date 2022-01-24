export default class SvgPedalCover extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.252 4v2.229H24l-.595 13.087H18.01l-.443-9.82h1.09l.395 8.731h3.314l.494-10.913h-4.302v.004H17.47l-.05-1.089h2.744V4h1.089zm-8.71 0v2.229h2.745l-.591 13.087H9.3l-.447-9.82h1.093l.396 8.731h3.314l.49-10.913H9.85v.004H8.756L8.71 6.23h2.745V4h1.089zm.545 10.397v1.09H10.91v-1.09h2.178zm8.71 0v1.09h-2.179v-1.09h2.178zM3.833 4v2.229h2.744l-.367 8.63H.367L.138 9.495h1.089l.182 4.273h3.757l.276-6.455H.047L0 6.23h2.745V4h1.089zm9.253 8.219v1.09H10.91v-1.09h2.178zm8.71 0v1.09h-2.179v-1.09h2.178zm-17.419-1.09v1.09H2.2v-1.09h2.178zm8.71-1.088v1.089h-2.179v-1.09h2.178zm8.708 0v1.089h-2.178v-1.09h2.178zM4.378 8.95v1.09H2.2V8.95h2.178z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'pedal-cover-icon'
            customElements.define(customElementName, class extends SvgPedalCover {});
            export const PEDAL_COVER_ICON = customElementName;
            