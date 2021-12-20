
export const BUTTON_CLASSNAME = "btnSEAT"
export const ICON_CLASSNAME = "Icon"
export const ICONARROW_CLASSNAME= "IconArrow"

const BUTTON_CLASS = `.${BUTTON_CLASSNAME}`
const ICON_CLASS = `.${ICON_CLASSNAME}`
const ICONARROW_CLASS= `.${ICONARROW_CLASSNAME}`

const BASE_STYLE = `
${BUTTON_CLASS} 
{
    font-family: "SEATBCN", sans-serif, Arial;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    transition: 0.2s all ease-in-out;
        
}
${ICON_CLASS}
{
    display: flex;
	align-items: center; 
}
${ICON_CLASS} svg path
{
    transition: 0.2s all ease-in-out;
}
${ICONARROW_CLASS} 
{
    margin-left: 9px;
	transition: 0.2s all ease-in-out;
}
`
const BUTTON_STYLE =`
${BUTTON_CLASS}
{
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    font-weight: 700;
    min-width: 205px;
}
`
const LINK_STYLE = `
${BUTTON_CLASS} 
{
    font-weight: 500;
    border: none;
    background: transparent;
    padding: 0;
}
${BUTTON_CLASS} svg 
{
    transition: 0.2s all ease-in-out;
    
}
${BUTTON_CLASS} svg path
{
    transition: 0.2s all ease-in-out;
}
${ICON_CLASS} 
{
    margin-right: 12.03px;

    
}
${ICON_CLASS} svg 
{
    width: 14.97px;
    height: 18.8px;
}
`
const BUTTON_BIG_STYLE = `
${BUTTON_CLASS}
{
    max-height: 48px;
    height: 48px;
    min-height: 48px;
    padding: 0 16px;
    font-size: 16px;
    line-height: 20px;
}
${ICON_CLASS}
{
    margin-right: 13.37px;
}
${ICON_CLASS} svg 
{
    width: 19.96px;
    height: 25.07px;
}
`
const BUTTON_SMALL_STYLE = `
${BUTTON_CLASS}
{
    max-height: 40px;
    height: 40px;
    min-height: 40px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 16px;
}
${ICON_CLASS}
{
    margin-right: 12.03px;
}
${ICON_CLASS} svg 
{
    width: 14.97px;
    height: 18.8px;
}
`
const LINK_BIG_STYLE = `
${BUTTON_CLASS} 
{
    font-size: 16px;
    line-height: 20px;
}
`
const LINK_SMALL_STYLE = `
${BUTTON_CLASS} 
{
    font-size: 14px;
    line-height: 16px;
}
`
const BUTTON_DARK_PRIMARY_ACTIVE_STYLE = `
${BUTTON_CLASS}
{
    background-color: #190f14;
    color: #ece9e1;
    box-shadow: none;
    
    
}
${BUTTON_CLASS} path 
{
    fill: #ece9e1;
}
${BUTTON_CLASS}:hover 
    {
        background-color: rgba(25, 15, 20, 0.8);
        box-shadow: none;
    }
`
const BUTTON_DARK_PRIMARY_INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    background-color: #d1cfd0;
	color: rgba(25, 15, 20, 0.4);
}
${BUTTON_CLASS} path 
{
    fill: rgba(25, 15, 20, 0.4);
}
                                        
