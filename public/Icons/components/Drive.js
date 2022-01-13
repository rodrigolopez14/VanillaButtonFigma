export default class SvgDrive extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M18.52 12.77l-.237.922h-3.975a.308.308 0 00-.231.09.166.166 0 00-.022.156c.103.411.22.922.335 1.444l.086.391c.254 1.173.475 2.282.475 2.298v3.661h.775a.474.474 0 00.477-.474v-3.212l.775-3.03h.954l-.812 3.202v3.04a1.4 1.4 0 01-1.4 1.397h-1.686v-4.449c-.07-.35-.548-2.73-.877-4.043a1.09 1.09 0 01.19-.948c.234-.29.589-.455.96-.446h4.213zM4.345 7.811l.504 2.834-.923-.338a8.39 8.39 0 008.132 10.495h.065v.923h-.065A9.323 9.323 0 013.052 10l-.91-.342 2.203-1.846zm7.713-4.729a9.31 9.31 0 019.019 11.72l.901.335-2.203 1.847-.504-2.837.923.338a8.39 8.39 0 00-8.142-10.48h-.055v-.923zm-.48 3.157l-.236.923H7.369a.308.308 0 00-.234.092.16.16 0 00-.021.154c.09.36.19.797.292 1.25l.086.39c.27 1.242.517 2.477.517 2.496v3.661h.76a.474.474 0 00.493-.474V11.52l.772-3.03h.954l-.819 3.202v3.04a1.4 1.4 0 01-1.4 1.397H7.086V11.68c-.07-.354-.548-2.73-.877-4.046a1.092 1.092 0 01.191-.948c.234-.289.588-.454.96-.446h4.218zm4.111 2.363a1.662 1.662 0 110 3.323 1.662 1.662 0 010-3.323zm0 .923a.738.738 0 100 1.477.738.738 0 000-1.477zm-6.941-7.45a1.662 1.662 0 110 3.324 1.662 1.662 0 010-3.323zm0 .924a.738.738 0 100 1.477.738.738 0 000-1.477z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'drive-icon'
            customElements.define(customElementName, class extends SvgDrive {});
            export const DRIVE_ICON = customElementName;
            