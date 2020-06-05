import Topic from './entities/topic'

class TopicRegistry {
  constructor() {
    this.topics = {}
  }

  get(name) {
    if (!this.exists(name)) this.topics[name] = new Topic(name)

    return this.topics[name]
  }

  exists(name) {
    return !!this.topics[name]
  }

  all() {
    return Object.values(this.topics)
  }
}

export default TopicRegistry
