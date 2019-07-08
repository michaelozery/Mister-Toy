import Vue from 'vue';
import Vuex from 'vuex';
import ToysService from './services/ToysService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toys: [],
    currToy: {},
  },
  getters: {
    toysForDisplay(state) {
      return state.toys;
    },
    getToy(state) {
      return state.currToy
    },
    // getFilter(state){
    //   console.log('getting filter:', state.filter);
    //   return state.filter
    // }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },

    setToy(state, { toy }) {
      state.currToy = toy;
    },

    deleteToy(state, { toy }) {
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id);
      state.toys.splice(idx, 1);
    },
    editToy(state, { toy }) {
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id);
      state.toys.splice(idx, 1, toy)
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
  },
  actions: {
    loadToys(context) {
      return ToysService.query().then(toys =>
        context.commit({ type: 'setToys', toys })
      );
    },

    getToy(context, { toyId }) {
      return ToysService.getToy(toyId).then(toy => context.commit({ type: 'setToy', toy: toy }))
    },
    //  axios.get(url , {params:filterBy})
    //  req.query
    deleteToy(context, payload) {
      return ToysService.deleteToy(payload.toy).then(() =>
        context.commit(payload)
      );
    },
    updateToy(context, { toy }) {
      if (toy._id) {
        return ToysService.editToy(toy).then(toy => {
          return context.commit({ type: 'editToy', toy: toy })
        })
      }

      else {
        return ToysService.addToy(toy).then(toy => {
          return context.commit({ type: 'addToy', toy: toy })
        })
      }
    },
    setFilter(context, {filterBy}) {
      console.log('FILTER BY:', filterBy);
      return ToysService.query(filterBy)
      .then(toys => context.commit({type: 'setToys', toys}))
    }
  }
});
