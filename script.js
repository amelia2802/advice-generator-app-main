const getJSON = async url => {
    const response = await fetch(url)
    const data = response.json()
    return data
}
    console.log("Fetching data...")

let id = 0
let advice = ''

getJSON("https://api.adviceslip.com/advice").then(data=>{
        id = data.slip.id
        advice = data.slip.advice
        console.log(id)
        console.log(advice)

    let adviceGenerator = `
    <h1>Advice #${id}</h1>
    <p>"${advice}"</p>
    `

    document.getElementById("root").innerHTML = adviceGenerator
    })


console.log(id)
console.log(advice)