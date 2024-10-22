import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios
			.get("/api/jokes")
      .then((res) => {
        setJokes(res.data)
        console.log(res.data);
      })
			.catch((err) => {
				console.log("error axios data: " , err);
			});
	}, []);

	return (
		<>
			<h1>Learning backend with Hitesh Sir</h1>
			<p>Jokes : {jokes.length}</p>
			{jokes.map((joke) => (
				<div key={joke.id}>
					<h3>{joke.title}</h3>
					<p>{joke.body}</p>
				</div>
			))}
		</>
	);
}

export default App;
