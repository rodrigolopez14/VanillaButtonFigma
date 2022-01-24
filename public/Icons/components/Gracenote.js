export default class SvgGracenote extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M9.66 7.609v8.695H7.575A1.58 1.58 0 006 17.882v2.709h2.85c.867 0 1.571-.7 1.577-1.568v-8.604l7.806-3.007v10.05a.87.87 0 01-.87.868h-2.281v-1.865a.87.87 0 01.87-.867h.802v-.767h-.803c-.903 0-1.635.731-1.636 1.634v2.632h3.048c.903 0 1.636-.731 1.637-1.634V4L9.66 7.609zm0 11.406a.81.81 0 01-.81.809H6.766v-1.942a.81.81 0 01.808-.81H9.66v1.943zm.767-9.42v-1.46l7.806-3.017v1.47l-7.806 3.008z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'gracenote-icon'
            customElements.define(customElementName, class extends SvgGracenote {});
            export const GRACENOTE_ICON = customElementName;
            