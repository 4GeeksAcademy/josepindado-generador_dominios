import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#pronouns").innerHTML = printAll(pronouns);
  document.querySelector("#adjs").innerHTML = printAll(adjs);
  document.querySelector("#nouns").innerHTML = printAll(nouns);
  document.querySelector("#extensions").innerHTML = printAll(extensions);
  document.querySelector("#domains").innerHTML = generateDomain();
};

let pronouns = ["El", "Tu", "Su", "Mi"];
let adjs = ["gran", "bueno", "malo", "feo"];
let nouns = ["perro", "gato", "leon", "gorila"];
let extensions = [".com", ".es", ".org", ".dev"];
let spacing = "<br>";

const generateDomain = () => {
  let domain = "";
  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          domain += pronoun + adj + noun + extension + spacing;
        });
      });
    });
  });

  return domain;
};
function printAll(pronouns) {
  let result = "";
  pronouns.forEach(element => {
    result += element + "<br>";
  });
  return result;
}
