import { v4 as uuidv4 } from 'uuid'

class Subscriber {
  constructor(callback) {
    this.callback = callback
    this.id = uuidv4()
  }

  call(message) {
    this.callback(message)
  }
}

export default Subscriber
