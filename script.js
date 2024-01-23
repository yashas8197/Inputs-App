const feedbackTextarea = document.getElementById("feedbackTextarea")
const feedbackSubmitBtn = document.getElementById("feedbackSubmitBtn")
const feedbackResult = document.getElementById("feedbackResult")

feedbackSubmitBtn.addEventListener("click", function() {
  const feedback = feedbackTextarea.value
  feedbackResult.textContent = `feedback: ${feedback}`
})

const addressTextarea = document.getElementById("addressTextarea")
const addressSubmitBtn = document.getElementById("addressSubmitBtn")
const addressResult = document.getElementById("addressResult")

addressSubmitBtn.addEventListener("click", function() {
  const address = addressTextarea.value
  addressResult.textContent = `Your Address: ${address}`
})

const descriptionTextarea = document.getElementById("descriptionTextarea")
const descriptionSubmitBtn = document.getElementById("descriptionSubmitBtn")
const descriptionResult = document.getElementById("descriptionResult")

descriptionSubmitBtn.addEventListener("click", function() {
  const discription = descriptionTextarea.value
  descriptionResult.textContent = `Your Description: ${discription}`
})