// Global Variables
const polarity = document.getElementById('polarity');
const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');

const updateUI = (data) => {
  polarity.textContent = `Polarity: ${data.score_tag}`;
  agreement.textContent = `Agreement: ${data.agreement}`;
  subjectivity.textContent = `Subjectivity: ${data.subjectivity}`;
  confidence.textContent = `Confidence: ${data.confidence}`;
  irony.textContent = `Irony: ${data.irony}`;
};

export { updateUI };
