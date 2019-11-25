const remoteURL = "http://localhost:5002"

export default {
  getLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  deleteLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(data => data.json())
  },
  getWithEmployees(id) {
    return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
            .then(result => result.json())
  }
}