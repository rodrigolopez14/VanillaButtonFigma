export default class SvgFrontLight extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M.045 10.027l7.008 1.308 1.995 3.252-5.517-.789-1.605.3A1.245 1.245 0 01.531 13.3a9.492 9.492 0 01-.456-2.7l-.03-.573zm23.727 0l-.03.573a9.372 9.372 0 01-.459 2.7c-.21.563-.791.896-1.383.792l-1.602-.3-5.529.795 1.992-3.252 7.011-1.308zM1.014 11.125c.035.638.156 1.269.36 1.875.06.157.225.248.39.216l1.749-.33 3.765.54-.783-1.278-5.481-1.023zm21.786 0l-5.481 1.023-.783 1.278 3.768-.54 1.749.321c.165.032.33-.06.39-.216.2-.604.32-1.231.357-1.866z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'front-light-icon'
            customElements.define(customElementName, class extends SvgFrontLight {});
            export const FRONT_LIGHT_ICON = customElementName;
            