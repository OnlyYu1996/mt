const state = () => ({ position: {},user:'' });
const mutations = {
  setPosition(state, val) {
    state.position = val;
  },
  setUser(state,val){
    state.user=val
  }
};

const actions = {
  setPosition: ({ commit }, position) => {commit("setPosition", position)}
};

export default { namespaced: true, state, mutations, actions };