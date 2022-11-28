// Global Variables
const results = document.getElementById('results');

const updateUI = (data) => {
  if (data) {
    results.innerHTML = `
    <div id="polarity">Polarity: ${data.score_tag}</div>
    <div id="agreement">Agreement: ${data.agreement}</div>
    <div id="subjectivity">Subjectivity: ${data.subjectivity}</div>
    <div id="confidence">Confidence: ${data.confidence}</div>
    <div id="irony">Irony: ${data.irony}</div>
    `;
  } else {
    results.innerHTML = `
        <div id="error">⛔ It seems like the URL you entered is invalid. Please check the URL and try again ⛔</div>
    `;
  }
};

export { updateUI };
