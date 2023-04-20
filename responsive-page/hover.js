btn = document.querySelectorAll(".btn")
para = document.querySelectorAll(".more")

btn.eventListener("click",  function () {
    alert("Hi")
    para.style.display("inline")
})

