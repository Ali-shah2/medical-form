console.log("Reloaded");

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


















// Multi step javascript

// dom variables
var msf_getFsTag = document.getElementsByTagName("fieldset");

// declaring the active fieldset & the total fieldset count
var msf_form_nr = 0;
var fieldset = msf_getFsTag[msf_form_nr];
fieldset.className = "msf_show";

// creates and stores a number of bullets
var msf_bullet_nr = "<div class='msf_bullet'></div>";
var msf_length = msf_getFsTag.length;
for (var i = 1; i < msf_length; ++i) {
    msf_bullet_nr += "<div class='msf_bullet'></div>";
};
// injects bullets
var msf_bullet_o = document.getElementsByClassName("msf_bullet_o");
for (var i = 0; i < msf_bullet_o.length; ++i) {
    var msf_b_item = msf_bullet_o[i];
    msf_b_item.innerHTML = msf_bullet_nr;
};

// removes the first back button & the last next button
// document.getElementsByName("back")[0].className = "msf_hide";
document.getElementsByName("next")[msf_bullet_o.length - 1].className = "msf_hide";

// Makes the first dot active
var msf_bullets = document.getElementsByClassName("msf_bullet");
msf_bullets[msf_form_nr].className += " msf_bullet_active";


// Validation loop & goes to the next step
function msf_btn_next() {
    var msf_val = true;

    var msf_fs = document.querySelectorAll("fieldset")[msf_form_nr];
    var msf_fs_i_count = msf_fs.querySelectorAll("input").length;

    if (msf_form_nr==6){
        changeLoadIconColor();
    }
    // for (i = 0; i < msf_fs_i_count; ++i) {
    //     var msf_input_s = msf_fs.querySelectorAll("input")[i];
    //     if (msf_input_s.getAttribute("type") === "button") {
    //         // nothing happens
    //     } else {
    //         if (msf_input_s.value === "") {
    //             msf_input_s.style.backgroundColor = "pink";
    //             msf_val = false;
    //         } else {
    //             if (msf_val === false) { } else {
    //                 msf_val = true;
    //                 msf_input_s.style.backgroundColor = "lime";
    //             }
    //         }
    //     };
    // };



    if (msf_val === true) {
        // goes to the next step
        var selection = msf_getFsTag[msf_form_nr];
        selection.className = "msf_hide";
        msf_form_nr = msf_form_nr + 1;
        var selection = msf_getFsTag[msf_form_nr];
        selection.className = "msf_show";
        // refreshes the bullet
        var msf_bullets_a = msf_form_nr * msf_length + msf_form_nr;
        msf_bullets[msf_bullets_a].className += " msf_bullet_active";
    }
};



console.log("loaded");