import React, { useEffect } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import { getAllData } from "./Api/DataProcessing";
import DashBoard from "./components/DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const { ticketData } = useSelector((state) => state.ReduxReducer);

	useEffect(() => {
		dispatch(getAllData());
	}, [dispatch]);

	return (
		<div style={{ paddingTop: "10px" }}>
			<TopBar />
			<DashBoard />
		</div>
	);
};

export default App;
