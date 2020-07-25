import jobs from "../assets/database/listaDeVagas.js";
// Selecionadores
// -> Job Item
// ->> Seleciona a Div de Jobs
const jobsDiv = document.querySelector(".jobs-div");
// ->> Seleciona o Template do Job-Item
const jobItemTemplate = document.querySelector("#job-item-template");
// -> Job Modal
// ->> Seleciona a Div de JobModals
const jobModalDiv = document.querySelector(".jobs-modal-div");
// ->> Seleciona o Template do Job-Modal
const jobModalTemplate = document.querySelector("#job-modal-template");

// Usa o map para iterar pelos Jobs da Database
jobs.map(({ id, vaga, descrição, email, imagem }) => {
  // $ Job item ---<
  // Cria uma cópia do Template
  const jobItem = document.importNode(jobItemTemplate.content, true)
    .firstElementChild;
  // Seleciona o div com a classe jobs-item e dá o id como data-target
  jobItem
    .querySelector(".jobs-item")
    .setAttribute("data-target", `#jobsModal${id}`);
  // Seleciona a imagem dá o link correto
  jobItem.querySelector("img").setAttribute("src", imagem);
  // Anexa a Vaga atual na grade de vagas
  jobsDiv.appendChild(jobItem);
  // $ Job Modal ---<
  // Cria uma cópia do Template
  const jobModal = document.importNode(jobModalTemplate.content, true)
    .firstElementChild;
  // Selecionar o jobModal e trocar seu id
  jobModal.setAttribute("id", `jobsModal${id}`);
  //   Seleciona o título e adiciona o nome da vaga
  jobModal.querySelector("h2").innerHTML = vaga;
  //  Seleciona a imagem e dá o endereço
  jobModal.querySelector("img").setAttribute("src", imagem);
  //   Seleciona o parágrafo e dá a descrição
  jobModal.querySelector("p").innerHTML = descrição;
  //   Seleciona o link e dá o email com assunto
  const emailFinal = `mailto:${email.destinatário}?subject=${email.assunto}`;
  jobModal.querySelector("a").setAttribute("href", emailFinal);
  //   Anexa o Modal na Grade de Modals
  jobModalDiv.appendChild(jobModal);
});
