/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingtime = -1)
{
  if(remainingtime === -1) return 'You forgot to set the timer.';
  if(remainingtime === 0) return 'Lasagna is done.';
  else if(remainingtime > 0) return 'Not done, please wait.';
}

export function preparationTime(array,layertime = 2)
{
  return array.length * layertime;
}

export function quantities(array)
{
  const ingredient ={
    noodles : 0,
    sauce : 0,
  };
  for(let a =0;a<array.length;a++)
    {
      switch (array[a]){
        case 'noodles':
          ingredient.noodles+=50;
            break;
          case 'sauce':
            ingredient.sauce+=0.2;
            break;
          default:
            break;
        }
    }
    return ingredient;      
}

export function addSecretIngredient(friendsList,myList)
{
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions = 2)
{
  console.log(portions);
  for(let r in recipe)
    {
      console.log(r, recipe[r]);
    }
  const recip = {};
  
  console.log(portions/2);
  for(let r in recipe)
    {
      recip[r] = recipe[r]*portions/2;
      console.log(r, recip[r], recipe[r]);
    }
  return recip;
  
}