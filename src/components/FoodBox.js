import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {
    const deleteItem = (item) => {
        props.deletedItem(item);
      };
    return (
        <Col>
          <Card
            title={props.food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={props.food.image} height={60} alt="food" />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
              <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={() => deleteItem(props.food)}> Delete </Button>
          </Card>
        </Col>
      );
}

export default FoodBox;