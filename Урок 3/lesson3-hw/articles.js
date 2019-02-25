import * as serverApi from './db';

async function all() {
	let response = await serverApi.all();
	return parseResponse(response);
}

async function one(id) {
	let response = await serverApi.get(id);
	return parseResponse(response);
}

async function remove(id) {
	let response = await serverApi.remove(id);
	return parseResponse(response);
}

export {all, one, remove};

function parseResponse(response) {
	let info = JSON.parse(response);
	return response.date;
}