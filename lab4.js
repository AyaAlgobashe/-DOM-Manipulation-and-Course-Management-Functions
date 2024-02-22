let pageImegas = document.getElementsByTagName("img");

console.log(pageImegas)
console.log(document.images)

let selectOption = document.querySelectorAll("option")
console.log(selectOption)

let allRows = document.getElementsByTagName("table")[1].querySelectorAll("td")
console.log(allRows)
let allElement = document.getElementsByClassName("bGrey fontBlue")
console.log(allElement)

let creatUnorderList
function createTrackList(trackId, parentElement) {

    creatUnorderList = document.createElement("ul");
    creatUnorderList.id=trackId;

    parentElement.append(creatUnorderList)
    
    return creatUnorderList;



}

/////////////add element 
function addTrackList(trackName, ListTrackElement) {
    let creatLi = document.createElement("li");
    creatLi.innerText=trackName;
    ListTrackElement.append(creatLi);

    
}
// createTrackList("HTML", "ul")

/////remove element
function removeCourse(courseName, ListTrackElement) {
    let childList=ListTrackElement.children;
    for (let i = 0; i < childList.length; i++) {
        if (courseName==childList[i].innerText) {
            childList[i].remove();

        }
    }

}
//////move course


function moveCourse(courseName, TargetListTrackElement) {
    let exsistList =creatUnorderList.children;
    for(let i=0;i<exsistList.length;i++){
        if(courseName==exsistList[i]){
            let clonLi =exsistList[i].cloneNode(true);
            TargetListTrackElement.append(clonLi)
            exsistList[i].remove()
        }
    }
    

}


////////////setInterval or setTimeout
let imagesSorce = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"]
let slideImages = document.getElementById("first-image");
let count = 0;
function changeImage() {
    slideImages.src = imagesSorce[count];
    count = (count + 1) % imagesSorce.length;


}
let changeInterval = setInterval(changeImage, 1000)







