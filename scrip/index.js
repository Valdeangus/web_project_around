const forms = document.querySelector(".container");
const editButton = document.querySelector(".header__profile_edit");
const closeButton = document.querySelector(".container__close");

const formElement = document.querySelector(".form__button");

const nameInput = document.querySelector(".form__input-name");
const jobInput = document.querySelector(".form__input-job");
const namePerson = document.querySelector(".header__name");
const jobPerson = document.querySelector(".header__subtitle")

namePerson.textContent = "Jacques Costeau";
jobPerson.textContent = "Explorador";

editButton.addEventListener("click", () => {
  forms.classList.add("container__opened");
});

closeButton.addEventListener("click", () => {
  forms.classList.remove("container__opened");
});

formElement.addEventListener("click", (evt) => {
  evt.preventDefault();

    namePerson.textContent = nameInput.value;
    jobPerson.textContent = jobInput.value;

    closeForm();
})

function closeForm() {
    forms.classList.remove("container__opened")
}