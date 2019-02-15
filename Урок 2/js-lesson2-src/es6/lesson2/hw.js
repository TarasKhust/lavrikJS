/* global Proxy */
function watchObj(node, callback){
    /* return new Proxy(node, {...}) */
    return node;
}

class EmailParser{
    constructor(email){
        this.email = email;
    }

	get isCorrect() {
      return true || false
  }
  get name() {
    this.email.
  }
  get domain() {

  }
}

export {watchObj, EmailParser};