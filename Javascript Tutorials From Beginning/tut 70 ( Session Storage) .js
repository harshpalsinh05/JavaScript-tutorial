console.log("tut 70 Session Storage in javascript")
sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")
sessionStorage.setItem("name", "harry")
sessionStorage.removeItem("name")


window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}