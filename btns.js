let compare = false;
let sidebarOpen = false;

let toggleSidebar = function () {
    let sidebar = document.querySelector(".sidebar");
    let hamburger = document.querySelector(".hamburger");
    
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add("active");
        hamburger.classList.add("active");
    } else {
        sidebar.classList.remove("active");
        hamburger.classList.remove("active");
    }
}

let onAndOff = function () {
    let body = document.querySelector("body");
    let topbar = document.querySelector(".topbar");
    let topbarLeft = document.querySelector(".topbar-left");
    let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");
    let p = document.querySelector("p");
    let buttonswitch = document.querySelector(".inner-btn");
    let outerswitch = document.querySelector(".outer-btn");
    let icons = document.querySelectorAll("i");
    let circle = document.querySelector(".circle");
    let sidebar = document.querySelector(".sidebar");
    let links = document.querySelectorAll(".links a");
    let chatLinks = document.querySelectorAll(".chat a");
    let bodyContent = document.querySelector(".body");
    let back = document.querySelector(".back");
    let h3s = document.querySelectorAll("h3");
    let h4s = document.querySelectorAll("h4");
    let h6s = document.querySelectorAll("h6");
    let h5s = document.querySelectorAll("h5");
    let phps = document.querySelectorAll(".php");
    let checkboxes = document.querySelectorAll(".checkbox");
    let spans = document.querySelectorAll("span");
    let buttons = document.querySelectorAll("button");
    let container = document.querySelector(".container");
    let moneyCards = document.querySelectorAll(".money, .achieve");
    let expText = document.querySelector(".exp");
    let hamburger = document.querySelector(".hamburger");

    if (compare === false){
        // Toggle dark mode on
        body.classList.add("dark-mode");
        topbar.classList.add("dark-mode");
        topbarLeft.classList.add("dark-mode");
        h1.classList.add("dark-mode");
        h2.classList.add("dark-mode");
        p.classList.add("dark-mode");
        outerswitch.classList.add("dark-mode");
        buttonswitch.classList.add("dark-mode");
        circle.classList.add("dark-mode");
        sidebar.classList.add("dark-mode");
        bodyContent.classList.add("dark-mode");
        if (back) back.classList.add("dark-mode");
        if (container) container.classList.add("dark-mode");
        if (expText) expText.classList.add("dark-mode");
        if (hamburger) hamburger.classList.add("dark-mode");
        
        icons.forEach(icon => icon.classList.add("dark-mode"));
        links.forEach(link => link.classList.add("dark-mode"));
        chatLinks.forEach(link => link.classList.add("dark-mode"));
        h3s.forEach(h3 => h3.classList.add("dark-mode"));
        h4s.forEach(h4 => h4.classList.add("dark-mode"));
        h6s.forEach(h6 => h6.classList.add("dark-mode"));
        h5s.forEach(h5 => h5.classList.add("dark-mode"));
        phps.forEach(php => php.classList.add("dark-mode"));
        checkboxes.forEach(checkbox => checkbox.classList.add("dark-mode"));
        spans.forEach(span => span.classList.add("dark-mode"));
        buttons.forEach(button => button.classList.add("dark-mode"));
        moneyCards.forEach(card => card.classList.add("dark-mode"));
        
        buttonswitch.style.left = "20px";
        compare = true;
    }
    else if (compare === true){
        // Toggle dark mode off
        body.classList.remove("dark-mode");
        topbar.classList.remove("dark-mode");
        topbarLeft.classList.remove("dark-mode");
        h1.classList.remove("dark-mode");
        h2.classList.remove("dark-mode");
        p.classList.remove("dark-mode");
        outerswitch.classList.remove("dark-mode");
        buttonswitch.classList.remove("dark-mode");
        circle.classList.remove("dark-mode");
        sidebar.classList.remove("dark-mode");
        bodyContent.classList.remove("dark-mode");
        if (back) back.classList.remove("dark-mode");
        if (container) container.classList.remove("dark-mode");
        if (expText) expText.classList.remove("dark-mode");
        if (hamburger) hamburger.classList.remove("dark-mode");
        
        icons.forEach(icon => icon.classList.remove("dark-mode"));
        links.forEach(link => link.classList.remove("dark-mode"));
        chatLinks.forEach(link => link.classList.remove("dark-mode"));
        h3s.forEach(h3 => h3.classList.remove("dark-mode"));
        h4s.forEach(h4 => h4.classList.remove("dark-mode"));
        h6s.forEach(h6 => h6.classList.remove("dark-mode"));
        h5s.forEach(h5 => h5.classList.remove("dark-mode"));
        phps.forEach(php => php.classList.remove("dark-mode"));
        checkboxes.forEach(checkbox => checkbox.classList.remove("dark-mode"));
        spans.forEach(span => span.classList.remove("dark-mode"));
        buttons.forEach(button => button.classList.remove("dark-mode"));
        moneyCards.forEach(card => card.classList.remove("dark-mode"));
        
        buttonswitch.style.left = "2px";
        compare = false;
    }
}