import {LARGE_OPTION,
        MEDIUM_OPTION,
        REGULAR_BUTTON_PILL_VARIANT,
        CONTAINER_BUTTON_PILL,
        TEXT_CONTAINER,
        ACTIVE_EVENT,
        HOVER_EVENT} from "../constants.js"
const SIZE_STYLES = {}

SIZE_STYLES[LARGE_OPTION] = {}

SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT]= {}

SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT][CONTAINER_BUTTON_PILL] = {
    transition: "0.2s all ease-in-out",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
    flexBasis: "0",
    padding: "8px 16px",
    height: "32px",
    boxSizing: "border-box",
    background: "transparent",
    userSelect: "none",
    width: "57.6px",
}

SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT][CONTAINER_BUTTON_PILL][ACTIVE_EVENT] = {
    background: "#190F14",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT][TEXT_CONTAINER] = {
    background: "transparent",
    color: "#190F14",
    fontFamily: 'SEATBCN',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    userSelect: "none",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "center",
} 
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT][TEXT_CONTAINER][HOVER_EVENT] = {
    fontWeight: "500",
}
SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_PILL_VARIANT][TEXT_CONTAINER][ACTIVE_EVENT] = {
    fontWeight: "500",
    color: "#ECE9E1",
}
export {SIZE_STYLES}