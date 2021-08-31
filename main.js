const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector("#inputMsg");
  const btn = document.querySelector("#submit");
  const confirmation = document.querySelector(".confirmation");

  confirmation.textContent = input.value;
  input.value = '';
});
