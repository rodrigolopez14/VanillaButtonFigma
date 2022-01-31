import StylesPrimary from "./primaryStyles.js"
import {EVENTS_OF_COMPONENT, DEFAULT_EVENT} from "../constants.js"
//EN ESTE ARCHIVO SE CONSTRUYE UN ARBOL PARA DAR LOS ESTILOS A DISTINTOS COMPONENTES
class  TreeStyle {
    constructor (value)
    {
       this.value  =  value;
       this. childrenProperty = null;
       this.children = []
       this.style = null
    }
    
    getStyle (path) 
    {
        
        const keys = Object.keys(path)
        if (keys.length === 0) return this.style

        const indexProperty = keys.indexOf(this.childrenProperty)
        if (indexProperty === -1) return null;
        else if (indexProperty !== -1) 
        {
            const childFiltered = this.children.filter (child => child.value === path[keys[indexProperty]])
            if (childFiltered.length === 0) return null;
            const subPath = {...path}
            delete subPath[keys[indexProperty]];
            return childFiltered[0].getStyle(subPath)
        }
    }
    addStyle (path, style) 
    {
        const keys = Object.keys(path)
        if (keys.length === 0) return
        
        if (this.childrenProperty === null)
        {
            const child = new TreeStyle (path[keys[0]])
            this.childrenProperty = keys [0]
            this.children.push(child)
            const subPath = {...path}
            delete subPath[keys[0]];
            child.addStyle(subPath,style)
            if (keys.length === 1) child.style=style
        }
        else 
        {
            const indexProperty = keys.indexOf(this.childrenProperty);
            if (indexProperty === -1) return;
            else if (indexProperty !== -1) 
            {
                const allChildrenValues = this.children.map (child => child.value)
                const indexChildren = allChildrenValues.indexOf(path[keys[indexProperty]]);
                if (indexChildren === -1) 
                {
                    const newChild = new TreeStyle (path[keys[indexProperty]])
                    this.children.push(newChild)
                    const subPathChild = {...path}
                    delete subPathChild[keys[indexProperty]];
                    newChild.addStyle(subPathChild,style)
                    if (keys.length === 1) newChild.style=style
                }
                else 
                {
                    const subPath = {...path}
                    delete subPath[keys[indexProperty]];
                    this.children[indexChildren].addStyle(subPath,style)

                }
            }
        }
    }
}

const tree = new TreeStyle ("root")

StylesPrimary.forEach(style => {tree.addStyle( style.path , style.style)})


export const setStyle = (stylesAttributes) => {
   const keys = Object.keys(stylesAttributes)
    keys.forEach (key => {
        if (stylesAttributes[key] === null) delete stylesAttributes[key]; 
    })
   const styles = tree.getStyle(stylesAttributes)
   return styles;

}

export const processStyle = (element, styleObject, events= EVENTS_OF_COMPONENT) => {
    const styles = {}
    styles [DEFAULT_EVENT] = []
    for (var i=0; i<events.length;i++)
    {
        styles[events[i]] = []
    }
    var keys = Object.keys(styleObject)
    for (var i=0;i<keys.length;i++)
    {
        
        if(events.includes(keys[i]) === false) 
        {   var assignStyleDefault = () => {
                var indexCopy = i
                return () => element.style[keys[indexCopy]]=styleObject[keys[indexCopy]]
            }
            styles[DEFAULT_EVENT].push(assignStyleDefault())
        }
        else if (events.includes(keys[i]))
        {
            var keysEvent = Object.keys(styleObject[keys[i]])
            for (var j=0;j<keysEvent.length;j++)
            {
                var assignStyleEvent = () => 
                {
                    var indexCopy = i
                    var indexCopyj = j
                    return () => element.style[keysEvent[indexCopyj]]=styleObject[keys[indexCopy]][keysEvent[indexCopyj]]
                }
                styles[keys[i]].push(assignStyleEvent())
            }
        }
    }
    return styles;
}