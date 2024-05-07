import React from "react";
import { useRef, useState} from "react";
import { motion } from "framer-motion";
import "./style.css";
import Diagrams from "../diagrams/Diagrams";
const Main = () => {
	const inputRef = useRef();
	const [inputValue, setInputValue] = useState('')
	const handleInputChange = (event) => {
		event.preventDefault();
		// ВОТ ЗДЕСЬ БУДЕТ ДЕЛАТЬ ЗАПРОС НА СЕРВЕР
		setInputValue(inputRef.current.value);
		console.log("Значение:", inputRef.current.value);
		inputRef.current.value = "";
	};
	return (
		<motion.div
			intial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			{/* <Diagrams/> */}
			<div className="main">
				<Diagrams className="diogram" />
				{/* <Diagrams2 className = 'diogram' /> */}
				<p>{inputValue} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sit saepe rerum repudiandae voluptatem doloremque, animi expedita? Soluta sequi laboriosam quae, voluptas aperiam dolor officiis? Eveniet consequuntur nobis atque excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi totam id quasi non corrupti, quos quis aliquid beatae nemo tempore numquam qui quisquam, nesciunt consectetur vitae suscipit, veniam ducimus ullam.</p>
				<form>
					<input
						className="main_input"
						type="text"
						ref={inputRef}
						placeholder="Введите ссылку"
					/>
					<button className="btn1" onClick={handleInputChange}>
						➤
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Main;
