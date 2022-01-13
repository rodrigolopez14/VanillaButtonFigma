export default class SvgPeaceOfMindForLonger extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.643 5.897l.5.857H8.83c-.697 0-1.34.373-1.688.977l-3.377 5.9v5.972H5.49V17.07H18.35v2.532h.394a1.343 1.343 0 001.34-1.343v-4.629L17.126 8.47h.988l1.963 3.428h1.694v.857h-1.2l.369.649v4.857a2.2 2.2 0 01-2.197 2.2H17.5v-2.531H6.357v2.531H2.911v-7.057l.372-.649H2.054v-.857H3.77L6.4 7.306a2.809 2.809 0 012.431-1.409h7.812zm.026 6.854l-.82 2.506h-.903l.54-1.648H8.363l.54 1.648H8l-.82-2.506h9.489zm3.28-9.674v1.294h1.282v.858H19.95v1.294h-.858V5.229h-1.285V4.37h1.285V3.077h.858z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'peace-of-mind-for-longer-icon'
            customElements.define(customElementName, class extends SvgPeaceOfMindForLonger {});
            export const PEACE_OF_MIND_FOR_LONGER_ICON = customElementName;
            