export default class SvgFourDriveWheel extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M16.918 14.942l2.994.866-1.412 4.98-3.012-.858.444-1.543H8.808l-.693 2.402-3.008-.859 1.43-4.988 2.994.866-.443 1.54h7.141l.69-2.406zm-9.675 1.285l-.858 2.994 1.003.284.852-2.991-.997-.287zm10.385 0l-.859 2.994 1 .27.86-2.991-1.001-.273zM16.918 3l3.012.855-1.43 4.992-3.012-.859.46-1.526h-2.851v9.346h-1.039V6.44h-3.25l-.693 2.406-3.008-.859L6.537 3l2.994.876-.443 1.547h7.138L16.918 3zm.713 1.28l-.862 2.995 1 .287.86-2.994-.998-.287zm-10.381 0l-.865 2.995 1.003.287.859-2.994-.997-.287z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'four-drive-wheel-icon'
            customElements.define(customElementName, class extends SvgFourDriveWheel {});
            export const FOUR_DRIVE_WHEEL_ICON = customElementName;
            