import Fly from 'flyio'
import tips from './tip'

const request = new Fly()

const errorPrompt = (err) => {
  tips.toast(err.message || 'fetch data err', 'none')
}

request.interceptors.request.use((request) => {
  tips.loading()
  return request
})

request.interceptors.response.use((response, promise) => {
  tips.loaded()
  if (!(response && response.data && response.data.res === 0)) {
    errorPrompt(response)
  }
  return promise.resolve(response.data)
}, (err, promise) => {
  tips.loaded()
  errorPrompt(err)
  return promise.reject(err)
})

export default request
