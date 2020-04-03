import http from "../http-common";

class GroceryDataService {
  getAll() {
    return http.get("/groceries");
  }

  get(id) {
    return http.get(`/groceries/${id}`);
  }

  create(data) {
    return http.post("/groceries", data);
  }

  update(id, data) {
    return http.put(`/groceries/${id}`, data);
  }

  delete(id) {
    return http.delete(`/groceries/${id}`);
  }

  deleteAll() {
    return http.delete(`/groceries`);
  }

  findByName(name) {
    return http.get(`/groceries?name=${name}`);
  }
}

export default new GroceryDataService();
