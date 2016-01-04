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
        };
    }
    console.log(getElementTopOffset(currentElement));
    console.log("====");
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


function claCustomization(config) {
    elementsArray.css(config);
}