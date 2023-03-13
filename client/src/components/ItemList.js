import React from 'react';  
import { Card, Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { setCart } from '../redux/cartSlice';
const ItemList = ({item}) => {
    //update the cart handler
    const dispatch = useDispatch();
    async function handleAddToCart(){
        try {
            dispatch(setCart(item))
        } catch (error) {
            console.log(error)
        }
    }

    const { Meta } = Card;
    return (
        <Card
        
        style={{  width: 200, marginBottom:10}}
        cover={<img alt={item.name} src={item.image} style={{height: 150}}/>}>
        
        <Meta title={item.name}  />
  
        <div className='item-button'>
            <Button onClick={handleAddToCart}>Add To Cart</Button>            
        </div>
        </Card>    
    )
}

export default ItemList