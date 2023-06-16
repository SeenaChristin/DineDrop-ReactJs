export function filterData(searchText,listOfRestaurants){
    const filterData = listOfRestaurants.filter(
      (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      return filterData;
}
