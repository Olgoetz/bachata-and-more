export async function getAllEvents() {
	const data = await fetch(process.env.FIREBASE_URL_EVENTS);
	const events = await data.json();
	return events;
}
