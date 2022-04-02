import { Divider, Row } from 'antd';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodsData, setFoodsData] = useState(foods)
  const addFood = (newFood) => {

    const updatedFoods = [newFood, ...foods]

    setFoodList(updatedFoods)

  }
  const filterFoodList = (string) => {

    let filteredFoods;

    if (string === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter(foodData => {
        return foodData.name.toLowerCase().includes(string.toLowerCase());
      })
    }

    setFoodList(filteredFoods);
  }
  function deleteFromFoodList(param) {
    let copyFoodValues = [...foodList];

    const filteredItems = copyFoodValues.filter(function (item) {
      return item.name !== param.name;
    });

    setFoodList(filteredItems);
  }
  return (
    <div>
      <Divider>Food List</Divider>
      <AddFoodForm addFood={ addFood }/>
      <SearchBar filterFoodList={filterFoodList}/>
      <Row>
      {foodList.map((food, index) => {
        return (
          <FoodBox
                key={index}
                food={ {
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings
                }}
                deletedItem={deleteFromFoodList}
              />
        );
      })}
      </Row>
    </div>
  );
}
export default App;
