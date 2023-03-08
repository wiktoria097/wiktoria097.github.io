// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazkow



// add a piece of text at position (120, 80)
loadSprite("tlo","kartka.png")
loadSprite("bombka","bombka.png")

loadSound("muzyka" , "aniol.mp3") 

add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])

const bombka = add([
    sprite("bombka"),
    pos(260,60)
])


onKeyRelease("space", ()=> play("muzyka"))

onUpdate(()=>{

    if(bombka.pos.x<550)

    bombka.pos.x +=1
})



