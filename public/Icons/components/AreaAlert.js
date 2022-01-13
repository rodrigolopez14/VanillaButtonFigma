export default class SvgAreaAlert extends HTMLElement {
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
        path2.setAttributeNS(null, 'd', "M11.933 2a6.704 6.704 0 016.695 6.692 6.625 6.625 0 01-.486 2.505c-.368.911-1.33 2.648-2.368 4.432l-.348.595-.262.445-.26.44h-1.067c.173-.289.35-.585.527-.884l.354-.6c1.12-1.908 2.195-3.825 2.575-4.764a5.778 5.778 0 10-10.716 0c.745 1.833 4.189 7.486 5.356 9.378.176-.283.407-.65.662-1.073l.13-.217h1.063c-.592.975-1.077 1.76-1.317 2.15l-.12.195-.024.038-.015.025-.391.611-.388-.611c-.187-.32-4.89-7.859-5.806-10.154a6.625 6.625 0 01-.489-2.511A6.704 6.704 0 0111.933 2zm-.012 10.814a1.387 1.387 0 11.006 2.774 1.387 1.387 0 01-.006-2.774zm.004.913a.47.47 0 10-.002.941.47.47 0 00.002-.94zm1.63-8.891v.916h-1.943a.327.327 0 00-.332.288v.07l.366 4.782h.54l.306-3.26.917.082-.373 4.094h-2.23l-.44-5.628a1.247 1.247 0 011.098-1.336l.148-.008h1.944z");
        path2.setAttributeNS(null, 'fill','#190F14')
        
        svgElem.appendChild(g);
        g.appendChild(path2);
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "area-alert-icon"
customElements.define(customElementName, class extends SvgAreaAlert {});
export const AREA_ALERT_ICON = customElementName;

