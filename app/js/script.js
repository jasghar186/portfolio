$("document").ready(function () {
    // declare variables
    let openNav = $(".header__open_nav");
    let closeNav = $(".header__close_nav")
    let mobileBar = $(".header__mobile_navbar");
    let passion = $(".passion");
    let switcherSettings = $(".style_switcher__settings");
    let styleSwitcher = $(".style_switcher")
    let experienceRange = $(".percentage");
    let counter = 0
    let foregroundColor = $(".foreground_color");
    let backgroundColor = $(".background_color");
    let borderColor = $(".border_color")
    let colors = $(".color");
    let hoverColor = $(".hover_color");
    let socialHover = $(".social_hover")
    let serviceOverlay = $(".service_overlay");



    // hero text change array
    let passionArr = [
        "Frontend Devloper",
        "Wp developer",
        "frontend designer"
    ]

    // stick header on top with window scroll event
    $(window).scroll(function () {
        let windowScrolled = $(window).scrollTop();
        let breakPoint = $("body").offset().top = 100
        if (windowScrolled > breakPoint) {
            $("header").css({ "position": "fixed", "top": "0", "padding": "1rem 1rem", "box-shadow": "0px 2px 10px 0px rgba(252,252,252,0.35)" })
        } else {

            $("header").css({ "position": "relative", "padding": "1.563rem 1rem", "box-shadow": "0px 2px 10px 0px rgba(252,252,252,0)" })
        }

    })

    // open mobile nav bar on hamburger menu click
    $(openNav).click(function () {
        $(mobileBar).css({ "height": "190px", "overflow": "hidden", "padding-bottom": "20px" })
        $(this).hide()
        $(closeNav).show()
    })

    // close mobile nav bar on close button click
    $(closeNav).click(function () {
        $(mobileBar).css({ "height": "0", "overflow": "hidden", "padding-bottom": "0" })
        $(this).hide()
        $(openNav).show()
    })


    // change hero text after specific time
    let i = 0;
    function change() {
        if (i > 2) {
            i = 0
        } else {
            $(passion).html(passionArr[i])
            i++;
        }
    }

    // call change function after specific time
    setInterval(() => {
        change()
    }, 1500);

    // close and open style switcher
    $(switcherSettings).click(function () {
        if ($(styleSwitcher).css("left") === -200 + "px") {
            $(styleSwitcher).css("left", 0)

        } else {
            $(styleSwitcher).css("left", -200)
        }
    })

    $(colors).click(function (e) {
        let chosen = $(e.target).attr("data-color")

        // change foreground color of elements
        $(foregroundColor).css({ "color": chosen })

        // change background colors of elements
        $(backgroundColor).css({ "background-color": chosen })

        // change border color of elements
        $(borderColor).css("border-color", `${chosen}`);

        // change background color of service boxes on mouse hover
        $(".service").on("mouseover", function () {
            $(this).css("background", "transparent")
            $(this).children(".service_overlay").css("opacity", 1)
        }).on("mouseout", function () {
            $(this).children(".service_overlay").css("opacity", 0)
        })

        // change elements foreground color on mouse hover

        $(hoverColor).mouseover(function () {
            $(this).css("color", chosen)
        })
        $(hoverColor).mouseout(function () {
            $(this).css("color", "white")
        })


        // change social icons colors
        $(socialHover).on("mouseover", function () {
            $(this).children("i").css("color", chosen)
        }).on("mouseout", function () {
            $(this).children("i").css("color", "white")
        })

    })


    // experience range animation
    function experience() {
        if (counter > $(experienceRange).length) {
            counter = 0
        } else {
            $(experienceRange[counter]).css({ "width": $(experienceRange[counter]).attr("data-experience"), "transition": "width 0.4s" })
            counter++
        }
    }

    setInterval(() => {
        experience()
    }, 700);




})