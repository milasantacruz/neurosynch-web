var noload = $(".load");

$(window).on("load", function() {
    // Animate loader off screen
    noload.fadeOut("slow");
});

$(document).ready(function(){
    
    //loader
function loader(){
    var load = $(".load_icon > img");
    
    var tl_load = gsap.timeline({repeat: -1, yoyo: true});

    tl_load.to(load, 1, { y: -1800, ease: SteppedEase.config(9) });
    
    return tl_load;
}

loader();
//START
    console.log("ready");
    const home_title = $(".home_title");
    const p_items = $(".p_items");
    start();


//HOME_ANIMS

  function start(){
     var tl_text_home = gsap.timeline();

     tl_text_home.from(home_title, 2 , {opacity:100, x: -600})
       .from(p_items, 2, { opacity:0, y: 100, stagger: 2})
       

       
 }

//  SOCIAL

const social = $(".social_m");
social.hover(function(){
    $(this).addClass(['animate__animated', 'animate__pulse', 'animate__repeat-3 	']);
},function(){
    $(this).removeClass(['animate__animated', 'animate__pulse', 'animate__repeat-3 	']);
})

// menu

var nav_b = $(".navbar-burger");
var nav_m = $(".navbar-menu");

nav_b.click(function(){
    nav_b.toggleClass('is-active');
    nav_m.toggleClass('is-active');
})


    //MODALES ABOUT US

    var hItem = $(".how_item");

    hItem.each(function(a){
        $(this).on("click", function(){
            var current = $(".modal." + a);
            var close = $(".modal-close");
            //console.log(current, a);
            current.addClass("is-active");
            close.click(function(){
                current.removeClass("is-active");
            })
        })
    })

    // OUR APPROACH

    var bodies = $(".approach_body");
    var app_butt = $(".app_butt");
    var current_app_body;
  
   app_butt.each(function(index){
       
       $(this).click(function(){
      
        switch(index){
            case 7:
                current_app_body = $(".collection");
                break;
            case 6:
                current_app_body = $(".supportive");
                break;
            case 5:
                current_app_body = $(".community");
                break;
            case 4:
                current_app_body = $(".customized");
                break;
            case 3:
                current_app_body = $(".effects");
                break;
            case 2:
                current_app_body = $(".evidence");
                break;
            case 1:
                current_app_body = $(".holistic");
                break;
            case 0:
                 current_app_body = $(".our");
                 break;
            default:
                current_app_body = $(".our");
            };

            bodies.removeClass("is_on");
            current_app_body.addClass("is_on");
        
       })
   })

 


    
///////////////////////////////

// UP-CYCLE

var tl_cycle = gsap.timeline({repeat : -1, yoyo: true, delay:3, repeatDelay:2});
var c_img = $(".c_img");



tl_cycle.to(c_img, 1, { y: -3139, ease: SteppedEase.config(9) });
tl_cycle.play();



//HEXANIMS

var hexa = $("#cube1");
var hex_group = $(".hexa");

// PAGINATION

var tx_home = $(".tx_home");
var tx_how = $(".tx_how");
var tx_learn = $(".tx_learn");
var trigger_home = $(".home_container");
var trigger_how = $(".holistics_container"); 
var trigger_learn = $(".how_container"); 

var tl_home =gsap.timeline();
var tl_how =gsap.timeline();
var tl_learn =gsap.timeline();

tl_home.from(tx_home , 1,{ opacity: 0, x: "-800px", ease: "power2.inOut" });


tl_how.from(tx_how, 1, { opacity: 0, x: "-800px", ease: "power2.inOut" })
      .to(hex_group, { opacity: 100, y: 0,stagger: 0.5 });

tl_learn.from(tx_learn, 1, {opacity: 0, x: "-800px",  ease: "power2.inOut" });


tl_home.pause();
tl_how.pause();
tl_learn.pause();

var controller_1 = new $.ScrollMagic.Controller();
var controller_2 = new $.ScrollMagic.Controller();
var controller_3 = new $.ScrollMagic.Controller();


new ScrollMagic.Scene({
    triggerElement: trigger_home,
    duration: "100%",
    triggerHook: 0.5
})
.on("enter", function (e) {
    tl_home .play();
})
.on("leave", function(e){
    tl_home .reverse();
})
.addTo(controller_1)
//.addIndicators();

new ScrollMagic.Scene({
    triggerElement: trigger_how,
    duration: "100%",
    triggerHook: 0.5
}).on("enter", function (e) {
    tl_how .play();
})
.on("leave", function(e){
    tl_how .reverse();
})
.addTo(controller_2)
//.addIndicators();

new ScrollMagic.Scene({
    triggerElement: trigger_learn,
    duration: "100%",
    triggerHook: 0.5
}).on("enter", function (e) {
    tl_learn .play();
})
.on("leave", function(e){
    tl_learn .reverse();
})
.addTo(controller_3)
//.addIndicators();



// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


const auth = firebase.auth();
const db = firebase.firestore();

// STAY INFORMED

var form = $(".send_email");
var mail = $("#in_stay");
form.on("click", submitForm);

function submitForm(e){
    //console.log("enviando" + e);
    e.preventDefault();
    db.collection("users").add({
        // set property
        mail: mail.val(),
        
    });

    mail.val('');
    setTimeout(thanks, 2000);

}

function thanks(){
    var thanks = $(".thanks");
    thanks.css("display", "block");
}

// Initiate Firebase Auth.
function initFirebaseAuth() {
    // Listen to auth state changes.
    //console.log("initFirebase");
    auth.onAuthStateChanged(authStateObserver);
  }

  // Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
    return auth.currentUser.photoURL || 'https://picsum.photos/300?grayscale';
  }
  
  // Returns the signed-in user's display name.
  function getUserName() {
    return auth.currentUser.displayName;
  }

  function getUserEmail() {
    return auth.currentUser.email;
  }
  

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
    if(user){
        userComponent();
        L_I.hide();
        S_UP.hide();
        logOut.show();
        // console.log("user logged in : " + displayName, email);
    }else{
        L_I.show();
        S_UP.show();
        logOut.hide();
        log_success.text("Welcome !");
        var usComp = $(".user_component");
        usComp.hide();

        //console.log("user logged out");
    }
  }

  //USER COMPONENT
  function userComponent(){
    var user_component = $(".user_component");
    var profilePic = getProfilePicUrl();
    var userName = getUserName();
    var userEmail = getUserEmail();
    var media_pic = $(".media_pic");
    var media_name = $(".media_name");
    var media_email = $(".media_email");

    media_pic.attr('src', profilePic);
    media_name.text(userName);
    media_email.text(userEmail);
    user_component.show();


  }


  //FUNCTION SIGNUP

  function signUp(e){
    e.preventDefault();
    //get user info
    var name = $(".signUp_name").val();
    var email = $(".signUp_email").val();
    var password = $(".signUp_password").val();
   

       auth.createUserWithEmailAndPassword(email, password).catch(function(error){
        
        var errorCode = error.code;
        emailConfirm.text(errorCode);
        //console.log("error:" + errorCode);

    }).then(function(){
        var curr = auth.currentUser;

        if(curr){
            emailConfirm.text("We are sending you a e-mail verification, come back and log in");

            //console.log("gotUser" + curr.displayName);
            curr.updateProfile({
                displayName: name,
            });

            curr.sendEmailVerification().then(function(){
                //console.log("sending email verification");
    
            }).catch(function(error){
                //console.log("an error happened" + error);
            });


        };

        
    });

   
    
  };

  

  //FUNCTION LOGIN
  function logIn(e){
    e.preventDefault();
    const email = $(".login_email").val();
    const password = $(".login_password").val();

    auth.signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        log_success.text(errorCode);
        console.log("err:" + errorCode);
    }).then(user => {
        log_success.text("Welcome !  "+ getUserName());
        console.log("succes:" + user);
    });

  }


  // USER MODAL 

