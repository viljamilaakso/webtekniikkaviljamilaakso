const form = document.querySelector('form');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = form.name.value;
	const message = form.message.value;
	const date = form.date.value;
	const time = form.time.value;
	const urgent = form.urgent.checked;
	const div = document.createElement('div');
	div.className = 'message' + (urgent ? ' checked' : '');
	div.innerHTML = `<p><strong>${name}:</strong> ${message}</p><p>${date} ${time}</p>`;
	messages.appendChild(div);
	form.reset();
});
