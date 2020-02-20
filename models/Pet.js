let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
  let conteudo = `
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <h1 class='alert alert-danger'>Listagem de pets</h1>
  `;
  for (let pet of pets) {
    conteudo += `

    <li class='alert-warning' >${pet.nome}</li>`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };