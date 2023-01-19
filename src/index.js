import React from 'react';
import ReactDOM from 'react-dom';

// Импорт компонентов
import Card from './card';

let items = [
  {
    taste: "с фуа-гра",
    num_portion: "10", // +'порций'
    count_gift: '',
    gift: "Мышь", // +'в подарок'    
    kilo: '0,5',
    select_message: "Печень утки разварная с артишоками.",
    available: 0
  },
  {
    taste: "с рыбой",
    num_portion: "40", // +'порций'
    count_gift: '2',
    gift: "мыши", // +'в подарок'
    kilo: '2',
    select_message: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    available: 1
  },  
  {
    taste: "с курой",
    num_portion: "100", // +'порций'
    count_gift: '5',
    gift: "мышей", // +'в подарок'
    kilo: '5',
    select_message: "Филе из цыплят с трюфелями в бульоне.",
    available: 1
  }  
];

function Header(){
  return(
    <header>
      <div className="header">
        <p class="header__message"> Ты сегодня покормил кота? </p>
      </div>
    </header>
  );
};

class Shop extends React.Component{
  render(){
    return(
      <div class='market'>
        {items.map((item, id) => (<Card item={item} key={item.taste} index={id} />))} 
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <div>
    <Header/>
    <Shop/>        
  </div>,
  document.getElementById('root')
);