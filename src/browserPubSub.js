import TopicRegistry from './topicRegistry'
import Subscriber from './entities/subscriber'
import MessageEvent from './entities/messageEvent'
import NotifierService from './notifierService'

const topicRegistry = new TopicRegistry()
const notifierService = new NotifierService({ topicRegistry })

const subscribe = (topicName, callback) => {
  const topic = topicRegistry.get(topicName)

  const subscriber = new Subscriber(callback)

  topic.subscribers.push(subscriber)

  return subscriber.id
}

const unsubscribe = id => {
  topicRegistry.all().forEach(topic => {
    topic.subscribers = topic.subscribers.filter(
      subscriber => subscriber.id !== id,
    )
  })
}

const publish = (topic, message, { notifySameTab = true } = {}) => {
  const event = new MessageEvent(message)

  notifierService.publish(topic, JSON.stringify(event), notifySameTab)
}

export const browserPubSub = { subscribe, unsubscribe, publish }
export default browserPubSub
