const getJSON = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
}

const generateAdvice = () => {getJSON("https://api.adviceslip.com/advice").then(data=>{
       let id = data.slip.id
       let advice = data.slip.advice

    let adviceGenerator = `
    <h1>ADVICE #${id}</h1>
    <p>"${advice}"</p>
    <section class="pattern">
        <div class="divider"></div>
    </section>
  
    `

    document.getElementById("advice-card").innerHTML = adviceGenerator
})
}

generateAdvice()

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", () => {
        generateAdvice();
    });
});

