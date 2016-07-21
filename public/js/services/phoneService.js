class phoneService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/phones', data)
    }

    getAll() {
        return this.$http.get('/api/phones')
    }

    getOne(id) {
        return this.$http.get('/api/phones/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/phones/' + id, data)
    }

    delete(id) {
        return this.$http.delete('/api/phones/' + id)
    }

}