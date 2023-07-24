//인라인 모델 호출 시
function red(e){
    // e.target.style.backgroundColor = "red"
    console.log(e)
}
function blue(e){
    e.target.style.backgroundColor = "blue"
}

//표준 모델 호출 시
// document.addEventListener("DOMContentLoaded",
//     function(e){
//         let button = document.querySelector("#btn")
//         button.addEventListener("mouseover",
//             function(e){
//                 e.target.style.backgroundColor = "red"
//             })
//         button.addEventListener("mouseleave",
//             function(e){
//                 e.target.style.backgroundColor = "blue"
//             })
//     }
// )