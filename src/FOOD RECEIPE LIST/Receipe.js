import './Receipe.css'
function Receipe(props){
    var receipes=props.receipes;
    return(
        <div class="full">
            <div class="demo"><center><h1>FOOD RECEIPES</h1></center></div>
            <ul>
                {
                    receipes.map((receipe,index)=>{
                        return <div class="content"><li key={index}>
                            <h1>{receipe.id}.   
                            {receipe.title}</h1>
                           
                            <div class="ingre">
                            <h3>Ingredients:</h3>
                                <ol>
                                    {
                                        receipe.ingredients.map((ingredient,index)=>{
                                            return <li key={index}>{ingredient}</li>
                                        })
                                    }
                                </ol>
                            </div>
                           <dl><dt><h3>Calories:</h3></dt><dd>{receipe.calories}</dd></dl>
                            <img src={receipe.image} alt={receipe.title}/>
                         </li>
                         </div>
                    })
                }
            </ul>
        </div>
    )
}
export default Receipe;