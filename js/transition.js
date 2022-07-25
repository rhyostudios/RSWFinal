const toPage = (pageNumber) => {

    const wrapper = document.getElementById('wrapper')

    let leftValue = pageNumber * 100

    wrapper.style.transform = `translateX(-${leftValue}vw)`

    document.getElementById("burger-line-1").className="burger-menu-lines burger-menu-line-1"
    document.getElementById("burger-line-2").className="burger-menu-lines burger-menu-line-2"
    document.getElementById("burger-line-3").className="burger-menu-lines burger-menu-line-3"
    document.getElementById("navbar-opened-id").className="navbar-opened flex-center"

    const getPageTags = document.getElementsByClassName("navbar-menu-item")

    let pageTags = []

    for (let i = 0; i < getPageTags.length; i++) {
        
        pageTags.push(document.getElementById(getPageTags[i].id))
        
    }

    for (let i = 0; i < pageTags.length; i++) {
        
        if (i==pageNumber) {
            pageTags[i].className="navbar-menu-item navbar-menu-item-active flex-center"
        } else {
            pageTags[i].className="navbar-menu-item flex-center"
        }

    }

}

