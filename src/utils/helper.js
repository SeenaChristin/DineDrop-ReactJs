export function filterData(searchText,listOfRestaurants){
    const filterData = listOfRestaurants.filter(
      (res)=>res.strMeal.toLowerCase().includes(searchText.toLowerCase())
      );
      return filterData;
}

export function randomXToY(minVal,maxVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}