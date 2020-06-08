import MessageEvent from './entities/messageEvent'

class NotifierService {
  constructor({ topicRegistry }) {
    this.topicRegistry = topicRegistry

    window.addEventListener(
      'storage',
      e => {
        const subscribers = this.topicRegistry.getSubscribersFor(e.key)
        const event = JSON.parse(e.newValue)

        subscribers.forEach(subscriber => {
          subscriber.call(event.message)
        })
      },
      false,
    )
  }

  publish(topic, message, notifySameTab) {
    const event = new MessageEvent(message)

    // fire storage event in other windows
    this.setStorageItem(topic, JSON.stringify(event))
    // fire storage event in the same windows
    if (notifySameTab) this.fireStorageEvent(topic, JSON.stringify(event))
  }

  setStorageItem(topic, message) {
    localStorage.setItem(topic, message)
  }

  fireStorageEvent(topic, message) {
    const event = new Event('storage')

    event.key = topic
    event.newValue = message

    window.dispatchEvent(event)
  }
}

export default NotifierService
