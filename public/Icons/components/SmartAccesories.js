export default class SvgSmartAccesories extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M13 2.093c1.214 0 1.49.997 1.655 1.593.19.728.69 1.945.924 2.52h1.91v3.118h1.035v3.104H17.49v1.017h1.034v1.034H17.49v.81a2.28 2.28 0 01-2.276 2.277H8.128c.265.655.638 1.613.813 2.244.21.77.342.835.656.835h3.396c.314 0 .445-.066.659-.835h1.065l-.069.28c-.169.607-.445 1.603-1.658 1.603H9.597c-1.21 0-1.49-.996-1.656-1.59-.268-.856-.58-1.699-.934-2.524H5.059V8.483c0-1.128.825-2.086 1.941-2.252.231-.562.759-1.817.941-2.545.166-.596.445-1.593 1.656-1.593zm3.455 5.148H7.303a1.245 1.245 0 00-1.21 1.242v8.062h9.141a1.241 1.241 0 001.221-1.242V7.241zm-1.058 5.183v3.104h-3.104v-3.104h3.104zm-5.16-.014v3.104H7.135V12.41h3.104zm4.125 1.049h-1.034v1.034h1.034V13.46zm-5.159-.014H8.17v1.034h1.034v-1.034zm6.194-5.159v3.104h-3.104V8.286h3.104zm-5.16-.014v3.104H7.135V8.272h3.104zm4.125 1.049h-1.034v1.034h1.034V9.321zm-5.159-.014H8.17v1.034h1.034V9.307zm3.787-6.18H9.597c-.31 0-.445.07-.656.835-.175.635-.548 1.59-.813 2.245h6.334c-.265-.655-.638-1.61-.814-2.245-.214-.765-.341-.834-.658-.834z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'smart-accesories-icon'
            customElements.define(customElementName, class extends SvgSmartAccesories {});
            export const SMART_ACCESORIES_ICON = customElementName;
            