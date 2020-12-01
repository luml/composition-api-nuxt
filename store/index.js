export const state = () => ({
  friends: []
})

export const mutations = {
  add(state, newFriend) {
    state.friends.push(newFriend)
  }
}
