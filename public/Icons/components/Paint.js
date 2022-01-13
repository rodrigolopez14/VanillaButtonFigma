export default class SvgPaint extends HTMLElement {
                constructor() 
                {
                    super();
                }
                connectedCallback() {
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
                    path2.setAttributeNS(null, 'd', 'M12.948 5.367l2.291 1.406-.909 1.497.767.47-.976 1.578 1.588.964-5.718 9.333a1.818 1.818 0 01-1.549.867 1.818 1.818 0 01-.942-.267L4.424 19.33l.467-.775 3.076 1.884a.91.91 0 00.681.11.91.91 0 00.561-.407l5.243-8.563-1.573-.964.966-1.579-.77-.47.91-1.496-.74-.455-.942 1.537-.806-.504-.942 1.54-.767-.47a.91.91 0 00-1.243.303l-5.681 9.27-.776-.476L7.76 8.548a1.818 1.818 0 012.484-.606l.943-1.539.818.5.942-1.536zm3.715 3.357l3.87 2.97-.554.721-3.87-2.97.554-.721zm5.061-1.451v.909h-4.879v-.91h4.88zM19.98 3.12l.553.722-3.87 2.97-.554-.722 3.87-2.97z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'paint-icon'
            customElements.define(customElementName, class extends SvgPaint {});
            export const PAINT_ICON = customElementName;
            