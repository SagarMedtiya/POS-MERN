import React from 'react';  
import { Card } from 'antd';

const ItemList = ({item}) => {
    const { Meta } = Card;
    return (
        <Card
        hoverable
        style={{  width: 200, marginBottom:10}}
        cover={<img alt={item.name} src={item.image} style={{height: 150}}/>}
        >
        <Meta title={item.name}  />
        </Card>    
    )
}

export default ItemList