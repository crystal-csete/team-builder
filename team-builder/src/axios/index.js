import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Bobby',
    email: 'test@test.com',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { username, email }) {
    const newTeam = { id: uuid(), username, email }
    return Promise.resolve({ status: 200, success: true, data: newTeam })
  }
}