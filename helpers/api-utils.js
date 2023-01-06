// Get events from firebase
export async function getAllEvents() {
	const data = await fetch(
		'https://bachata-and-more-372517-default-rtdb.europe-west1.firebasedatabase.app/events.json'
	);
	const events = await data.json();
	return events;
}

// Get events from firebase
export async function getAllVideos() {
	const data = await fetch(
		'https://bachata-and-more-372517-default-rtdb.europe-west1.firebasedatabase.app/videos.json'
	);
	const videos = await data.json();
	return videos;
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
