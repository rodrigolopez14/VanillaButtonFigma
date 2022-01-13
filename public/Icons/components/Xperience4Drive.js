export default class SvgXperience4Drive extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M14.34 3.177a1.972 1.972 0 011.964.506l4.649 4.73-.26.848-.624-.64-4.326-4.387a1.192 1.192 0 00-1.186-.305L9.376 5.463 6.188 8.606l.884.895 1.422-1.404 7.098 7.2-1.422 1.404.047.047c.22.226.522.354.838.355l.133-.008c.264-.03.512-.148.702-.337l2.347-2.306 1.305-4.148.62.642-.782 2.504.92.934-.557.548-.626-.634-.18.585-2.481 2.444c-.322.32-.744.516-1.195.558l2.027 2.045-.558.548L3.157 6.718l.555-.551L5.61 8.09l3.357-3.321.587-.175-.61-.618.555-.55.905.917zM8.478 9.203l-.905.895 6 6.094.905-.892-6-6.097zm3.28-2.517l5.298 5.374-2.168 1.077-.35-.701 1.203-.598-3.78-3.83-.59 1.151-.696-.357 1.082-2.116z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'xperience4-drive-icon'
            customElements.define(customElementName, class extends SvgXperience4Drive {});
            export const XPERIENCE4_DRIVE_ICON = customElementName;
            