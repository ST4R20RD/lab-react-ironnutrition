import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [createdFood, setCreatedFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });
  const handleChange = (event) => {
    setCreatedFood({
      ...createdFood,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.addFood(createdFood);

    setCreatedFood({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          name="name"
          value={createdFood.name}
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label>Image</label>
        <Input
          name="image"
          value={createdFood.image}
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label>Calories</label>
        <Input
          name="calories"
          value={createdFood.calories}
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label>Servings</label>
        <Input
          name="servings"
          value={createdFood.servings}
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
