
import './App.css';
import Receipe from './FOOD RECEIPE LIST/Receipe';
import img from './chicken-gravy-1.jpeg';

function App() {
  const receipes=[{id:"1",title:"fish fry",image:"https://www.yummytummyaarthi.com/wp-content/uploads/2022/02/fish-fry-2.jpeg",ingredients:["fish","ginger garlic paste","coriander leaves","garam masala","coriander","lemon","chilli power","pepper","turmeric","salt","onion","mint leaves"],calories:"240kcal"},
{id:"2",title:"mutton biryani",image:"https://www.yummytummyaarthi.com/wp-content/uploads/2018/06/1-34.jpg",ingredients:["basmati rice","salt","mutton","turmeric powder","oil","onion","ginger garlic paste","curd","cashews","coriander leaves","mint leaves","saffron"],calories:"150Kcal"},
{id:"3",title:"chicken gravy",image:"https://www.yummytummyaarthi.com/wp-content/uploads/2022/06/chicken-gravy-1.jpeg",ingredients:["tomato","capsicum","green chilli sauce","soya sauce","green chilli","onion","chilli powder","turmeric powder","garam masala","coriander","salt","ginger garlic paste"],calories:"315Kcal"},
{id:"4",title:"chicken gravy",image:img,ingredients:["tomato","capsicum","green chilli sauce","soya sauce","green chilli","onion","chilli powder"],calories:"315Kcal"}];
  return (

    <div>
      <Receipe receipes={receipes}/>

    </div>
  );
}

export default App;
