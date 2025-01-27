function mouseAnimation() {
    const mousesec = document.querySelector(".mouse-sec");
    const mouseCursor = document.querySelector(".mouse");

    mousesec.addEventListener('mouseenter', function () {
        gsap.to(mouseCursor, {
            opacity: 1,
            scale: 1
        })
    })
    mousesec.addEventListener('mouseleave', function () {
        gsap.to(mouseCursor, {
            opacity: 0,
            scale: 0
        })
    })
    mousesec.addEventListener('mousemove', function (dets) {
        gsap.to(mouseCursor, {
            left: dets.x,
            top: dets.y
        })
    })
}
mouseAnimation()

// gsap.from('.amin-text', {
//     y: 100,
//     opacity: 0,
//     delay: 0.5,
//     duration: 0.9,
//     stagger: 0.3
// })