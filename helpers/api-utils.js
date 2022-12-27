// Get events from firebase
export async function getAllEvents() {
	const data = await fetch(process.env.FIREBASE_URL_EVENTS);
	const events = await data.json();
	return events;
}

// Call email send api on AWS
export async function sendEmail(email) {
	console.log(email);
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(email),
	};
	const data = await fetch(`${process.env.EMAIL_API_ENDPOINT}`, requestOptions);
	const result = await data.json();
	return {
		statusCode: data.status,
		result,
	};
}