const xt = new Audio("https://codehs.com/uploads/dd08464bee5e8467100d6c97d7c5b007")
const y = new Audio("https://codehs.com/uploads/3d4f353072addbc51758cf1d8055082d")
const x = new Audio("https://codehs.com/uploads/1b5feaad909308cf22a8d4e0469b8848")
xt.loop = true

function playAudio(tree) { 
    tree.play();
    tree.loop
} 

function pauseAudio(tree) { 
    tree.pause();
}

function resetAudio(tree) {
    tree.currentTime = 0
}