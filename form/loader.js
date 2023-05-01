
//loading js 
var loadIcons = [
    document.getElementById("load-icon-1"),
    document.getElementById("load-icon-2"),
    document.getElementById("load-icon-3")
];

var loadHeading = [
    document.getElementById("load-heading-1"),
    document.getElementById("load-heading-2"),
    document.getElementById("load-heading-3")
];

var loadLine = [
    document.getElementById("load-line-1"),
    document.getElementById("load-line-2")
];

loadIcons[0].className = defaultParentClasses;


// define the blink interval and blue fill time
var blinkInterval = 2000; // 2 seconds
var blueFillTime = 2000; // 2 seconds

var lineBlue = "-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-blue-600";
var defaultParentClasses = "relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-white border-2 border-gray-300 delay-300";
var headingBlue = "tracking-wide uppercase transform transition-transform duration-500 text-base font-semibold text-blue-600";
var headingBlack = "tracking-wide uppercase transform transition-transform duration-500 text-base font-semibold";
var blinkBlueParentClass = "relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-2 primary-border bg-white primary-blue"
var blinkParentClasses = "relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-2 primary-border bg-white primary-blue";
var blinkChild = "w-full h-full border-2 primary-border rounded-full animate-ping";
var blueFilled = "relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-blue-600 border-2 border-blue-300";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeLoadIconColor() {
    for (let i = 0; i < loadIcons.length; i++) {
        loadIcons[i].className = blinkParentClasses;
        loadIcons[i].children[0].className = "text-white absolute w-6 h-6 primary-text";
        loadHeading[i].className = headingBlue;

        var loadIconChild = document.createElement("div");
        loadIconChild.className = blinkChild;
        loadIcons[i].appendChild(loadIconChild);

        await sleep(2000);

        loadIcons[i].className = blueFilled;

        if (i < loadLine.length) {
            loadLine[i].className = lineBlue;
        }

        loadIcons[i].removeChild(loadIconChild);
        loadHeading[i].className = headingBlack;
        loadIcons[i].className = blueFilled;
    }
}

//changeLoadIconColor();

// end loading screen 