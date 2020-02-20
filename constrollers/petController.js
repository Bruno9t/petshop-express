const Pets = require('../models/Pet')

module.exports = {
    index(req, res) {
        res.send(Pets.listarPets())
    },
    store(req, res) {
        let pet = req.params
        Pets.adicionarPet(pet)
        console.log(pet)
        res.send('Pet adicionado!')
    },
    search(req, res) {
        let pet = Pets.buscarPet(req.params.nome)
        res.send(pet)
    }
}