$("div").click(function () {
    $(this).css("background-color", "#f39c12")
})

const fetch = function () {
    $.ajax({
        method: "GET",
        url: "http://data.nba.net/10s/prod/v1/2016/players.json",
        success: function (results) {
            console.log(results)
        },
        error: function (xhr, text, error) {
            console.log(error)
        }
    })
}
fetch()