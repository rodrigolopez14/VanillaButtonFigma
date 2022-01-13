export default class SvgBelt extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M19.698 9.102L9.656 18.898c.177.863.318 1.584.403 2.004h3.626l1.387-5.512 1.403-1.433-.23.83-1.793 7.098h-5.19l-.092-.41c-.002-.013-.068-.354-.178-.903l-.064-.32-.112-.547-2.226 2.18H5.184l3.39-3.318c-.124-.597-.259-1.242-.398-1.895l-.212-.977a96.064 96.064 0 00-.616-2.669 1.767 1.767 0 01.304-1.547 2.013 2.013 0 011.61-.738h7.348l1.679-1.64h1.41zm-4.095 2.623h-6.34a1.033 1.033 0 00-.824.36.777.777 0 00-.128.702c.341 1.364.758 3.292 1.109 4.967l6.183-6.03zM12.102 2.22a2.95 2.95 0 110 5.901 2.95 2.95 0 010-5.901zm0 1.003a1.967 1.967 0 100 3.934 1.967 1.967 0 000-3.934z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "belt-icon"
customElements.define(customElementName, class extends SvgBelt {});
export const BELT_ICON = customElementName;



