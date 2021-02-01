const $titleContainer1 = document.getElementById('titleContainer1')
const $titleContainer2 = document.getElementById('titleContainer2')
const $titleContainer3 = document.getElementById('titleContainer3')
const $titleContainer4 = document.getElementById('titleContainer4')
const $titleContainer5 = document.getElementById('titleContainer5')
const $titleContainer6 = document.getElementById('titleContainer6')
// const $category4 = document.getElementById('category1')
const $tvContainer1 = document.getElementById('tvContainer1')



const $tvContainer = $titleContainer1.nextElementSibling


function showHide (e) {
    if (e.nextElementSibling.style.display === "flex") {
        e.nextElementSibling.style.display = "none";
      } else {
        e.nextElementSibling.style.display = "flex";
      }

}
// function showHide () {
//     if ($titleContainer1.nextElementSibling.style.display === "flex") {
//         $titleContainer1.nextElementSibling.style.display = "none";
//       } else {
//         $titleContainer1.nextElementSibling.style.display = "flex";
//       }

// }


$titleContainer1.addEventListener('click', () =>{
    // $modal1.style.animation = `animationOut .8s forwards`;
    console.log("click");
    showHide($titleContainer1)
})
$titleContainer2.addEventListener('click', () =>{
    console.log("click");
    showHide($titleContainer2)
})
$titleContainer3.addEventListener('click', () =>{
    console.log("click");
    showHide($titleContainer3)
})
$titleContainer4.addEventListener('click', () =>{
    console.log("click");
    showHide($titleContainer4)
})
$titleContainer5.addEventListener('click', () =>{
    console.log("click");
    showHide($titleContainer5)
})
$titleContainer6.addEventListener('click', () =>{
    console.log("click");
    showHide($titleContainer6)
})













// $titleContainer1.addEventListener('click', () =>{
//     // $modal1.style.animation = `animationOut .8s forwards`;
//     console.log("click");
//     if ($tvContainer1.style.display === "flex") {
//         $tvContainer1.style.display = "none";
//       } else {
//         $tvContainer1.style.display = "flex";
//       }

// })


