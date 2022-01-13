export default class SvgOnlineSystemUpdate extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.36 16.753v4.01h-1v-4.01h1zm1.635-.45l1.371 3.768-.94.342-1.371-3.768.94-.342zm-4.262-.028l.94.342-1.371 3.769-.94-.342 1.37-3.769zm5.64-.957l2.578 3.072-.766.642-2.577-3.071.766-.643zm-6.961-.175l.77.64-2.567 3.088-.77-.64 2.567-3.088zm7.921-1.22l3.473 2.004-.5.866-3.473-2.005.5-.866zm-8.907-.062l.5.866-3.472 2.005-.5-.866 3.472-2.005zm9.332-1.577l3.95.696-.174.985-3.95-.696.174-.985zm-9.734-.07l.174.985-3.95.696-.173-.984 3.949-.697zm13.527-2.31l.173.985-3.949.696-.173-.985 3.949-.696zM3.26 9.833l3.95.696-.174.985-3.95-.697.174-.984zm16.083-2.768l.5.866-3.472 2.005-.5-.866 3.472-2.005zM4.487 7L7.96 9.005l-.5.866-3.473-2.005.5-.866zm2.125-2.24l2.577 3.072-.766.643-2.577-3.072.766-.643zm2.76-1.377l1.37 3.769-.939.342-1.371-3.769.94-.342zm3.061-.35v4.01h-1v-4.01h1z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'online-system-update-icon'
            customElements.define(customElementName, class extends SvgOnlineSystemUpdate {});
            export const ONLINE_SYSTEM_UPDATE_ICON = customElementName;
            