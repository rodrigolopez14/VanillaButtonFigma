export default class SvgDoorsAndLights extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.805 5.221v4.8h-.8v-4H7.717c-.532 0-1.023.285-1.288.747l-3.17 5.501a9.067 9.067 0 012.208 2.598c.465.979.75 2.034.84 3.114h9.698v-5.584H5.34v-.8h11.466v7.192H5.56l-.016-.384c0-.018-.096-1.813-.8-3.146-.763-1.454-2.253-2.547-2.253-2.547l-.294-.21 3.536-6.134a2.293 2.293 0 011.984-1.147h9.088zm1.988 10.4l1.342 2.356-.695.396-1.342-2.356.695-.396zm.504-.97l2.55.895-.264.752-2.55-.895.264-.752zm2.296-2.248l.282.748-2.538.956-.282-.748 2.538-.956zM19.5 10.33l.69.406-1.378 2.336-.69-.406L19.5 10.33z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'doors-and-lights-icon'
            customElements.define(customElementName, class extends SvgDoorsAndLights {});
            export const DOORS_AND_LIGHTS_ICON = customElementName;
            