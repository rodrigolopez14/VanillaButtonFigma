export default class SvgParkingPosition2 extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.901 14.704v.896h-5.42c-.495 0-.896.4-.896.896v5.39h-.895v-5.382c0-.989.801-1.79 1.79-1.79l5.421-.01zM8.47 14.642c.989 0 1.79.802 1.79 1.79v4.514h-.895v-4.513c0-.495-.4-.896-.895-.896H2.2v-.895zm1.788-11.61V9.32c0 .99-.802 1.791-1.791 1.791H6.039l-.723 1.081-2.403-3.6a2.499 2.499 0 01-.065-2.687 2.907 2.907 0 015.11.299c.356.78.27 1.689-.224 2.388l-1.098 1.645H8.46c.494 0 .895-.401.895-.896V3.033h.902zm5.355 1.864v4.477c0 .495.4.896.895.896h5.374v.895h-5.374a1.791 1.791 0 01-1.79-1.79V4.895h.895zm-10.169.53a2.012 2.012 0 00-1.843.965 1.597 1.597 0 00.06 1.716l1.656 2.475 1.672-2.507c.306-.427.369-.981.167-1.466a2.012 2.012 0 00-1.712-1.183z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'parking-position2-icon'
            customElements.define(customElementName, class extends SvgParkingPosition2 {});
            export const PARKING_POSITION2_ICON = customElementName;
            