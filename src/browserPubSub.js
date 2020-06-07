import TopicRegistry from './topicRegistry'
import Subscriber from './entities/subscriber'
import MessageEvent from './entities/messageEvent'
import NotifierService from './notifierService'

const topicRegistry = new TopicRegistry()
const notifierService = new NotifierService({ topicRegistry })

const verifyTopicName = topicName => {
  if (typeof topicName !== 'string')
    throw Error('Topic musst be a string (${typeof topicName}).')
}

const subscribe = (topicName, callback) => {
  verifyTopicName(topicName)

  if (typeof topicName !== 'string') throw Error('Topic musst be a string.')

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

const publish = (topicName, message, { notifySameTab = true } = {}) => {
  verifyTopicName(topicName)

  const event = new MessageEvent(message)

  notifierService.publish(topicName, JSON.stringify(event), notifySameTab)
}

export const browserPubSub = { subscribe, unsubscribe, publish }
export default browserPubSub
