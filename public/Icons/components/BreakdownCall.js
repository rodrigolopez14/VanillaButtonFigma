export default class SvgBreakdownCall extends HTMLElement {
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
		path2.setAttributeNS(null, 'd', "M4.739 8.258c1.76 0 2.566.939 2.736 2.064l-1.268.122c-.095-.678-.512-1.173-1.43-1.173-.699 0-1.184.254-1.184.861 0 .512.322.804 1.173 1.061l.807.238c1.068.318 2.081.766 2.081 2.108s-1.017 2.132-2.678 2.132c-1.762 0-2.637-.871-2.783-2.122l1.268-.095c.095 1.017.892 1.214 1.505 1.214.834 0 1.383-.34 1.383-1.061 0-.722-.502-.902-1.135-1.082l-.807-.244c-1.468-.444-2.119-.986-2.119-2.081 0-1.336 1.061-1.942 2.451-1.942zm7.346.01c2.122 0 3.617 1.627 3.617 3.701a3.576 3.576 0 01-3.617 3.702c-2.122 0-3.617-1.64-3.617-3.702 0-2.074 1.495-3.701 3.617-3.701zm6.946-.01c1.759 0 2.562.939 2.735 2.064l-1.271.122c-.092-.678-.509-1.173-1.427-1.173-.702 0-1.183.254-1.183.861 0 .512.339.804 1.173 1.061l.803.238c1.071.318 2.085.766 2.085 2.108s-1.017 2.132-2.682 2.132c-1.766 0-2.647-.871-2.786-2.122l1.268-.095c.095 1.017.888 1.214 1.505 1.214.83 0 1.38-.34 1.38-1.061 0-.722-.502-.902-1.136-1.082l-.803-.244c-1.468-.444-2.116-.986-2.116-2.081 0-1.336 1.061-1.942 2.455-1.942zm-6.946 1.156c-1.326 0-2.319 1.067-2.319 2.555 0 1.489.993 2.556 2.319 2.556 1.325 0 2.308-1.07 2.308-2.556 0-1.488-.983-2.555-2.308-2.555z");
		path2.setAttributeNS(null, 'fill',colorFill)

        svgElem.appendChild(g);
		g.appendChild(path2)
        this.innerHTML=`${svgElem.outerHTML}`
      }
}

var customElementName = "breakdown-call-icon"
customElements.define(customElementName, class extends SvgBreakdownCall {});
export const BREAKDOWN_CALL_ICON = customElementName;
