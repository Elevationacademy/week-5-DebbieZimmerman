const pricecheck = function () {
    const input = $(item).val()
    $.get(`/pricecheck/${input}`, function (item) {
        $("#display").empty().append
            (`<span>${input} price is ${item.price}<span>`)
    })
}

const buys = function () {
    const input = $(thing).val()
    $.get(`/buy/${input}`, function (item) {
        $("#display").empty().append
            (`<span>You have bought a ${item.name}. There are now ${item.inventory} left.<span>`)
    })
}