export default class SvgServiceScheduling extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M17.06 6.953a3.47 3.47 0 013.872-.484l.549.27-1.76 1.76.205.546.587.234 1.73-1.73.267.566a3.462 3.462 0 01-.708 3.964 3.473 3.473 0 01-3.98.624l-.07-.036-.355-.375.62-.598.249.264A2.593 2.593 0 0021.9 9.133l-1.173 1.173-1.493-.587-.537-1.443 1.22-1.22a2.593 2.593 0 00-2.907 3.637l.14.294-6.133 5.28 1.385 1.367c.073.066.17.101.27.096l.104-.01a.587.587 0 00.277-.133l3.626-4.547.31-.293.622.613-.346.349-3.593 4.485c-.271.27-.638.42-1.02.42l-.14-.007a1.235 1.235 0 01-.74-.349l-1.511-1.51-1.966-1.969.552-.686 1.54 1.537 1.428-1.229-2.696-1.827-1.302 1.64-.692-.543.586-.737-3.88-3.311-.484.586L1.267 8.1l1.2-1.408 2.428 1.69-.486.587 3.848 3.276.684-.856 3.564 2.422 3.581-3.08a3.47 3.47 0 01.974-3.778zm-4.318 8.935a.44.44 0 110 .88.44.44 0 010-.88zM2.625 7.871l-.158.182.842.854.293-.35-.977-.686z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'service-scheduling-icon'
            customElements.define(customElementName, class extends SvgServiceScheduling {});
            export const SERVICE_SCHEDULING_ICON = customElementName;
            