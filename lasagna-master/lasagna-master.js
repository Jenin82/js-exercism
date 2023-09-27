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

export const cookingStatus = (minutesRemaining) => {
    return minutesRemaining !== undefined
        ? minutesRemaining === 0
            ? "Lasagna is done."
            : "Not done, please wait."
        : "You forgot to set the timer.";
};

export const preparationTime = (layers, timePerLayer = 2) => {
    return layers.length * timePerLayer;
};

export const quantities = (layers) => {
    return {
        noodles: layers.filter((i) => i === "noodles").length * 50,
        sauce: layers.filter((i) => i === "sauce").length * 0.2,
    };
};

export function addSecretIngredient(friendList, myList) {
    myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, amount) {
    const scaled = {};
    for (const key in recipe) {
        scaled[key] = (recipe[key] * amount) / 2;
    }
    return scaled;
}
