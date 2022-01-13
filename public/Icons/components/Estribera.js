export default class SvgEstribera extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M19.534 9.192a2.356 2.356 0 012.35 2.353v2.565h-.821v-2.565c0-.845-.684-1.53-1.529-1.531H3.044v1.753a1.532 1.532 0 001.531 1.529h14.872v.822H4.575a2.356 2.356 0 01-2.353-2.35V9.191zM5.978 11.844a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.432.496.471.471 0 01-.495.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.643 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.432-.487.471.471 0 01.495-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zm1.644 0a.463.463 0 01.433.496.471.471 0 01-.496.435.46.46 0 01-.433-.487.471.471 0 01.496-.444zM5.1 10.496a.458.458 0 01.433.493.471.471 0 01-.498.436.463.463 0 01-.433-.493.471.471 0 01.498-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.432-.493.471.471 0 01.498-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.433-.493.471.471 0 01.499-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.433-.493.471.471 0 01.499-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.433-.493.471.471 0 01.499-.436zm1.644 0a.458.458 0 01.432.493.471.471 0 01-.498.436.463.463 0 01-.433-.493.471.471 0 01.499-.436zm1.643 0a.458.458 0 01.433.493.471.471 0 01-.498.436.463.463 0 01-.433-.493.471.471 0 01.498-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.432-.493.471.471 0 01.498-.436zm1.644 0a.458.458 0 01.433.493.471.471 0 01-.499.436.463.463 0 01-.433-.493.471.471 0 01.5-.436z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'estribera-icon'
            customElements.define(customElementName, class extends SvgEstribera {});
            export const ESTRIBERA_ICON = customElementName;
            