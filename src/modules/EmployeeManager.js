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
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  },
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
      .then(result => result.json())
  }
}