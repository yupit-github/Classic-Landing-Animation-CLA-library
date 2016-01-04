var windowHeight,
    elementsArray;

initEvents();

function initEvents() {
    /*
     * DOM ready event
     */
    $(function() {
        elementsArray = $(".animated-on-scroll");
    });

    /*
     * Window.load event
     */
    $(window).load(function() {
        setWindowHwightProperty();
        initAnimationOnScroll();
    });

    $(window).scroll(initAnimationOnScroll);

    /*
     * Window.resize event
     */
    $(window).resize(setWindowHwightProperty);
}

function initAnimationOnScroll() {
    var currentElement,
        needScrollValue;

    for (var i = 0; i < elementsArray.length; i++) {
        currentElement = $(elementsArray[i]);
        needScrollValue = (getElementTopOffset(currentElement) - windowHeight) + (windowHeight) * 10 / 100;

        if (getWindowScroll() > needScrollValue) {
            if (!currentElement.hasClass("already-animated")) {
                currentElement.addClass("already-animated");
            }
        }
    }
}


function getWindowScroll() {
    return $(window).scrollTop();
}

/*
 * @name getElementTopOffset;
 * @param el - jQuery object. Needs some as this: getElementTopOffset($(elementsArray[0]));
 */

function getElementTopOffset(el) {
    return el.offset().top;
}

function setWindowHwightProperty() {
    windowHeight = $(window).height();
}


function claCustomization(customizationConfig) {
    elementsArray.css(customizationConfig);
}

function getScrollBarWidth() {
    var scrollbarWidth = function() {
        var a, b, c;
        if (c === undefined) {
            a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
            b = a.children();
            c = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
        }
        return c;
    };

    return scrollbarWidth();
}

function getFullScreenWidth(scrollbarWidth) {
    var widthWithoutScrollBar = $("body").width(),
        fullScreenWidth = widthWithoutScrollBar + scrollbarWidth;

    return fullScreenWidth;
}