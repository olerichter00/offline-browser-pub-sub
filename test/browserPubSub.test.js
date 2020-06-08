import BrowserPubSub from '../src/browserPubSub'

const notifierService = {
  publish: jest.fn(),
}

const topicRegistry = {
  register: jest.fn(() => 'test-topic'),
  unregister: jest.fn(),
}

describe('browserPubSub', () => {
  let browserPubSub

  beforeEach(() => {
    browserPubSub = new BrowserPubSub({
      notifierService,
      topicRegistry,
    })
  })

  describe('subscribe', () => {
    describe('with correct params', () => {
      it('subscribes to topic', () => {
        const callback = jest.fn()

        browserPubSub.subscribe('test-topic', callback)

        expect(topicRegistry.register).toHaveBeenCalledWith(
          'test-topic',
          callback,
        )
      })
    })

    describe('with wrong topic type', () => {
      it('throws an error', () => {
        expect(() => {
          browserPubSub.subscribe(123, jest.fn())
        }).toThrow()
      })
    })
  })

  describe('unsubscribe', () => {
    it('unregisters subscriber', () => {
      browserPubSub.unsubscribe('subscriber-id')

      expect(topicRegistry.unregister).toHaveBeenCalledWith('subscriber-id')
    })
  })

  describe('publish', () => {
    describe('without options', () => {
      it('publishes the message to the topic', () => {
        browserPubSub.publish('test-topic', 'test-message')

        expect(notifierService.publish).toHaveBeenCalledWith(
          'test-topic',
          'test-message',
          true,
        )
      })
    })

    describe('with notifySameTab option', () => {
      it('publishes the message to the topic', () => {
        browserPubSub.publish('test-topic', 'test-message', {
          notifySameTab: false,
        })

        expect(notifierService.publish).toHaveBeenCalledWith(
          'test-topic',
          'test-message',
          false,
        )
      })
    })
  })
})
