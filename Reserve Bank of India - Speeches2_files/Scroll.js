﻿//Provide the scroll option when content width exceeds the limit
function DoubleScroll(element, width) {
    var scrollbar = document.createElement('div');
    scrollbar.appendChild(document.createElement('div'));
    if (element.scrollWidth >= 750) {
        scrollbar.style.display = 'block';
    }
    else {
        scrollbar.style.display = 'none';
    }
    scrollbar.style.overflow = 'auto';
    scrollbar.style.overflowY = 'hidden';

    scrollbar.firstChild.style.width = element.scrollWidth + 'px';
    scrollbar.firstChild.style.paddingTop = '1px';
    scrollbar.firstChild.appendChild(document.createTextNode('\xA0'));
    scrollbar.onscroll = function () {
        element.scrollLeft = scrollbar.scrollLeft;
    };
    element.onscroll = function () {
        scrollbar.scrollLeft = element.scrollLeft;
    };
    element.parentNode.insertBefore(scrollbar, element);
}


function DoubleScrollWithTree(element) {
   // alert(element.scrollWidth);
    if (element.scrollWidth > 963) {
        $("#doublescroll").css("width", "963");
        $("#doublescroll").css("height", "700");
        $("#doublescroll").css("overflow", "auto");

    }
}

function DoubleScrollWithoutTree(element) {
    //var scrollbar = document.createElement('div');
    //scrollbar.appendChild(document.createElement('div'));
    //alert(element.scrollWidth);
    if (element.scrollWidth >= 1061) {
        $("#doublescroll").css("width", "1061");
        $("#doublescroll").css("height", "700");
        $("#doublescroll").css("overflow", "auto");

    }
    //    if (element.scrollWidth >= 1024) {
    //        scrollbar.style.display = 'block';
    //    }
    //    else {
    //        scrollbar.style.display = 'none';
    //    }
    //    scrollbar.style.overflow = 'auto';
    //    //scrollbar.style.overflowY = 'hidden';

    //    scrollbar.firstChild.style.width = element.scrollWidth + 'px';
    //    scrollbar.firstChild.style.paddingTop = '1px';
    //    scrollbar.firstChild.appendChild(document.createTextNode('\xA0'));
    //    scrollbar.onscroll = function () {
    //        element.scrollLeft = scrollbar.scrollLeft;
    //    };
    //    element.onscroll = function () {
    //        scrollbar.scrollLeft = element.scrollLeft;
    //    };
    //    element.parentNode.insertBefore(scrollbar, element);


    //    var scrollbarH = document.createElement('div');
    //    scrollbarH.appendChild(document.createElement('div'));
    //    alert(element.scrollWidth);
    //    if (element.scrollWidth >= 1024) {
    //        scrollbarH.style.display = 'block';
    //    }
    //    else {
    //        scrollbarH.style.display = 'none';
    //    }
    //    scrollbarH.style.overflow = 'auto';
    //    //scrollbarH.style.overflowY = 'hidden';

    //    scrollbarH.firstChild.style.height = 500 + 'px';
    //    scrollbarH.firstChild.style.paddingTop = '1px';
    //    scrollbarH.firstChild.appendChild(document.createTextNode('\xA0'));

    //    scrollbarH.onscroll = function () {
    //        element.scrollTop = scrollbarH.scrollTop;
    //    };
    //    element.onscroll = function () {
    //        scrollbarH.scrollTop = element.scrollTop;
    //    };
    //    element.parentNode.insertBefore(scrollbar, element);
    //  
}
