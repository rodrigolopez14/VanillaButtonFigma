export default class SvgDriveProfile extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M7.784 4.226a7.555 7.555 0 017.544 7.544 7.544 7.544 0 11-7.544-7.544zm1.508 10.48H6.283l.881 3.504c.204.018.409.029.62.029.211 0 .415-.029.62-.029l.888-3.503zm-7.827-1.554A6.487 6.487 0 006 17.97l-1.014-3.997zm12.638-.018l-3.514.82L9.57 17.97a6.49 6.49 0 004.532-4.836zM23.9 14.99v1.074H19.6V14.99H23.9zm-5.91 0v1.074h-1.075V14.99h1.074zm-7.68-4.223H5.293l.717 2.865h3.564l.734-2.865zM23.9 11.77v1.074H19.6V11.77H23.9zm-5.91 0v1.074h-1.075V11.77h1.074zM3.836 10.753l-.083.003-2.39.44c-.028.19-.028.38-.028.574h-.021c0 .086.007.164.032.247l3.367.784-.423-1.662a.49.49 0 00-.537-.383zm7.973 0a.47.47 0 00-.483.386l-.409 1.659 3.357-.785v-.243c0-.212-.029-.38-.029-.57zM7.784 5.3a6.473 6.473 0 00-6.222 4.747l2.02-.359c.12-.013.24-.013.358 0h7.655c.12-.013.24-.013.358 0l2.067.38A6.473 6.473 0 007.784 5.3zM23.9 8.546V9.62H19.6V8.546H23.9zm-5.91 0V9.62h-1.075V8.546h1.074z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'drive-profile-icon'
            customElements.define(customElementName, class extends SvgDriveProfile {});
            export const DRIVE_PROFILE_ICON = customElementName;
            