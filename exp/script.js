let gambarKucing = document.querySelector('#catImage')
let caption = document.querySelector('#caption')
let newElement = document.createElement('p')
gambarKucing.setAttribute("src","https://i.ibb.co/55VG7vL/three-cat.jpg")
caption.innerHTML = '<em>Tiga Anak Kucing</em>'
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali'
document.body.appendChild(newElement)

gambarKucing.addEventListener('click',function(event){
    document.querySelector('#count').innerText++
})
