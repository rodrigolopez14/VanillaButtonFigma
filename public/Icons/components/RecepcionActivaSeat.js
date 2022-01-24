export default class SvgRecepcionActivaSeat extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M9.014 4.232l7.914.029.492.87H8.986c-.696 0-1.363.376-1.71.985l-3.42 5.971v6.029h1.767v-2.58h11.71v-.377c-.087-.347-.58-2.84-.927-4.231-.087-.32 0-.667.203-.928.232-.29.58-.435.956-.435H22l-.232.87h-4.174a.372.372 0 00-.29.116c-.029.058-.058.145-.029.203.377 1.507.928 4.29.928 4.318v3.914h.87a.55.55 0 00.55-.551v-3.363l.812-3.188h.898l-.87 3.333v3.189c0 .782-.637 1.42-1.42 1.42h-1.71v-3.391H6.493v2.58H3.014v-7.16l.377-.667H2.145v-.87h1.74L6.55 5.653a2.849 2.849 0 012.463-1.42zm10 .985c.957 0 1.71.754 1.682 1.682a1.682 1.682 0 01-3.363 0c0-.928.754-1.682 1.681-1.682zm.03.87a.81.81 0 00-.812.812.83.83 0 00.811.811.81.81 0 00.812-.811.81.81 0 00-.812-.812z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'recepcion-activa-seat-icon'
            customElements.define(customElementName, class extends SvgRecepcionActivaSeat {});
            export const RECEPCION_ACTIVA_SEAT_ICON = customElementName;
            