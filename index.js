fetch('http://apilayer.net/api/live?access_key=e12a8ff2cb281a22f95288d44f4476f4&currencies=EUR,GBP,CAD,AUD,MXN&source=USD&format=1')
.then(response => response.json())
.then(data => callback(data))
function callback(data){
    const rateX = data.quotes
    console.log(rateX)
    const dropdown = document.querySelector('select#currency-types')
    const form = document.querySelector('form')
    const input = document.querySelector('#usd-placeholder')
    const h1 = document.querySelector('h1#return-currency')
    Object.entries(rateX).forEach(data => {
        console.log(data)
        const options = document.createElement('option')
        options.textContent = data[0]
        options.value = data[1]
        dropdown.append(options)
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const returnValue = input.value * dropdown.value
        h1.append(returnValue)
    })
}