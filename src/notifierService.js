class NotifierService {
  constructor({ topicRegistry }) {
    this.topicRegistry = topicRegistry

    window.addEventListener(
      'storage',
      e => {
        if (!this.topicRegistry.exists(e.key)) return

        const topic = this.topicRegistry.get(e.key)
        const event = JSON.parse(e.newValue)

        topic.subscribers.forEach(subscriber => {
          subscriber.call(event.message)
        })
      },
      false,
    )
  }

  publish(topic, message, notifySameTab) {
    // fire storage event in other windows
    this.setStorageItem(topic, message)
    // fire storage event in the same windows
    if (notifySameTab) this.fireStorageEvent(topic, message)
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
