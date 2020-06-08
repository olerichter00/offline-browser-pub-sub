import BrowserPubSub from './browserPubSub'
import TopicRegistry from './topicRegistry'
import NotifierService from './notifierService'

const topicRegistry = new TopicRegistry()
const notifierService = new NotifierService({ topicRegistry })
const browserPubSub = new BrowserPubSub({ topicRegistry, notifierService })

export default browserPubSub
