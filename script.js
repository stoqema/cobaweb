document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickBtn');
  const output = document.getElementById('output');

  button.addEventListener('click', () => {
    output.textContent = 'Server status: Active & responding!';
  });
});