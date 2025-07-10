function checkAnswer(element, isCorrect) {
  // Reset previous answers
  const siblings = element.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('correct', 'wrong');
  }

  if (isCorrect) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

// Navigate to Page 3
function goToThankYou() {
  window.location.href = "page3.html";
}