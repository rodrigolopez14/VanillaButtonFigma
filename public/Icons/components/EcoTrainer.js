export default class SvgEcoTrainer extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M21.158 14.715a5.278 5.278 0 00-1.32-.589c-.863-.141-2.524.778-3.644 1.484a1.489 1.489 0 00-.433-.656c-.683-.603-1.755-.494-1.944-.467l-.986.056V5.579a.833.833 0 01.877-.744h3.28v1.944a.456.456 0 01-.15.314c-.19.17-.438.26-.694.253h-2.486v.833h2.478c.477.008.939-.168 1.289-.492.248-.237.391-.564.397-.908V4.001H13.7a1.65 1.65 0 00-1.711 1.578V9.19a1.789 1.789 0 00-.817-.194h-4.18v2.397c.012.495.22.965.577 1.308.286.3.68.472 1.095.478h2.5v-.833h-2.5a.703.703 0 01-.503-.24 1.047 1.047 0 01-.328-.702V9.84h3.34a.753.753 0 01.816.686v4.064l-4.553.253H7v5H2.833V16.76a1 1 0 01.345-.742c.241-.219.555-.34.88-.342H5.35v-.833H4.058c-.532 0-1.046.199-1.441.555-.39.344-.615.839-.617 1.359v3.916h5.833v-.416c1.945.105 4.548.255 4.973.294h.08c.203.02.4.028.586.028 2.092 0 3.2-1.111 3.375-1.311L21.67 15l-.51-.286zm-4.88 3.956l-.04.041c-.044.05-1.11 1.23-3.269 1.023 0 0-1.277-.106-5.136-.312v-3.75l6.075-.358c.24-.033.945-.053 1.303.278.146.133.233.319.242.517l-.278.194c-.911.503-3.361.661-4.23.678v.833c.347 0 3.419-.028 4.65-.797h.03c1.294-.945 3.411-2.178 4.097-2.067.175.055.345.126.506.214l-3.95 3.506z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'eco-trainer-icon'
            customElements.define(customElementName, class extends SvgEcoTrainer {});
            export const ECO_TRAINER_ICON = customElementName;
            