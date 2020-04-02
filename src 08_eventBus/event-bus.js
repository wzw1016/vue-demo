const eventBus = {}

let listenersContainer = {}

eventBus.$on = function (eventName, listener) {
  let listeners = listenersContainer[eventName]
  if (!listeners) {
    listenersContainer[eventName] = listeners = []
  }
  listenersContainer[eventName].push(listener)
}

eventBus.$emit = function (eventName, data) {
  const listeners = listenersContainer[eventName]
  if (listeners && listeners.length) {
    listeners.forEach(listener => {
      listener(data)
    })
  }
}

eventBus.$off = function (eventName) {
  if (eventName === undefined || eventName === null) {
    listenersContainer = {}
  } else {
    delete listenersContainer[eventName]
  }
}

export default eventBus
