import browserPubSub from '../src/browserPubSub'

describe('browserPubSub', () => {
  it('notifies subscribers', () => {
    const callback = jest.fn()
    const token = browserPubSub.subscribe('test-topic', callback)

    browserPubSub.publish('test-topic', 'test-message-1')
    browserPubSub.unsubscribe(token)
    browserPubSub.publish('test-topic', 'test-message-2')
    browserPubSub.subscribe('test-topic', callback)
    browserPubSub.publish('test-topic', 'test-message-3')

    expect(callback).toHaveBeenCalledWith('test-message-1')
    expect(callback).not.toHaveBeenCalledWith('test-message-2')
    expect(callback).toHaveBeenCalledWith('test-message-3')

    expect(localStorage.setItem).toBeCalledTimes(3)
  })
})
