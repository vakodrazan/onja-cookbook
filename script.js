const form = document.querySelector('form');
const addNewIngredient = document.querySelector('.add-new-ingredient');
const ingredient = document.querySelector('.ingredient');
const addNewStep = document.querySelector('.add-new-step')
const step = document.querySelector('.step');


// add an event listen for teh ingredient button
const handleAddIngredientBtn = event => {
    event.preventDefault();
    const myELement = `
        <input name="ingredients" type="text" id="ingredient" required>
    `;
    ingredient.insertAdjacentHTML('beforeend', myELement)

}


// add an event listen for the step button
const handleAddStepBtn = event => {
    event.preventDefault();
    const myELement = `
        <input name="step" type="text" id="step" required>
    `;
    step.insertAdjacentHTML('beforeend', myELement);

}


// create an array when submiting the form
const handleSubmitBtn = event => {
    event.preventDefault();

    const inputForm = event.target;
    const {recipe, url, name, difficulty, timing, ingredients, step} = inputForm;

    const recipes = [
        {
            title: `${recipe.value}`,
            picture: `${url.value}`,
            author: `${name.value}`,
            difficulty: `${difficulty.value}`,
            timing: `${timing.value}`,
            ingredients: [`${ingredients.value}`],
            steps: [
                `${step.value}`
            ],
        },
    ];

    console.log(recipes)
    form.reset();
}


addNewStep.addEventListener('click', handleAddStepBtn)
addNewIngredient.addEventListener('click', handleAddIngredientBtn)
form.addEventListener('submit', handleSubmitBtn);