import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ["The", "Our"]
  let adj = ["big", "great", "amazing"]
  let noun = ["racoon", "dog", "cat"]
  let domain = [".com", ".es", ".us", ".org"]


  for (let combPronoun = 0; combPronoun < pronoun.length; combPronoun++) {

    for (let combAdj = 0; combAdj < adj.length; combAdj++) {

      for (let combNoun = 0; combNoun < noun.length; combNoun++) {

        for (let combDomain = 0; combDomain < domain.length; combDomain++) {



          console.log(pronoun[combPronoun] + adj[combAdj] + noun[combNoun] + domain[combDomain]);
        }


      }
    }

  }

  console.log("Hello Rigo from the console!");
};
