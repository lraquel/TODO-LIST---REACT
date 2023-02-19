import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, SetInputValue]=useState("");
	const [list, setList]=useState([]);

	return (
		<div className="container text-center">

			<div>
				<h1 className="text-center mt-5 mb-3 text-info" style={{fontFamily: "cursive", fontWeight: "bold"}}>Mi Lista de Tareas</h1>
			</div>

			<div className="barrainput">
				       <input className="form-control  border border-info mb-3 bg-light" type="text" 
				       onChange={ (e) => SetInputValue(e.target.value)}
					   value={inputValue}
					   onKeyDown={(e) => {
						if (e.key === "Enter"){
							setList(list.concat(inputValue));
							SetInputValue("");
						}
					   }
					   }
					   placeholder="Agregar Lista de Tareas... "/>
					   
			</div>

			<div>
				<ul>
					{list.map((item,index)=> (
						<li className="list-group-item d-flex justify-content-between mb-1 border border-light">
						
							  {item}{""}
							
							<button className="btn btn-outline-info"
							    onClick={ ()=> setList(list.filter((t,currentIndex)=> index !== currentIndex)) }><i class="fa fa-trash-alt"></i></button>
						</li>
					))}
					
				</ul>
			</div>
			
			<div className="text-danger" style={{fontFamily: "cursive" }}>
				{list.length} Tareas Pendientes
			</div>
			
		</div>
	);
};

export default Home;
