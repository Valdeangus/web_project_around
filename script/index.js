const forms = document.querySelector(".container");
const editButton = document.querySelector(".profile__header-edit");
const closeButton = document.querySelector(".container__close");

const formElement = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const namePerson = document.querySelector(".profile__name");
const jobPerson = document.querySelector(".profile__subtitle")

namePerson.textContent = "Jacques Costeau";
jobPerson.textContent = "Explorador";

editButton.addEventListener("click", () => {
  forms.classList.add("container__opened");
});

closeButton.addEventListener("click", () => {
  forms.classList.remove("container__opened");
});

formElement.addEventListener("submit", (evt) => {
  console.log("teste")
  evt.preventDefault();

    namePerson.textContent = nameInput.value;
    jobPerson.textContent = jobInput.value;

    closeForm();
})

function closeForm() {
    forms.classList.remove("container__opened")
}