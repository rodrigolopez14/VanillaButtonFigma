export default class SvgHillHold extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M19.21 4.147l.179.003a3.171 3.171 0 011.494.752l.096.077.621 1.437.176.07.227.516-.361.544c-.14.194-.318.358-.522.483l-.064.041c-.147.093-.349.224-.669.388.038.426-.054.853-.265 1.225l3.283-1.6.422.864L2.128 19.552.298 16.8l.8-.531L2.46 18.32l2.97-1.446a2.24 2.24 0 01-.289-.074 2.195 2.195 0 01-.94-.64l-.807.163-.099-.019c-.112-.026-.349-.074-1.28-1.034l-.096-.099-.32-1.504-.54-1.062v-.106c0-.157.031-.211.32-.681l.4-1.19-.228-.094-.128-.755 1.354-.771A42.442 42.442 0 019.13 5.622a5.702 5.702 0 012.24-.419c1.142.004 2.282.07 3.417.199a.397.397 0 00.131 0l.17-.064c1.5-.586 3.34-1.252 4.3-1.188zM5.847 13.475a1.235 1.235 0 00-1.104 1.773 1.232 1.232 0 101.104-1.773zm10.868-3.245l-8.692 4.224c.039.324.005.652-.099.96-.035.096-.076.19-.121.282l10.054-4.902a2.205 2.205 0 01-1.142-.564zm2.588-5.12c-.576-.022-1.881.352-3.868 1.124l-.173.067a1.309 1.309 0 01-.576.067 30.538 30.538 0 00-3.319-.192 4.8 4.8 0 00-1.865.34A42.032 42.032 0 003.28 9.84l-.272.154-.784 2.29-.138.228.43.909.274 1.28c.213.227.438.442.676.643l.265-.058c-.116-.42-.1-.867.045-1.28a2.186 2.186 0 012.78-1.366c.475.158.88.476 1.146.9l8.461-4.08a2.189 2.189 0 012.746-2.88c.498.165.919.506 1.184.96.192-.106.339-.196.454-.266l.067-.042a.838.838 0 00.212-.186l-.045-.09-.586-1.356a2.56 2.56 0 00-.893-.49zm-6.864 1.757c.432.01 1.197.032 2.157.115L6.75 10.374l-2.714.32.285-.998 2.176-.256zm5.78.535a1.19 1.19 0 00-.541.128c-.3.14-.531.394-.64.707h.016a1.232 1.232 0 101.165-.835z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'hill-hold-icon'
            customElements.define(customElementName, class extends SvgHillHold {});
            export const HILL_HOLD_ICON = customElementName;
            