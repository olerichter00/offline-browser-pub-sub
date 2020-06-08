import MessageEvent from './entities/messageEvent'

class BrowserPubSub {
  constructor({ topicRegistry, notifierService }) {
    this.topicRegistry = topicRegistry
    this.notifierService = notifierService
  }

  verifyTopicName(topicName) {
    if (typeof topicName !== 'string')
      throw Error('Topic musst be a string (${typeof topicName}).')
  }

  subscribe(topicName, callback) {
    this.verifyTopicName(topicName)

    const subscriber = this.topicRegistry.register(topicName, callback)

    return subscriber.id
  }

  unsubscribe(subscriberId) {
    this.topicRegistry.unregister(subscriberId)
  }

  publish(topicName, message, { notifySameTab = true } = {}) {
    this.verifyTopicName(topicName)

    this.notifierService.publish(topicName, message, notifySameTab)
  }
}

export default BrowserPubSub
