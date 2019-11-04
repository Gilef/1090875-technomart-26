
var letter_popup_open_button = document.querySelector(".letter-popup-link");
var letter_popup = document.querySelector(".letter-popup");
var letter_popup_close_button = document.querySelector(".letter-popup-close");
var letter_popup_focus = letter_popup ? letter_popup.querySelector("[name=name]") : null;

function open_letter_popup(event){
    event.preventDefault();
    letter_popup.classList.toggle("popup-hide");
    letter_popup_focus.focus();
};

function close_letter_popup(event){
    event.preventDefault();
    letter_popup.classList.add("popup-hide");
};

function close_letter_popup_with_esc(event){
    if (event.key !== "Escape") return;
    
    if (!letter_popup.classList.contains("popup-hide")){
        event.preventDefault();
        letter_popup.classList.add("popup-hide")
    }
};

if (letter_popup_open_button && letter_popup_close_button){
    letter_popup_open_button.addEventListener("click", open_letter_popup);
    letter_popup_close_button.addEventListener("click", close_letter_popup);
    window.addEventListener("keydown", close_letter_popup_with_esc);
}
//letter-popup animate

var name = letter_popup.querySelector("[name=name]");
var email = letter_popup.querySelector("[name=email]");

letter_popup.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  letter_popup.addEventListener("submit", function (event) {
    if (!email.value || !name.value) {
        event.preventDefault();
      console.log("Заполните данные");
      
//map_popup

var map_popup_open_button = document.querySelector(".map");
var map_popup = document.querySelector(".map-popup");
var map_popup_close_button = document.querySelector(".map-popup-close");

function open_map_popup(event){
    event.preventDefault();
    map_popup.classList.toggle("popup-hide");
}

function close_map_popup(event){
    event.preventDefault();
    map_popup.classList.add("popup-hide");
}

function close_map_popup_with_esc(event){
    if (event.key !== "Escape") return;
    
    if (!map_popup.classList.contains("popup-hide")){
        event.preventDefault();
        map_popup.classList.add("popup-hide");
    }
};
if (map_popup_open_button && map_popup_close_button){
    map_popup_open_button.addEventListener("click", open_map_popup);
    map_popup_close_button.addEventListener("click", close_map_popup);
    window.addEventListener("keydown", close_map_popup_with_esc);
}
//buy-popup

var buy_popup_open_button = document.querySelectorAll(".buy");
var buy_popup = document.querySelector(".catalog-buy-popup");
var buy_popup_close_button = document.querySelector(".catalog-buy-close");

function open_buy_popup(event){
    event.preventDefault();
    buy_popup.classList.toggle("popup-hide");
}

function close_buy_popup(event){
    event.preventDefault();
    buy_popup.classList.add("popup-hide");
}

function close_buy_popup_with_esc(event){
    if (event.key !== "Escape") return;
    
    if (!buy_popup.classList.contains("popup-hide")){
        event.preventDefault();
        buy_popup.classList.add("popup-hide");
    }
};

if (buy_popup_open_button && buy_popup_close_button){
    // buy_popup_open_button.forEach(function(item){
    //     item.addEventListener("click", open_buy_popup);
    // }); 
    for(var i = 0; i<buy_popup_open_button.length; i++){
        buy_popup_open_button[i].addEventListener("click", open_buy_popup);
    }
    buy_popup_close_button.addEventListener("click", close_buy_popup);
    window.addEventListener("keydown", close_buy_popup_with_esc);
}

//slide

var slide_1_switch_button = document.querySelectorAll(".slide-1-button");
var slide_2_switch_button = document.querySelectorAll(".slide-2-button");
var slide_1 = document.querySelector(".slide-1");
var slide_2 = document.querySelector(".slide-2");

for(var i = 0; i<slide_1_switch_button.length; i++){
    slide_1_switch_button[i].addEventListener("click", function (event){
        event.preventDefault();
        slide_1.classList.add("current-slide");
        slide_2.classList.remove("current-slide");
        document.querySelector(".slide-button-controls.slide-1-button").classList.add("slide-active");
        document.querySelector(".slide-button-controls.slide-2-button").classList.remove("slide-active");
    });

}

for(var i = 0; i<slide_2_switch_button.length; i++){
    slide_2_switch_button[i].addEventListener("click", function (event){
        event.preventDefault();
        slide_2.classList.add("current-slide");
        slide_1.classList.remove("current-slide");
        document.querySelector(".slide-button-controls.slide-2-button").classList.add("slide-active");
        document.querySelector(".slide-button-controls.slide-1-button").classList.remove("slide-active");
    });
}
//

var srv_slide_switch_button_1 = document.querySelector(".srv-list-button-1");
var srv_slide_switch_button_2 = document.querySelector(".srv-list-button-2");
var srv_slide_switch_button_3 = document.querySelector(".srv-list-button-3");
var srv_slide_1 = document.querySelector(".srv-delivery");
var srv_slide_2 = document.querySelector(".garanty");
var srv_slide_3 = document.querySelector(".credit");

srv_slide_switch_button_1.addEventListener("click", function(event){
    event.preventDefault();
    srv_slide_1.classList.add("srv-active-slide");
    srv_slide_2.classList.remove("srv-active-slide");
    srv_slide_3.classList.remove("srv-active-slide");
    srv_slide_switch_button_1.classList.add("srv-active");
    srv_slide_switch_button_2.classList.remove("srv-active");
    srv_slide_switch_button_3.classList.remove("srv-active");
})

srv_slide_switch_button_1.addEventListener("focus", function(event){
    event.preventDefault();
    srv_slide_1.classList.add("srv-active-slide");
    srv_slide_2.classList.remove("srv-active-slide");
    srv_slide_3.classList.remove("srv-active-slide");
    srv_slide_switch_button_1.classList.add("srv-active");
    srv_slide_switch_button_2.classList.remove("srv-active");
    srv_slide_switch_button_3.classList.remove("srv-active");
})

srv_slide_switch_button_2.addEventListener("click", function(event){
    event.preventDefault();
    srv_slide_1.classList.remove("srv-active-slide");
    srv_slide_2.classList.add("srv-active-slide");
    srv_slide_3.classList.remove("srv-active-slide");
    srv_slide_switch_button_1.classList.remove("srv-active");
    srv_slide_switch_button_2.classList.add("srv-active");
    srv_slide_switch_button_3.classList.remove("srv-active");
})

srv_slide_switch_button_2.addEventListener("focus", function(event){
    event.preventDefault();
    srv_slide_1.classList.remove("srv-active-slide");
    srv_slide_2.classList.add("srv-active-slide");
    srv_slide_3.classList.remove("srv-active-slide");
    srv_slide_switch_button_1.classList.remove("srv-active");
    srv_slide_switch_button_2.classList.add("srv-active");
    srv_slide_switch_button_3.classList.remove("srv-active");
})

srv_slide_switch_button_3.addEventListener("click", function(event){
    event.preventDefault();
    srv_slide_1.classList.remove("srv-active-slide");
    srv_slide_2.classList.remove("srv-active-slide");
    srv_slide_3.classList.add("srv-active-slide");
    srv_slide_switch_button_1.classList.remove("srv-active");
    srv_slide_switch_button_2.classList.remove("srv-active");
    srv_slide_switch_button_3.classList.add("srv-active");
})

srv_slide_switch_button_3.addEventListener("focus", function(event){
    event.preventDefault();
    srv_slide_1.classList.remove("srv-active-slide");
    srv_slide_2.classList.remove("srv-active-slide");
    srv_slide_3.classList.add("srv-active-slide");
    srv_slide_switch_button_1.classList.remove("srv-active");
    srv_slide_switch_button_2.classList.remove("srv-active");
    srv_slide_switch_button_3.classList.add("srv-active");
})

// function open_popup(target){
//     target.classList.remove("popup-hide");
//     var input = target.querySelector("input");
//     if (input) input.focus()
// };

// function close_popup(event){
//     event.preventDefault();
//     letter_popup.classList.add("popup-hide");
// };

// function close_popup_with_esc(popup){
//     return function(event){
//         if (event.key !== "Escape") return;
        
//         if (!popup.classList.contains("popup-hide")){
//             event.preventDefault();
//             letter_popup.classList.add("popup-hide")
//         }
//     }
// };

 

// letter_popup_open.addEventListener("click", function(event){
//     event.preventDefault();
//     open_popup(letter_popup);
// });
// letter_popup_close.addEventListener("click", close_popup);
// window.addEventListener("keydown", close_popup_with_esc);

// function newone(target){
//     console.log (target);
// };

