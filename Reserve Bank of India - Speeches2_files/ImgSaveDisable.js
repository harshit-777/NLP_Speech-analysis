﻿//to disable to right click option
function nocontext(e) {
    var clickedTag = (e == null) ? event.srcElement.tagName : e.target.tagName;
    if (clickedTag == "IMG") return false;
}
document.oncontextmenu = nocontext;
