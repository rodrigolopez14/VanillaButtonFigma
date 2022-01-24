export default class SvgSunroof extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12.517 7.753a6.35 6.35 0 011.747.59 33.275 33.275 0 013.264 1.861.494.494 0 00.178.07l.198.018c1.76.152 3.89.392 4.783.906.073.034.579.376 1.07 1.412l.048.096-.087 1.74.138.163-.02.517-.564.333a1.94 1.94 0 01-.706.214h-.085c-.203.02-.491.057-.912.057a2.304 2.304 0 01-4.345-.037l-8.99-.06v-.846l8.87.045a2.304 2.304 0 014.606.031 8.32 8.32 0 00.686-.048h.09c.134-.014.265-.052.385-.113v-.178l.093-1.64a2.651 2.651 0 00-.706-.972c-.537-.307-2.027-.576-4.41-.782l-.2-.017a1.352 1.352 0 01-.566-.2 35.387 35.387 0 00-3.193-1.807 5.647 5.647 0 00-1.525-.52zm-3.891-.189l.03.847c-2.182.088-4.556.37-4.579.37l-.381.023-1.892 1.892-.296.192-.014 1.129-.365 1.44c.11.355.242.703.393 1.042l.452.113a2.31 2.31 0 014.585.141 2.307 2.307 0 01-4.54.737l-.93-.232-.07-.056c-.079-.06-.29-.223-.731-1.593l-.037-.115.413-1.624v-1.293l.036-.085c.048-.127.082-.147.613-.483l1.05-1.058-.203-.232.2-.68L4 7.937c-.002 0 2.407-.29 4.626-.373zm10.777 5.918a1.46 1.46 0 100 2.92 1.46 1.46 0 000-2.92zm-15.15 0a1.46 1.46 0 100 2.92 1.46 1.46 0 000-2.92zm.756-4.176l2.42.847 7.36.367c.404.21.98.523 1.664.93l-9.185-.452-2.824-.991.565-.7zM9.4 6.212l.065.845-3.84.296-.065-.844 3.84-.297z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'sunroof-icon'
            customElements.define(customElementName, class extends SvgSunroof {});
            export const SUNROOF_ICON = customElementName;
            