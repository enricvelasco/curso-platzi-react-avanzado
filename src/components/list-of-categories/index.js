import React from 'react';
import { Category } from '../category'
import { List, Item}  from './styles';
import { categories } from '../../../api/db';

export const ListOfCategories = () => (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
);
