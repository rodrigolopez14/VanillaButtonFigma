export default class SvgRemoteLockAndUnlock extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M13.54 3.268a1.869 1.869 0 011.985 1.98v4.499h1.912l.007 12.107h-8.98a2.286 2.286 0 01-2.265-2.3V9.748h8.388V5.249a.953.953 0 00-1.05-1.047h-4.55V7.89h-.934V3.268zm2.963 7.413h-9.37v8.874a1.349 1.349 0 001.33 1.364h8.04V10.681zm-4.696 3.7a1.414 1.414 0 11-.002 2.829 1.414 1.414 0 01.002-2.829zm-.004.935a.48.48 0 10.006.96.48.48 0 00-.006-.96z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'remote-lock-and-unlock-icon'
            customElements.define(customElementName, class extends SvgRemoteLockAndUnlock {});
            export const REMOTE_LOCK_AND_UNLOCK_ICON = customElementName;
            