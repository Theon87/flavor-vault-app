// This will be the page that will display the full details of the recipe that the user clicked on.

//We will need a header, a nav bar containg home, login, and my recipes.

//We will need to display the recipe details on the page.

// We will need to have a button that will allow the user to save the recipe to their profile.

// Finally we'll need the footer

//     return (
//         <div>

//             <main>
//             <input 
//                     type="text" 
//                     placeholder="Search for recipes..." 
//                     value={searchTerm}
//                     onChange={handleSearch} 
//                 />

//                 <div className="recipe-list">
//                     {filteredRecipes.length > 0 ? (
//                         filteredRecipes.map(recipe => (
//                             <div key={recipe.id} className="recipe-item">
//                                 <Link to={`/recipe/${recipe.id}`}>
//                                     <h3>{recipe.title}</h3>
//                                     <p>{recipe.description}</p>
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No recipes found.</p>
//                     )}
//                 </div>
//             </main>
//             
//         </div>
//     );
// };