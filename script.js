$(function(){
    const colors = [
        '.Pallete',
        '.Background',
        '.ULeft',
        '.URight',
        '.CDown',
    ]
    function num() { return Math.floor(Math.random() * (255 - 0 + 1) ) + 0 }
    function alfa() { return Math.floor(Math.random() * ((100 - 30 + 1) ) + 30) / 100 }
    function cor() { return "rgba("+num()+","+num()+","+num()+","+alfa()+")" }
	colors.forEach(element => {
        $(element).css("background-color",cor())
    })
	$("#New").click(function() {
        colors.forEach(element => {
            $(element).css("background-color",cor())
        })
        $("#Extract").text("")
        colors.forEach(element => {
            $("#Extract").append("<span>--c"+(colors.indexOf(element)+1)+":"+$(element).css("background-color")+"</span>;<br>")
        })
        $('#Copy').html('<i class="fa-solid fa-clipboard"></i>')
    })
    $("#Copy").click(function() {
        let copyText = document.getElementById("Extract")
        navigator.clipboard.writeText(copyText.textContent)
        $('#Copy').html('<i class="fa-solid fa-clipboard-check"></i>')
    })
})
