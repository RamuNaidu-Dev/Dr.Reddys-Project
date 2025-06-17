const siteDetails = {
  "FTO-2": "FTO-2",
  "FTO-3": "FTO-3",
  "Biologics": "BIOLOGICS",
  "IPDO": "IPDO",
  "CTO-1": "CTO-1",
  "CTO-2": "CTO-2",
  "CTO-3": "CTO-3",
  "CTO-5": "CTO-5",
  "FTO-7": "FTO-7",
  "FTO-9": "FTO-9",
  "CTO-6": "CTO-6",
  "FTO SEZ PU1": "FTO SEZ PU1",
  "FTO SEZ PU2": "FTO SEZ PU2",
  "CTO SEZ": "CTO SEZ"
};

const params = new URLSearchParams(window.location.search);
const site = params.get("site");

document.getElementById("site-title").innerText = site;
document.getElementById("site-description").innerText =
  siteDetails[site] || "No details found for this site.";

function goHome() {
  window.location.href = "index.html";
}
