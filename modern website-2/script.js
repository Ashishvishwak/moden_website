
function loader() {
    var tl = gsap.timeline();
    tl.from("#loader h3", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.5
    });
    tl.to("#loader h3", {
        opacity: 0,
        x: -100,
        stagger: 0.3,
        duration: 1,
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 1,
        dispaly:"none"
        // onComplete: function () {
        //     tl.set("#loader", { display: "none" });
        // }
    });
}

loader();


function cursoreffect() {
    let cursor = document.querySelector("#cursor");
    let page1_content = document.querySelector("#page1-content");
    // let dets; // Declare dets outside the event listeners

    page1_content.addEventListener("mousemove", function (dets) {
        // dets = event; // Assign event to dets
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
        // console.log(dets)
    })

    page1_content.addEventListener("mousemove", function () {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
    })

    page1_content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })

    page1_content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    })
}


cursoreffect();


function page2() {
    gsap.from("#elem h1", {
        y: 120,
        stagger: 1,
        duration: 1,
        scrollTrigger: { // Change to scrollTrigger
            trigger: "#elem",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    });
}

page2();