`
const BUTTON_DARK_SECONDARY_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    background-color: #ffffff;
    box-shadow: inset 0 0 0 1px #190f14;
    color: #190f14;
}
${BUTTON_CLASS} path 
{
    fill: 190f14;
} 
${BUTTON_CLASS}:hover 
{
    box-shadow: inset 0 0 0 2px #190f14;
}
`
const BUTTON_DARK_SECONDARY_INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: rgba(25, 15, 20, 0.4);
    box-shadow: inset 0 0 0 1px rgba(25, 15, 20, 0.2);
}
${BUTTON_CLASS} path 
{
    fill: rgba(25, 15, 20, 0.4);
}
`
const BUTTON_LIGHT_PRIMARY_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #190f14;
    background-color: #e1d7cd;
}
${BUTTON_CLASS} path 
{
    fill: #190f14;
}
${BUTTON_CLASS}:hover 
{
    background-color: rgba(225, 215, 205, 0.6);
}
`
const BUTTON_LIGHT_PRIMARY_INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: rgba(25, 15, 20, 0.4);
    background-color: #695f5e;
}
${BUTTON_CLASS} path 
{
    fill: rgba(25, 15, 20, 0.4);
}
`
const BUTTON_LIGHT_SECONDARY_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #ece9e1;
    box-shadow: inset 0 0 0 1px #e1d7cd;
}
${BUTTON_CLASS} path 
{
    fill: #ece9e1;
}
${BUTTON_CLASS}:hover {
    box-shadow: inset 0 0 0 2px #e1d7cd;
}
`
const BUTTON_LIGHT_SECONDARY_INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: rgba(236, 233, 225, 0.4);
    box-shadow: inset 0 0 0 1px #695f5e;
}
${BUTTON_CLASS} path 
{
    fill: rgba(236, 233, 225, 0.4);
}
`
const BUTTON_PURCHASE_PRIMARY_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #ece9e1;
    background-color: #ea5d1a;
}
${BUTTON_CLASS} path 
{
    fill: #ece9e1;
}
${BUTTON_CLASS}:hover 
{
    background-color: rgba(234, 93, 26, 0.8);
}
`
const BUTTON_PURCHASE_PRIMARY_INACTIVE_STYLE =  `
${BUTTON_CLASS} 
{
    color: #ece9e1;
    background-color: #f29e76;
}
${BUTTON_CLASS} path 
{
    fill: #ece9e1;
}
`
const BUTTON_PURCHASE_SECONDARY_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #ea5d1a;
    box-shadow: inset 0 0 0 1px #ea5d1a;
}
${BUTTON_CLASS} path 
{
    fill: #ea5d1a;
}
${BUTTON_CLASS}:hover 
{
    box-shadow: inset 0 0 0 2px #ea5d1a;
}
`
const BUTTON_PURCHASE_SECONDARY_INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: rgba(234, 93, 26, 0.4);
    box-shadow: inset 0 0 0 1px rgba(234, 93, 26, 0.4);
}
${BUTTON_CLASS} path 
{
    fill: rgba(234, 93, 26, 0.4);
}   
`
const LINK_DARK_ACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: #190f14;
}
${BUTTON_CLASS} path 
{
    fill: #190f14;
}
${BUTTON_CLASS}:hover 
{
    color: rgba(25, 15, 20, 0.6);
}
${BUTTON_CLASS}:hover path 
{
    fill: rgba(25, 15, 20, 0.6);
}
`
const LINK_DARK_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #190f14;
    font-weight: 400;
    line-height: 24px;
    box-shadow: inset 0px -1px 0px 0px #190f14;							
}
${BUTTON_CLASS}:hover 
{
    box-shadow: inset 0px -1px 0px 0px rgba(25, 15, 20, 0.6);
}
`
const LINK_DARK_INACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: #d0cdce;
}
${BUTTON_CLASS} path 
{
    fill: #d0cdce;
}
`
const LINK_DARK_INACTIVE_STYLE = `
`
const LINK_LIGHT_ACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: #ece9e1;	
}
${BUTTON_CLASS} path 
{
    fill: #ece9e1;
}
${BUTTON_CLASS}:hover 
{
    color: rgba(236, 233, 225, 0.6);
}
${BUTTON_CLASS}:hover path 
{
    fill: rgba(236, 233, 225, 0.6);
}
`
const LINK_LIGHT_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #ece9e1;
    font-weight: 400;
    line-height: 24px;
    box-shadow: inset 0px -1px 0px 0px #ece9e1;
}
${BUTTON_CLASS}:hover 
{
    box-shadow: inset 0px -1px 0px 0px rgba(236, 233, 225, 0.6);
}
`
const LINK_LIGHT_INACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: rgba(236, 233, 225, 0.4);

}
${BUTTON_CLASS} path 
{
    fill: rgba(236, 233, 225, 0.4);
}
`
const LINK_LIGHT_INACTIVE_STYLE = `
`
const LINK_PURCHASE_ACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: #ea5d1a;
}
${BUTTON_CLASS} path 
{
    fill: #ea5d1a;
}
${BUTTON_CLASS}:hover 
{
    color: #f39e72;
    
}
${BUTTON_CLASS}:hover path 
{
    fill: #f39e72;
}
`
const LINK_PURCHASE_ACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    color: #ea5d1a;
    font-weight: 400;
    line-height: 24px;
    box-shadow: inset 0px -1px 0px 0px #ea5d1a;
}
${BUTTON_CLASS}:hover 
{
    box-shadow: inset 0px -1px 0px 0px rgba(234, 93, 26, 0.6);
}
`
const LINK_PURCHASE_INACTIVE_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    color: #fbdfd1;
}
${BUTTON_CLASS} path 
{
    fill: #fbdfd1;
}
`
const LINK_PURCHASE_INACTIVE_STYLE = `
`
const LINK_SHOWARROW_STYLE = `
${BUTTON_CLASS} 
{
    font-weight: 500;
    box-shadow: none;
}
${BUTTON_CLASS}:hover 
{
    box-shadow: none;
}
`
const ACTIVE_STYLE = `
${BUTTON_CLASS}:hover ${ICONARROW_CLASS}
{
     margin-left: 17px;
}
 `
const INACTIVE_STYLE = `
${BUTTON_CLASS} 
{
    cursor: not-allowed;
}
`
import {BUTTON_OPTION, LINK_OPTION, DARK_OPTION, LIGHT_OPTION, PURCHASE_OPTION, BIG_OPTION, SMALL_OPTION, ACTIVE_OPTION, INACTIVE_OPTION, PRIMARY_OPTION, SECONDARY_OPTION, SHOWARROW_OPTION} from "./constants.js"
export const addStyle = (mode = BUTTON_OPTION,size = BIG_OPTION , active = ACTIVE_OPTION, theme = DARK_OPTION, type = PRIMARY_OPTION, showArrow = SHOWARROW_OPTION) => {
    var style= BASE_STYLE
    switch (mode)
    {
        
        case BUTTON_OPTION:
            style = style + BUTTON_STYLE
            switch (size)
            {
                case BIG_OPTION:
                    style = style + BUTTON_BIG_STYLE
                    break;
                case SMALL_OPTION:
                    style = style + BUTTON_SMALL_STYLE
                    break;
            }
            switch (theme)
            {
                case DARK_OPTION:
                    switch (type)
                    {
                        case PRIMARY_OPTION:
                            {
                                switch (active)
                                {
                                    case ACTIVE_OPTION:
                                        style = style + BUTTON_DARK_PRIMARY_ACTIVE_STYLE
                                        break;
                                    case INACTIVE_OPTION:
                                        style = style + BUTTON_DARK_PRIMARY_INACTIVE_STYLE
                                        break;
                                }
                            }
                            break;
                        case SECONDARY_OPTION:
                            {
                                switch (active)
                                {
                                    case ACTIVE_OPTION:
                                        style = style + BUTTON_DARK_SECONDARY_ACTIVE_STYLE
                                        break;
                                    case INACTIVE_OPTION:
                                        style = style + BUTTON_DARK_SECONDARY_INACTIVE_STYLE
                                        break;
                                }
                            }
                            break;

                    }
                    break;
                case LIGHT_OPTION:
                    switch (type)
                    {
                        case PRIMARY_OPTION:
                            {
                                switch (active)
                                {
                                    case ACTIVE_OPTION:
                                        style = style + BUTTON_LIGHT_PRIMARY_ACTIVE_STYLE
                                        break;
                                    case INACTIVE_OPTION:
                                        style = style + BUTTON_LIGHT_PRIMARY_INACTIVE_STYLE
                                        break;
                                }
                            }
                            break;
                        case SECONDARY_OPTION:
                            {
                                switch (active)
                                {
                                    case ACTIVE_OPTION:
                                        style = style + BUTTON_LIGHT_SECONDARY_ACTIVE_STYLE
                                        break;
                                    case INACTIVE_OPTION:
                                        style = style + BUTTON_LIGHT_SECONDARY_INACTIVE_STYLE
                                        break;
                                }
                            }
                            break;
                    }
                    break;
                case PURCHASE_OPTION:
                    switch (type)
                    {
                        case PRIMARY_OPTION:
                            switch (active)
                            {
                                case ACTIVE_OPTION:
                                    style = style + BUTTON_PURCHASE_PRIMARY_ACTIVE_STYLE
                                    break;
                                case INACTIVE_OPTION:
                                    style = style + BUTTON_PURCHASE_PRIMARY_INACTIVE_STYLE
                                    break;
                            }
                            break;
                        case SECONDARY_OPTION:
                            switch (active)
                            {
                                case ACTIVE_OPTION:
                                    style = style + BUTTON_PURCHASE_SECONDARY_ACTIVE_STYLE
                                    break;
                                case INACTIVE_OPTION:
                                    style = style + BUTTON_PURCHASE_SECONDARY_INACTIVE_STYLE
                                    break;
                            }
                            break;

                    }
                    break;
            }
            break;
        case LINK_OPTION:
            style = style + LINK_STYLE
            switch (size)
            {
                case BIG_OPTION:
                    style = style + LINK_BIG_STYLE
                    break;
                case SMALL_OPTION:
                    style = style + LINK_SMALL_STYLE
                    break;
            }
            switch (theme)
            {
                case DARK_OPTION:                    
                    switch(active)
                    {
                        case ACTIVE_OPTION:
                            switch (showArrow)
                            {
                                case SHOWARROW_OPTION:
                                    style = style + LINK_DARK_ACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_DARK_ACTIVE_STYLE
                            break;
                        case INACTIVE_OPTION:
                            switch (showArrow)
                            {
                                case SHOWARROW_OPTION:
                                    style = style + LINK_DARK_INACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_DARK_INACTIVE_STYLE
                            break;

                    }
                    break;
                case LIGHT_OPTION:                    
                    switch(active)
                    {
                        case ACTIVE_OPTION:
                            switch (showArrow)
                            {
                                case SHOWARROW_OPTION:
                                    style = style + LINK_LIGHT_ACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_LIGHT_ACTIVE_STYLE
                            break;
                        case INACTIVE_OPTION:
                            if (showArrow)
                            {
                                style = style + LINK_LIGHT_INACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_LIGHT_INACTIVE_STYLE
                            break;
                    }
                    break;
                case PURCHASE_OPTION:
                    switch(active)
                    {
                        case ACTIVE_OPTION:
                            switch (showArrow)
                            {
                                case SHOWARROW_OPTION:
                                    style = style + LINK_PURCHASE_ACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_PURCHASE_ACTIVE_STYLE
                            break;
                        case INACTIVE_OPTION:
                            switch (showArrow)
                            {
                                case SHOWARROW_OPTION:
                                    style = style + LINK_PURCHASE_INACTIVE_SHOWARROW_STYLE
                            }
                            style = style + LINK_PURCHASE_INACTIVE_STYLE
                            break;

                    }
                    break;
            }
            switch (showArrow)
            {
                case SHOWARROW_OPTION:
                    style = style + LINK_SHOWARROW_STYLE
            }
            break;
    }
    switch (active) 
    {
        case ACTIVE_OPTION:
            style = style + ACTIVE_STYLE
            break;
        case INACTIVE_OPTION:
            style = style + INACTIVE_STYLE
            break;
    }
    return style;


}