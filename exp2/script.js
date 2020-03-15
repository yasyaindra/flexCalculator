const cacheKey = "NUMBER";

if(typeof(Storage)!== "undefined") {
    if(localStorage.getItem(cacheKey)==="undefined") {
        localStorage.setItem(cacheKey,0)
    }

    const button = document.querySelector('#button')
    const clearButton = document.querySelector('#clear')
    const count = document.querySelector('#count')
    button.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey)
        number++
        localStorage.setItem(cacheKey, number)
        count.innerText = localStorage.getItem(cacheKey)
        })

    clearButton.addEventListener('click',function(event){
    localStorage.removeItem(cacheKey)
        });
} else {
    alert('browser tidak mendukung')
}
