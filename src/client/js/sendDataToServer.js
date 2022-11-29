const fetch = require('node-fetch');

const postData = async (url, formUrl) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formUrl }),
  })
    .then((res) => res.json())
    .then((data) => Client.updateUI(data));
};

export { postData };