var buttonUser = $("#user_component");
var userModal = $(".m_user");
var close = $(".modal-close");

buttonUser.on("click", function(){
    userModal.addClass("is-active");
})

  //SIGNUP MODAL
var S_UP = $("#sign_up");
var modal_S_UP = $(".m_sup"); 


S_UP.on("click", function(){
    modal_S_UP.addClass("is-active");
});

//   LOGINMODAL

var L_I = $("#log_in");
var modal_L_I = $(".m_logIn"); 


L_I.on("click", function(){
    
    modal_L_I.addClass("is-active");
});

close.on("click", function(){
    modal_L_I.removeClass("is-active");
    modal_S_UP.removeClass("is-active");
    userModal.removeClass("is-active");
    console.log("clos");
});

  //FUNCTION LOGOUT

  function logingOut(e){
    e.preventDefault();
    userModal.removeClass("is-active");
    auth.signOut();
  }

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// FRONT-END
// Shortcuts to DOM Elements.
const signUpButt = $(".b_sup");
const clearInp = $(".control > input")
const logInButt = $(".b_li");
const logOut = $("#log_out");
const emailConfirm  = $(".emailConfirm");
const log_success = $(".logIn_success");

//EVENTS
// SIGNUP
signUpButt.on("click", function(e){
    signUp(e);
    emailConfirm.css("display", "block");
    clearInp.val('');
  ;
});
 
//LOGIN
logInButt.on("click", function(e){
    logIn(e);
    log_success.css("display", "block");
    clearInp.val('');
});

//LOGOUT
logOut.on("click", logingOut);

initFirebaseAuth();

});



