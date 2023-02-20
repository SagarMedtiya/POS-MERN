import React from 'react';  
import { Card, Button } from 'antd';

const ItemList = ({item}) => {
    const { Meta } = Card;
    return (
        <Card
        
        style={{  width: 200, marginBottom:10}}
        cover={<img alt={item.name} src={item.image} style={{height: 150}}/>}
        >
        <Meta title={item.name}  />
        <div className='item-button'>
            <Button>Add To Cart</Button>            
        </div>
        </Card>    
    )
}

export default ItemList