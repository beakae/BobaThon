// Create a context for all .png files inside the current directory
const imageContext = require.context('.', true, /\.png$/);

const images = {};

// For each .png file in the current directory
imageContext.keys().forEach((image) => {
  // Remove the './' from the start of the file name and the '.png' from the end
  const imageName = image.slice(2, -4);

  // Add the image to the images object
  images[imageName] = imageContext(image);
});

export default images;