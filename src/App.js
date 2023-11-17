import React from "react";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import Categories from "./Components/Categories";
import FullItem from "./Components/FullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Крісло',
          img: 'donald-tong.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo!',
          category: 'armchair',
          price: '45.99',
        },
        {
          id: 2,
          title: 'Стільчик',
          img: 'eric-montanah.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo!',
          category: 'chair',
          price: '10.5',
        },
        {
          id: 3,
          title: 'Софа',
          img: 'martin-pechy.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo!',
          category: 'sofa',
          price: '129.99',
        },
        {
          id: 4,
          title: 'Диван Чорний',
          img: 'pixabay.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo!',
          category: 'sofa',
          price: '169.99',
        },
        {
          id: 5,
          title: 'Кухонний стіл',
          img: 'pixabay-2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo!',
          category: 'table',
          price: '75.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({ currentItems: this.state.items.filter(el => el.category === category) })
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  render() {
    return (
      <div className="app__wrapper">
        <Header orders={this.state.orders} deleteOrder={this.deleteOrder} />
        <Categories onCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} showItems={this.onShowItem} />
        {this.state.showFullItem && <FullItem item={this.state.fullItem} showItems={this.onShowItem} onAdd={this.addToOrder} />}

        <Footer />
      </div>
    );
  }
}

export default App;
