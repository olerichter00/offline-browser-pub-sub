import { v4 as uuidv4 } from 'uuid'

class MessageEvent {
  constructor(message) {
    this.message = message
    this.id = uuidv4()
  }
}

export default MessageEvent
