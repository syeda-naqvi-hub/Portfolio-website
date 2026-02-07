console.log("Portfolio loaded")
document.querySelectorAll("a").forEach(anchor =>
{
    anchor.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelectorAll(this.getAttribute("href"))
    .scrollintoview({behaviour:"smooth"});
});
});
