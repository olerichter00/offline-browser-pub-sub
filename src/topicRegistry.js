import Topic from './entities/topic'
import Subscriber from './entities/subscriber'

class TopicRegistry {
  constructor() {
    this.topics = {}
  }

  register(topicName, callback) {
    if (!this.topics[topicName]) this.topics[topicName] = new Topic(topicName)

    const topic = this.topics[topicName]

    const subscriber = new Subscriber(callback)

    topic.subscribers.push(subscriber)

    return subscriber
  }

  unregister(subscriberId) {
    Object.values(this.topics).forEach(topic => {
      topic.subscribers = topic.subscribers.filter(
        subscriber => subscriber.id !== subscriberId,
      )
    })
  }

  getSubscribersFor(topicName) {
    if (!this.topics[topicName]) return []

    return this.topics[topicName].subscribers
  }
}

export default TopicRegistry
