$(document).ready(function(){
    $(window).scroll(function(){
        // Määritä funktio, joka tekee navbar:ista vakaan / Sticky navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up painike funktio eli näyttää/piilottaa painike /Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Verkkosivusto on yksi sivusto, jonka pitäisi olla tasainen / Scroll-up smooth
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Määritellään uudelleen sujuvasti vierittäminen valikko kohteissa napsautusta
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle valikko
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Kirjoittamalla animaatiojono, sijoitettu otsikkoon / Typing animation string, placed at header
    var typed = new Typed(".typing", {
        strings: ["Fatlum Gerguri", " Hussein Al-Bayati",],
        typeSpeed: 100,
        backSpeed: 170,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: [" Front-end Ohjelmat"],
        typeSpeed: 100,
        backSpeed: 1200,
        loop: true
    });
});