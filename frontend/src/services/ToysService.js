import axios from 'axios';

export default {
  query,
  getToy,
  deleteToy,
  editToy,
  addToy,
  getFilteredToys
  // setFilter
};

function _makeQuery(filterBy) {
  let query = '?'
  for (let param in filterBy) {
      query += `${param}=${filterBy[param]}&`
  }
  return query
}

function query(filterBy = {}) {
  let query = _makeQuery(filterBy)
  return axios
    .get(_getUrl(query))
    .then(res => {
      return res.data
    })
    .catch('Something went wrong with the toys query');
}

function getFilteredToys(filterBy) {
  return axios.get(_getUrl())
}

function getToy(toyId) {
  return axios.get(_getUrl(toyId)).then(res => {
    return res.data
  })
    .catch(err => err)
}

function deleteToy(toy) {
  return axios
    .delete(_getUrl(toy._id))
    .then(res => res.data)
    .catch(err => err);
}

function editToy(toy) {
  //CONTINUE FROM HERE. THE SERVER CALL WORKS WELL
  toy.price = parseInt(toy.price)
  return axios.put(_getUrl(toy._id), toy)
    .then(res => res.data)
    .catch(err => err)
}

function addToy(toy) {
  return axios.post(_getUrl(), toy).then(res => res.data)
}

function _getUrl(id = '') {
  return `http://localhost:3000/api/toy/${id}`;
}
