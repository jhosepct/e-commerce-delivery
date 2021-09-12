import './App.css';
import Header from './components/Header';
import './components/Header.css';
import './components/List.css';
import './components/CartItem.css';
import './components/Cart.css';
import './components/Section.css';


import React from 'react';
import List from './components/List';
import Logo from './assets/image/logoWhite.ico';
import Cart from './components/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Section from './components/Section';
import Preview from './components/Preview';
import Search from './components/Search';
import Sectionproduct from './components/SectionProduct';
import formatCurrency from "format-currency"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={   
      foods:[
        {id:0, categoria:1, title:'Aperitivo Nacional 350g', image: 'dish-5.png',description:'Reprehenderit aute excepteur amet reprehenderit mollit.', price:15.99},
        {id:1, categoria:1, title:'Pizza clasica ', image: 'dish-4.png',description:'Adipisicing minim eiusmod consequat voluptate veniam.', price:15.99},
        {id:2, categoria:1, title:'Pollo rostizado', image: 'dish-3.png',description:'Ullamco voluptate dolor enim sunt eiusmod adipisicing laborum non adipisicing do id adipisicing.', price:15.99},
        {id:3, categoria:1, title:'Nuggets de pollo ', image: 'dish-2.png',description:'Aute labore id sint nisi minim incididunt laboris deserunt duis eiusmod ullamco ullamco.', price:15.99},
        {id:4, categoria:1, title:'Combo de comida 5 a', image: 'dish-5.png',description:'Dolor officia pariatur id est nisi nostrud ut aliqua consectetur sint duis reprehenderit.', price:15.99},
        {id:5, categoria:1, title:'Alitas Broaster', image: 'dish-6.png',description:'Qui et fugiat ut irure voluptate officia officia labore consequat.', price:15.99},
        {id:6, categoria:1, title:'Hamburguesa ', image: 'dish-1.png',description:'Amet in pariatur in eu proident pariatur commodo nisi irure duis esse aliqua enim.', price:15.99},
      ],
      drinks:[
        {id:10, categoria:2, title:'JOHNNIE WALKER', image: 'drink5.webp',description:'Reprehenderit aute excepteur amet reprehenderit mollit.', price:15.99},
        {id:11, categoria:2, title:'EVERNESS ', image: 'drink4.webp',description:'Adipisicing minim eiusmod consequat voluptate veniam.', price:15.99},
        {id:12, categoria:2, title:'JOHNNIE WALKER', image: 'drink3.webp',description:'Ullamco voluptate dolor enim sunt eiusmod adipisicing laborum non adipisicing do id adipisicing.', price:15.99},
        {id:13, categoria:2, title:'TABERNERO', image: 'drink2.webp',description:'Aute labore id sint nisi minim incididunt laboris deserunt duis eiusmod ullamco ullamco.', price:15.99},
        {id:14, categoria:2, title:'CUSQUEÑA', image: 'drink7.webp',description:'Dolor officia pariatur id est nisi nostrud ut aliqua consectetur sint duis reprehenderit.', price:15.99},
        {id:15, categoria:2, title:'CHIVAS REGAL', image: 'drink6.webp',description:'Qui et fugiat ut irure voluptate officia officia labore consequat.', price:15.99},
        {id:16, categoria:2, title:'TABERNERO', image: 'drink1.webp',description:'Amet in pariatur in eu proident pariatur commodo nisi irure duis esse aliqua enim.', price:15.99},
      ],
      copyFoods: [],
      copyDrinks: [],
      cart: [],
      total: 0,
      count: 0,
      open: false,
      actualIndex:0,
      categoria:[
        {id:0,categoria:"Menu"},
        {id:1,categoria:"Bebidas"}
      ],
    };
  }


  
  componentDidMount(){
    this.initFoods();
  }

  initFoods = () =>{
    this.setState((state,props)=>({
      copyFoods: [...state.foods],
      copyDrinks: [...state.drinks]
    }));
  }
  onsearch = (query) =>{
    
    if(query === ''){
      this.initFoods();
    }else{
      const temp = [... this.state.foods];
      let res= [];
      const temp2 = [... this.state.drinks];
      let res2= [];
      
      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyFoods: [... res]});
      temp2.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res2.push(item);
        }
      });
      this.setState({copyDrinks: [... res2]});
    }
  }  

  render(){

    const addToCart= (id, categoria) =>{


      let newItem=[];
      if(categoria=== 1){
        newItem= this.state.foods.find(product => product.id === id);
      }
      else if(categoria=== 2){
        newItem= this.state.drinks.find(product => product.id === id);
      }
      
      let itemInCart= this.state.cart.find((item) => item.id === newItem.id);
     

      if(itemInCart){
        this.setState((state,props)=>({
          cart: this.state.cart.map((item) => item.id === newItem.id?{...item,quantity:item.quantity + 1}:item),
        }));
      }else{
        this.setState((state,props)=>({
          cart: [...this.state.cart,{...newItem,quantity:1}]
        }));
        this.setState({count: this.state.count +1})
      }
      this.setState({
        total:this.state.total+(this.state.cart.price*this.state.cart.quantity)
      })
    }

    const delFromCart= (id, all=false) =>{

      let itemToDelete = this.state.cart.find(item => item.id === id);
      
      if(all){
        this.setState((state,props)=>({
          cart: this.state.cart.filter((item) => item.id!== id),
          count: this.state.count -1
          /*count: this.state.cart.map((item) =>  item.id === id?{...this.state.count-1}:item)*/
        }))}
        
      else{
        if(itemToDelete.quantity>1){
          this.setState((state,props)=>({
            cart: this.state.cart.map((item) => item.id === id?{...item,quantity:item.quantity - 1}:item)
          }));;
        }else{
          this.setState((state,props)=>({
            cart: this.state.cart.filter((item) => item.id!== id)
          }));
          this.setState({count: this.state.count -1})
        }        
      }
    }

    const clearCart= () =>{
      this.setState((state,props)=>({
        cart: [],
        count:0,
        total:0

      }));
    
    }
    let opts = { format: "%s%v", symbol: "S/" };

    const makeAnOrder= () =>{

      const subTotal=formatCurrency(this.state.cart.reduce((amount, item) => (item.price * item.quantity) + amount, 0),
        opts)
      if(subTotal!=="S/0.00"){
        alert("La cuenta es: "+subTotal)  
      }      
    }

    const onHandleSelectCategoria=(item, e) =>{
      if(e.target.classList.contains('categoria')) return;

      const index = this.state.categoria.findIndex(x => x === item);
      this.setState({actualIndex: index})
    }

    const preview = (index) =>{
      if(index ===0){
        return this.state.copyFoods;
      }if(index ===1){
        return this.state.copyDrinks;
      }
    }

    return (
      <div className="App container">
        <Header title='Nacional' logo={Logo} onsearch={this.onsearch}  cart={this.state.cart}  clearCart={clearCart} delFromCart={delFromCart} addToCart={addToCart} makeAnOrder={makeAnOrder} total={this.state.total} count={this.state.count} total={this.state.total} />
        
        <Sectionproduct>            
            {
              this.state.categoria.map((item, i)=>
                <Section key={item.id} item={item} index={i} id={item.id} categoria={item.categoria} onHandleSelectCategoria={onHandleSelectCategoria} actualIndex={this.state.actualIndex} />
              )
            }
        </Sectionproduct>

        <Search onsearch={this.onsearch} />

        <Preview items={preview(this.state.actualIndex)} addToCart={addToCart}/>
      </div>
    );
  }
 
}

export default App;
