let tl = gsap.timeline()

tl.from(".web-app-text h1", {
    x: -100,
    duration: 1,
    opacity: 0,
    delay: 0.5,
})
tl.from(".letstalk-txt", {
    x: -100,
    duration: 0.2,
    opacity: 0,
})
tl.from(".email-txt", {
    x: -100,
    duration: 0.2,
    opacity: 0,
})
// tl.from(".about-txt", {
//     x: -100,
//     duration: 0.5,
//     opacity: 0,
// })
tl.from(".about-txt span", {
    x: 300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    delay: -0.2
})
tl.from(".animate-bounce", {
    y: 50,
    duration: 0.4,
    opacity: 0,
    delay: -0.2
})
tl.from("nav div ul", {
    y: -50,
    duration: 0.5,
    opacity: 0
})
tl.from(".meet", {
    scale: 0,
    duration: 1,
    opacity: 0
})