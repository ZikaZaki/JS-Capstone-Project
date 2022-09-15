const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const mealsJSON = [
    {
        idMeal: 52977,
        strMeal: "Corba",
        strCategory: "Side",
        strArea: "Turkish",
        strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/58oia61564916529.jpg",
        strTags: "Soup",
    },
    {
        idMeal: 53060,
        strMeal: "Burek",
        strCategory: "Side",
        strArea: "Croatian",
        strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/tkxquw1628771028.jpg",
        strTags: "Streetfood, Onthego",
    },
    {
        idMeal: 52978,
        strMeal: "Kumpir",
        strCategory: "Side",
        strArea: "Turkish",
        strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/mlchx21564916997.jpg",
        strTags: "SideDish",
    },
];

global.fetch = () => Promise.resolve({
    json: () => Promise.resolve(mealsJSON),
});

describe('Test-Cases: Meals Counter', () => {
    test('- Number of Meals Should Be: 3', async () => {
        const fetchedMeals = await fetch(baseURL);
        const meals = await fetchedMeals.json();
        expect(meals.length).toBe(3);
    });
});