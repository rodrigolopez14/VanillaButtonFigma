export default class SvgDestinationSearch extends HTMLElement {
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
                    path2.setAttributeNS(null, 'd', 'M11.876 2a6.649 6.649 0 016.64 6.636 6.57 6.57 0 01-.483 2.485c-.365.904-1.318 2.626-2.348 4.395l-.518.885-.346.584h-1.057c1.375-2.297 2.951-5.021 3.427-6.197a5.73 5.73 0 10-10.627 0c.739 1.818 4.154 7.424 5.312 9.3.203-.327.482-.767.785-1.279h1.054c-.797 1.312-1.397 2.279-1.463 2.388l-.388.606-.385-.606c-.1-.172-1.506-2.43-2.921-4.831l-.314-.535c-1.097-1.875-2.141-3.748-2.523-4.704a6.57 6.57 0 01-.485-2.49A6.649 6.649 0 0111.876 2zm.485 2.755v1.412a2.527 2.527 0 011.975 1.94h1.573v1.06h-1.573c-.21.959-.956 1.71-1.915 1.924v1.473l-1.085-.003v-1.47A2.518 2.518 0 019.41 9.13H7.8v-.986h1.61c.2-1 .985-1.78 1.987-1.975V4.755h.964zm-.485 2.263l-.146.007a1.61 1.61 0 10.146-.007z');
                    path2.setAttributeNS(null, 'fill','#190F14')
                    
                    svgElem.appendChild(g);
                    g.appendChild(path2);
                    this.innerHTML=svgElem.outerHTML
                  }
            }
            
            var customElementName = 'destination-search-icon'
            customElements.define(customElementName, class extends SvgDestinationSearch {});
            export const DESTINATION_SEARCH_ICON = customElementName;
            