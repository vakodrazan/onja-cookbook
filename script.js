const form = document.querySelector('form');
const addNewIngredient = document.querySelector('.add-new-ingredient');
const ingredient = document.querySelector('.ingredient');
const addNewStep = document.querySelector('.add-new-step')
const step = document.querySelector('.step');


const handleSubmitBtn = event => {
    event.preventDefault();

    console.log(event.target);

    form.reset();
}

const handleAddIngredientBtn = event => {
    const myELement = `
        <input type="text" id="ingredient" required>
    `;
    ingredient.insertAdjacentHTML('beforeend', myELement)

}

const handleAddStepBtn = event => {
    const myELement = `
        <input type="text" id="step" required>
    `;
    step.insertAdjacentHTML('beforeend', myELement)

}

addNewStep.addEventListener('click', handleAddStepBtn)
addNewIngredient.addEventListener('click', handleAddIngredientBtn)
form.addEventListener('submit', handleSubmitBtn);