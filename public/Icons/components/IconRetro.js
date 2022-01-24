export default class SvgIconRetro extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.341 10.423V6h-.984v4.423h-6.54A2.82 2.82 0 002 13.239v3.086h.984v-3.086a1.836 1.836 0 011.832-1.832h15.899v2.101c0 1.011-.819 1.831-1.83 1.833H4.98v.984h6.377V17.8h.984v-1.475h6.557a2.816 2.816 0 002.813-2.817v-3.085h-9.37z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'icon-retro-icon'
            customElements.define(customElementName, class extends SvgIconRetro {});
            export const ICON_RETRO_ICON = customElementName;
            