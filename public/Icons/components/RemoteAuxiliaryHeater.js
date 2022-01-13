export default class SvgRemoteAuxiliaryHeater extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.852 3.204a2.119 2.119 0 012.125 2.115v8.283a4.019 4.019 0 011.788 3.329 4.004 4.004 0 01-4.004 3.995h-.156a4.054 4.054 0 01-3.836-3.907 3.998 3.998 0 011.785-3.414V3.204zm0 .885h-1.419v10.018l-.221.127a3.119 3.119 0 00-1.564 2.768 3.154 3.154 0 002.989 3.039 3.09 3.09 0 002.281-.868 3.087 3.087 0 00.953-2.242 3.122 3.122 0 00-1.567-2.697l-.221-.13V5.319c0-.68-.551-1.23-1.23-1.23zm.363 3.573v8.006a1.34 1.34 0 11-.885 0V7.662h.885zm-6.2-4.476v1.903l1.647-.953.443.767-1.647.953 1.647.95-.443.768-1.646-.953v1.906H6.13V6.62l-1.649.953-.443-.767 1.65-.95-1.65-.954.443-.767 1.65.953V3.186h.885z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'remote-auxiliary-heater-icon'
            customElements.define(customElementName, class extends SvgRemoteAuxiliaryHeater {});
            export const REMOTE_AUXILIARY_HEATER_ICON = customElementName;
            