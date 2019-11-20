const remoteURL = "http://localhost:5002"

export default {
  getEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  deleteEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}