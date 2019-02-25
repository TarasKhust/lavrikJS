/* global Proxy */
'use strict';

function watchObj(node, callback) {
	return new Proxy(node, {
		set(target, name, value) {
			target[name] = value;
			callback(name, value);
			return true;
		},

		get(target, name) {
			return watchObj(target[name], callback);
		},

	});
}

class EmailParser {
	constructor(email) {
		this.email = email;
	}

	get isCorrect() {
		return (/\S+@\S+\.\S+/).test(this.email) ? true : null;
	}

	get name() {
		return this.isCorrect ? true : null;
	}

	get domain() {
		return this.isCorrect ? true : null;
	}
}

export {watchObj, EmailParser};