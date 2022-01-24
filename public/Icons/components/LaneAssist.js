export default class SvgLaneAssist extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M15.805 5.148l.442.822H9.455c-.405 0-.776.222-.967.578l-2.425 4.54v3.931h1.12v-1.616h9.73v1.616h.024c.605 0 1.096-.49 1.096-1.096v-2.835l-1.855-3.472h.932l1.054 1.976h1.294v.822h-.842l.25.468v3.041c-.001.106-.01.211-.028.315l3.033 4.883h-.967l-2.466-3.984c-.367.445-.916.7-1.493.696H16.1v-1.617H8.005v1.617H5.238l-2.04 3.288h-.97l3.013-4.836v-3.403l.25-.468h-.823v-.822h1.26l1.825-3.43a1.918 1.918 0 011.702-1.014h6.35zm-.104 5.096l-.638 1.945h-.866l.367-1.123H9.537l.37 1.12-.014.003h-.852l-.644-1.945h7.304z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'lane-assist-icon'
            customElements.define(customElementName, class extends SvgLaneAssist {});
            export const LANE_ASSIST_ICON = customElementName;
            