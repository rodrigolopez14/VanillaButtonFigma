export default class SvgVideochatLiveStore extends HTMLElement {
                constructor() 
                {
                    super();
                }
                
connectedCallback() {
var colorFill = "#190F14"
if (this.getAttribute('color'))
{
  colorFill = this.getAttribute('color')
} 
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
                    path2.setAttributeNS(null, 'd', 'M18.745 5.239a2.163 2.163 0 012.16 2.16V18.96H5.383a2.163 2.163 0 01-2.16-2.16V8.224h.981V16.8c0 .651.528 1.179 1.179 1.179h14.54V7.399c0-.65-.527-1.178-1.178-1.178H3.242v-.982zM13.8 8.18a2.163 2.163 0 012.144 2.186v.082l2.032-.802v4.91l-2.032-.655v2.134H9.349a2.167 2.167 0 01-2.16-2.164v-5.69zm0 .982H8.17v4.71c0 .65.528 1.179 1.18 1.18h5.612l.016-4.712c0-.65-.527-1.178-1.178-1.178zm3.21 1.901l-.981.39v1.423l.982.328v-2.14z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'videochat-live-store-icon'
            customElements.define(customElementName, class extends SvgVideochatLiveStore {});
            export const VIDEOCHAT_LIVE_STORE_ICON = customElementName;
            