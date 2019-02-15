function cleanStr(str) {
	return str.match(/\S+/g);
}

function wordsCount(str) {
	return cleanStr(str) ? cleanStr(str).length : 0;
}

function* getWords (str) {
	yield wordsCount(str)
}

export {wordsCount, getWords};