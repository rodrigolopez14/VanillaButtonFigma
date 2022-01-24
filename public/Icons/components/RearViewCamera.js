export default class SvgRearViewCamera extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M4.944 12.959v7.073h6.637v.885H4.059V12.96h.885zm15.929 0v5.424a2.535 2.535 0 01-2.532 2.534h-4.99v-.885h4.99a1.65 1.65 0 001.647-1.65V12.96h.885zM9.058 8.669a4.816 4.816 0 116.81 6.81 4.816 4.816 0 01-6.81-6.81zm4.91-.226a3.93 3.93 0 10-3.01 7.262 3.93 3.93 0 003.01-7.262zm-2.482 2.653a1.387 1.387 0 111.961 1.961 1.387 1.387 0 01-1.961-1.961zm.095-7.898v.885H6.594a1.65 1.65 0 00-1.65 1.647v5.459H4.06v-5.46a2.535 2.535 0 012.535-2.531h4.987zm9.292 0v7.99h-.885V4.084H13.35v-.885h7.522z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'rear-view-camera-icon'
            customElements.define(customElementName, class extends SvgRearViewCamera {});
            export const REAR_VIEW_CAMERA_ICON = customElementName;
            