const form = document.querySelector('form');
const addNewIngredient = document.querySelector('.add-new-ingredient');
const ingredient = document.querySelector('.ingredient');
const addNewStep = document.querySelector('.add-new-step')
const step = document.querySelector('.step');


const handleAddIngredientBtn = event => {
    event.preventDefault();
    const myELement = `
        <input type="text" id="ingredient" required>
    `;
    ingredient.insertAdjacentHTML('beforeend', myELement)

}

const handleAddStepBtn = event => {
    event.preventDefault();
    const myELement = `
        <input type="text" id="step" required>
    `;
    step.insertAdjacentHTML('beforeend', myELement)
}

const handleSubmitBtn = event => {
    event.preventDefault();

    const inputForm = event.target;
    const {recipe, url, name, difficulty, timing} = inputForm;

    const recipes = [
        {
            title: `${recipe.value}`,
            picture: `${url.value}`,
            author: `${name.value}`,
            difficulty: `${difficulty.value}`,
            timing: `${timing.value}`,
            ingredients: ['eggs', 'salt', 'water'],
            steps: [
                'Put a pan on the fire',
                'Crack the eggs on it',
                'Wait, put them out',
                'Add some salt on it',
            ],
        },
    ];

    console.log(recipes)
    form.reset();
}


addNewStep.addEventListener('click', handleAddStepBtn)
addNewIngredient.addEventListener('click', handleAddIngredientBtn)
form.addEventListener('submit', handleSubmitBtn);