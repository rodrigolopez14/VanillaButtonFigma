export default class SvgJourneyData extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M12 4a8 8 0 108 7.997A8.008 8.008 0 0012 4zm2.048 10.174H9.955l-.862-3.423h5.823l-.868 3.423zm-9.205-2.177c0-.253.014-.505.04-.756l2.722-.499a.695.695 0 01.757.527l.52 2.059-4.027-.939a6.051 6.051 0 01-.012-.392zm10.81-.725a.667.667 0 01.708-.535l2.757.507c.028.249.042.5.042.75v.395l-4.028.939.52-2.056zM12.01 4.829a7.17 7.17 0 016.958 5.535l-2.482-.457a1.465 1.465 0 00-.495.023v-.02H8.014v.028c-.179-.04-.364-.05-.546-.028l-2.44.448A7.17 7.17 0 0112 4.84l.011-.01zm-7.05 8.448l4.146.967 1.19 4.705a7.18 7.18 0 01-5.336-5.672zm6.244 5.832l-1.037-4.095h3.67l-1.04 4.095a6.692 6.692 0 01-1.593 0zm2.504-.16l1.179-4.705 4.143-.967a7.182 7.182 0 01-5.322 5.672z');
                    path2.setAttributeNS(null, 'fill',colorFill)
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'journey-data-icon'
            customElements.define(customElementName, class extends SvgJourneyData {});
            export const JOURNEY_DATA_ICON = customElementName;
            