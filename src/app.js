import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".es", ".net"];

  let domainNames = [];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++)
      for (let c = 0; c < noun.length; c++)
        for (let d = 0; d < extensions.length; d++)
          domainNames.push(
            "www." + pronoun[a] + adj[b] + noun[c] + extensions[d]
          );
  }

  document.body.innerHTML = "<ol></ol>";

  let ol = document.querySelector("ol");

  domainNames.forEach(function(domain) {
    let li = document.createElement("li");
    li.textContent = domain;
    ol.appendChild(li);
  });
};
