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
  }
}