export default class SvgAbs extends HTMLElement {
    constructor() 
    {
        super();
    }
    connectedCallback() {
        var colorFill = '#190F14'
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
        path2.setAttributeNS(null, 'd', "M15.6 3.163a9.837 9.837 0 010 18.234v-1.022a8.9 8.9 0 000-16.194zm-7.5.04v1.028a8.9 8.9 0 000 16.097v1.028a9.84 9.84 0 010-18.153zm3.803 1.644a7.431 7.431 0 017.431 7.431 7.437 7.437 0 01-7.43 7.431 7.431 7.431 0 010-14.862zm0 .94a6.494 6.494 0 106.494 6.491 6.5 6.5 0 00-6.494-6.49zm3.034 5.007c.857 0 1.185.493 1.25.856l-.88.063c-.035-.2-.135-.313-.313-.313s-.247.072-.247.188c0 .115.062.175.312.25l.338.103c.522.159.878.365.878.89 0 .597-.481.907-1.184.907-.81.018-1.216-.363-1.297-.888l.881-.06a.331.331 0 00.366.344c.184 0 .312-.068.312-.212s-.081-.172-.262-.228l-.313-.103c-.625-.2-.937-.432-.937-.938 0-.625.525-.86 1.097-.86zm-5.478.062l.938 2.85H9.5l-.106-.36h-.832l-.093.36h-.9l.919-2.85h.971zm2.707 0c.665 0 .937.313.937.719a.644.644 0 01-.34.594.666.666 0 01.456.675c0 .54-.406.862-1.035.862H10.96v-2.85h1.207zm-.088 1.616h-.297v.597h.29a.294.294 0 00.329-.31h.006c0-.171-.115-.287-.328-.287zm-3.106-.778l-.272 1.06h.544l-.272-1.06zm3.062-.213h-.253v.482h.26a.238.238 0 00.265-.247c0-.141-.084-.235-.272-.235z");
        path2.setAttributeNS(null, 'fill',colorFill)
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "abs-icon"
customElements.define(customElementName, class extends SvgAbs {});
export const ABS_ICON = customElementName;
