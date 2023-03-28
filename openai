// Set up event listener for the "Generate Image" button
document.getElementById("generate-btn").addEventListener("click", function() {
  // Get the user input from the form field
  const prompt = document.getElementById("prompt").value;
  
  // Make an API call to OpenAI to generate an image based on the prompt
  fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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' // Replace with your actual API key
    },
    body: JSON.stringify({
      "model": "image-alpha-001",
      "prompt": prompt,
      "num_images": 1
    })
  })
  .then(response => response.json())
  .then(data => {
    // Get the URL of the generated image from the API response
    const imageSrc = data.data[0].url;
    
    // Display the generated image on the page
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<img src="${imageSrc}" alt="Generated image">`;
  })
  .catch(error => console.error(error));
});
