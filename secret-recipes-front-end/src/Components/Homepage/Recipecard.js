// import { useHistory } from "react-router";
// need react-router set up

const Recipecard = (props) => {
    const {recipe, deleteRecipe} = props;
    // const history = useHistory();

    const categoryHref = `/category/${recipe.category.category_id}`
    const navToHref = ev => {
        ev.preventDefault();
        // history.push(ev.target.target)
    }

    return(
        <div className='Recipecard'>
            <h2>{recipe.title}</h2>
            <b>{recipe.source}</b>
            <h3>Instructions</h3>
            <ol className='instructions'>
                {recipe.shapedSteps.map(step => {
                    return (
                        <li>
                            <b className='description'>{step.step_description}</b><br/><br/>
                            <b className='descriptor'>Ingredients:</b>
                            <ul className='ingredients'>
                                {
                                step.step_ingredients.map(ingredient => {
                                    const ingTarget = `/ingredient/${ingredient.ingredient.ingredient_id}`
                                    return (
                                    <li className='ingredient' key={ingredient.step_ingredient_id}><a link={ingTarget} href={ingTarget}>
                                        {`${ingredient.quantity} ${ingredient.ingredient.ingredient_unit}${ingredient.quantity === 1 ? '' : 's' }
                                         of ${ingredient.ingredient.ingredient_name}`}
                                    </a></li>
                                    )
                                })}
                            </ul><br/>
                            <li key={step.step_id} className='instruction'>{step.description}</li>
                        </li>
                    )
                })}
            </ol>
            <div className='category'>
            <h3>Categories</h3>
            <a href={categoryHref}>{recipe.category.category}</a>
            </div>
            <div className='modifyCard'>
                <button href='#' target='' onClick={ev => {
                    ev.preventDefault();
                    deleteRecipe(recipe.recipe_id)
                }}>Delete</button>
                <button href='#' target={`/edit/${recipe.recipe_id}`} onClick={navToHref}>

                </button>
            </div>
        </div>
    )

}

export default Recipecard;