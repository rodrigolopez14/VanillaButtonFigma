export default class SvgConfigure2 extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M13.757 2l.578.943H6.453a1.14 1.14 0 00-.965.55L1.984 9.21v5.512h1.42V12.41h6.123V7.535h6.518l-2.238-3.65h1.106l2.238 3.656h3.702c1.094 0 1.914 1.097 1.902 2.231v11.513H11.412a2.2 2.2 0 01-1.885-2.232v-5.698h-5.18v2.313H1.041V8.943l.808-1.32H1.04V6.68h1.386l2.26-3.69A2.08 2.08 0 016.453 2h7.304zm7.021 6.48H10.469v10.595c-.007.351.127.69.371.943.162.164.37.273.597.314h10.388V9.762a1.257 1.257 0 00-1.047-1.281zm-5.613 1.37a4.714 4.714 0 011.977 0l.314.073.141.984.796-.597.276.176c.56.365 1.036.844 1.399 1.405l.176.276-.597.795.983.142.063.32c.072.325.108.657.107.99l-.01.25c-.017.25-.055.5-.113.743l-.069.315-.983.141.597.798-.176.274a4.746 4.746 0 01-1.399 1.398l-.276.18-.799-.598-.138.984-.314.07a4.626 4.626 0 01-1.977 0l-.314-.07-.132-.977-.796.6-.276-.18a4.714 4.714 0 01-1.377-1.407l-.179-.277.629-.845.707.628-.186.249c.194.248.418.472.667.666l.704-.544.26.132c.133.068.27.125.412.17l.28.091.126.896c.313.04.63.04.943 0l.128-.896.28-.091c.141-.045.278-.101.409-.17l.264-.135.723.547c.248-.194.472-.418.666-.666l-.544-.726.135-.261c.067-.132.124-.268.17-.409l.088-.283.899-.125c.019-.157.028-.314.028-.472l.003-.236-.012-.235-.9-.129-.087-.28a2.829 2.829 0 00-.17-.408l-.135-.264.544-.723a3.715 3.715 0 00-.667-.666l-.722.543-.264-.132a2.697 2.697 0 00-.409-.173l-.28-.09-.129-.896c-.313-.041-.63-.041-.942 0l-.126.895-.28.091c-.142.047-.28.105-.412.173l-.26.132-.723-.543a3.614 3.614 0 00-.663.653l.543.726-.135.261a2.876 2.876 0 00-.17.409l-.09.28-.896.128c-.02.157-.03.314-.032.472H11.5c.001-.333.037-.665.107-.99l.07-.315.986-.141-.6-.795.179-.277c.363-.559.84-1.035 1.399-1.398l.276-.176.795.597.139-.984z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "configure2-icon"
customElements.define(customElementName, class extends SvgConfigure2 {});
export const CONFIGURE2_ICON = customElementName;