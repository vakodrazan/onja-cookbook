// create the html
const addIngredientBtn = document.querySelector('button.addIngredient');
const ingredientListElement = document.querySelector('#ingredientList');
const addStepBtn = document.querySelector('button.addStep');
const stepListElement = document.querySelector('#stepList');
const formElement = document.querySelector('form');
// generate add ingredient input
const addIngredientInput = e => {
    const number = ingredientListElement.children.length + 1;
    const liHtml = `
    <li><input type="text" id="name="ingredient${number}" name="ingredient ${number}" value="Ingredient ${number}"/></li>
    `;
    ingredientListElement.insertAdjacentHTML('beforeend', liHtml);
}
// Generate add steps input
const addStepInput = e => {
    const number = stepListElement.children.length + 1;
    const liHtml = `
    <li><input type="text" id="name="step${number}" name="step${number}" value="step ${number}"/></li>
    `;
    stepListElement.insertAdjacentHTML('beforeend', liHtml);
}
const handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    const {title, picture, author, difficulty, timing} = form;
    const ingredients = [];
    for (let i = 0; i < ingredientListElement.children.length; i++) {
        ingredients.push(ingredientListElement.children[i].children[0].value);
    }

    const steps = [];
    for (stepChildren of stepListElement.children) {
        steps.push(stepChildren.children[0].value);
    }



    const recipes = [
        {
            title: title.value,
            picture: picture.value,
            author: author.value,
            difficulty: difficulty.value,
            timing: timing.value,
            ingredients: ingredients,
            steps: steps,
        },
    ];
    console.log(recipes);
}
addStepBtn.addEventListener('click', addStepInput);
addIngredientBtn.addEventListener('click', addIngredientInput);
formElement.addEventListener('submit', handleSubmit);
// Generate the recipe object after submit
    // get all the form 
    // put the data inside an object
    // show the object