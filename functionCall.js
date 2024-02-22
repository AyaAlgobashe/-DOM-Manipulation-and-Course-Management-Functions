let elemntName=document.querySelector("div")
 theList = createTrackList("first-name", elemntName)
targetList=document.getElementsByTagName("ol")[0]

addTrackList("CSS",theList)
addTrackList("HTML",theList)
addTrackList("JS",theList)
addTrackList("PHP",theList)


removeCourse("CSS",theList)
moveCourse(theList.children[0],targetList)