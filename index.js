if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    validate();
}

function validate() {
    let nme = document.forms["loginForm"]["username"].value;
    let password = document.forms["loginForm"]["password"].value
    if (nme == "Jane" && password == 4986) {
        document.getElementById("login").innerHTML = `<h2>Hello Jane!</h2>
        <p>What can I say, you have been a brilliant manager! I have enjoyed working with you.</p>
        <p>I may never had explored the coding world if it wasn't for the opportunties I had as part of this team.</p>
        <p>Thanks for being so supportive of my new career!</p>
        <p>Please do keep in touch!</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Best Manager</p>
        <img id="profile" src="images/jane.png" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Claire" && password == 5643) {
        document.getElementById("login").innerHTML = `<h2>Hello Claire!</h2> 
        <p>I feel confident leaving the Management students in your hands,you always have their best interests at heart</p>
        <p> and you don't let a challenge get in the way of that</p> 
        <p>I have really enjoyed working with you. I'll see you in the Architect soon, the wine is on me! 🥂</p>
        <p>P.S hope you have enjoyed my tech alternative to the presentation you suggested.. 😉</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Kind Colleague</p>
        <img id="profile" src="images/claire.png" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Ali" && password == 7543) {
        document.getElementById("login").innerHTML = `<h2>Hello Ali!</h2>
        <p>I don't know how I will cope in my new job without your invaluable tech support!</p>
        <p>You always work above and beyond for your BBs, just make sure you get the opportunities you deserve</p>
        <p>Thanks for everything, it's been great working with you</p>
        <p>Please do keep in touch!</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Cheerful Colleague</p>
        <img id="profile" src="images/Ali.png" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Laura" && password == 6713) {
        document.getElementById("login").innerHTML = `<h2>Hello Laura!</h2>
        <p>Thanks for all your support and help! You have been amazing to work alongside</p>
        <p>I hope you get an opporunity to explore your carpentry skills further🔨</p>
        <p>P.S I hope you don't forget I exist, when I am no longer in the office</p>
        <p>Although I am sure you will be cursing me for the Flows.. </p>
        <p>Please do keep in touch!</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Helpful Colleague</p>
        <img id="profile" src="images/laura.png" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Eileen" && password == 5609) {
        document.getElementById("login").innerHTML = `<h2>Hello Eileen!</h2>
        <p>You always bring such joy and fun to any room with your laugh and expressive story telling!</p>
        <p>You are doing an amazing job, don't let it get too much for you</p>
        <p>Thanks for everything, I have enjoyed working with you!</p>
        <p>Please do keep in touch!</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Fun Colleague</p>
        <img id="profile" src="images/eileen.png" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Tess" && password == 7091) {
        document.getElementById("login").innerHTML = `<h2>Hello Tess!</h2> 
        <p>Thanks for being a brilliant colleague and for supporting and encouraging me!</p>
        <p>I have really enjoyed working with you, I am confident leaving the Management Suite in your hands!</p>
        <p>Please do keep in touch</p>
        <p>P.S.I hope you get the opportunity to travel the world🌍</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Friendliest Colleague</p>
        <img id="profile" src="images/tess.jpg" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    } else if (nme == "Diana" && password == 5632) {
        document.getElementById("login").innerHTML = `<h2>Hello Diana!</h2>
        <p>Thanks for believing in me and supporting my career progression!</p>
        <p>I may never had explored the coding world if it wasn't for the opportunties I had as part of this team.</p>
        <p>I have enjoyed working with you, I hope the new starts bring some new ideas to the team</p>
        <p>Please do keep in touch!</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Supportive Colleague</p>
        <img id="profile" src="images/diana.jpg" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    }
    else if (nme == "Catherine" && password == 7856) {
        document.getElementById("login").innerHTML = `<h2>Hello Catherine!</h2>
        <p>Thanks for being a fabulous colleague and always being so quick to help!</p>
        <p>I have enjoyed working with you and will see you soon at book club</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star" id="star" onclick="dropStar()"></span>
        <p id="message">5/5 Friendly Colleague</p>
        <img id="profile" src="images/Catherine.jfif" alt="profile photo" class="slow-spin" onclick="gif()">`
        return false;
    }
    else if (nme == "Henrietta" && password == 3561) {
        document.getElementById("login").innerHTML = `<h2>Hello Henrietta!</h2>
        <p>Congrats on getting the permanent position!</p>
        <p>I haven't had a chance to work with you much, but you have taken to the role brillliantly</p>
        <p>I am sure you will smash it!</p>
        <img src="images/HenriettaGif.gif" id="gif">`
        return false;
    } else {
        document.getElementById("login").innerHTML = `<span><img src="images/jpGif.gif" id="error">
        <input type="submit" value="Try Again" id="back" class="back" onclick="validate()"></span>`
        return false;
    }

}

function dropStar() {
    star = document.getElementById("star").style.color = "teal";
    document.getElementById("message").innerHTML = ("<i>Are 5 stars not enough!? Okay lets make it 4!</i>")
}

function gif() {
    let photo = document.getElementById("profile");
    if (photo.getAttribute('src') == "images/jane.png") {
        document.getElementById("login").innerHTML = `<img src="images/bcdojrp-new-staff.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/claire.png") {
        document.getElementById("login").innerHTML = `<img src="images/claireGif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/Ali.png") {
        document.getElementById("login").innerHTML = `<img src="images/aliGif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/eileen.png") {
        document.getElementById("login").innerHTML = `<img src="images/EileenGif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/laura.png") {
        document.getElementById("login").innerHTML = `<img src="images/laura2gif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/tess.jpg") {
        document.getElementById("login").innerHTML = `<img src="images/TessGif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/diana.jpg") {
        document.getElementById("login").innerHTML = `<img src="images/meetingGif.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/photo.jfif") {
        document.getElementById("login").innerHTML = `<img src="images/leaving.gif" id="gif">`
    }
    if (photo.getAttribute('src') == "images/Catherine.jfif") {
        document.getElementById("login").innerHTML = `<img src="images/catherineGif.gif" id="gif">`
    }
}

function funny() {
    document.getElementById("login").innerHTML = `<img src="images/cloud.gif" id="gif">
    <input type="submit" value="Try Again" id="back" class="back" onclick="validate()"></span>`
}