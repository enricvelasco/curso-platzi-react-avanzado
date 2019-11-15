import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../category'
import { List, Item}  from './styles';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-enric-ashen-ten.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed} >
      {
        loading ?
          <Item key='loading'><Category /></Item>
          :
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
}
