export default class SvgTestDrive extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M14.061 3.258l.478.834H7.622c-.548 0-1.054.294-1.328.77L3.536 9.68v4.825h1.289V12.43h5.23V8.208h5.873l-1.584-2.777h.962l1.583 2.747v.02h3.183c.967 0 1.692.969 1.692 1.971v10.175H11.722a1.944 1.944 0 01-1.666-1.972V13.25H5.658v2.075H2.703V9.458l.255-.45h-.891v-.833h1.37l2.135-3.728a2.367 2.367 0 012.05-1.189h6.44zm5.945 5.77h-9.112v9.347c-.007.31.111.611.328.833.141.15.326.253.528.292h9.18v-9.339a1.111 1.111 0 00-.924-1.133zm-.542 1.141l.592.59-2.578 2.574a1.667 1.667 0 01-.047 2.292l-3.209 3.208-.597-.58.294-.295 2.917-2.916a.833.833 0 000-1.17l-1.053-1.053-2.63 2.628a.833.833 0 000 1.164l-.584.578a1.667 1.667 0 010-2.336l3.212-3.225 1.11 1.11 2.573-2.569z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'test-drive-icon'
            customElements.define(customElementName, class extends SvgTestDrive {});
            export const TEST_DRIVE_ICON = customElementName;
            