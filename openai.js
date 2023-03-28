require('dotenv').config();

const openai = require('openai');
openai.apiKey = process.env.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;

function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const model = 'image-alpha-001';
  const parameters = {
    prompt: prompt,
    model: model,
    num_images: 1,
  };
  openai.images.generate(parameters)
    .then(response => {
      const image = response.data.data[0].url;
      const output = `<img src="${image}" alt="Generated Image" width="500">`;
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error));
}
