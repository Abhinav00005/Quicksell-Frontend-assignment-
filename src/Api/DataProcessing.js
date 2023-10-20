import axios from "axios";

export const getAllData = () => async (dispatch) => {
	try {
		dispatch({ type: "DATA_REQUEST" });

		const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");

		dispatch({ type: "TICKET_SUCCESS", payload: data });
	} catch (error) {
		dispatch({ type: "TICKET_FAILURE" });
	}
};

export const chooseData = (group, ticketData, ticketDetails) => async (dispatch) => {
	try {
		dispatch({ type: "SELECT_DATA_REQUEST" });

		let user = false;
		let nSet = new Set();
		let arr = [],
			groupedData = [];

		if (group === "status") {
			ticketData.forEach((elem) => {
				nSet.add(elem.status);
			});

			arr = [...nSet];

			arr.forEach((elem, index) => {
				let arr = ticketData.filter((fElem) => {
					return elem === fElem.status;
				});
				groupedData.push({
					[index]: {
						title: elem,
						value: arr
					}
				});
			});
		} else if (group === "user") {
			user = true;
			ticketData?.allUser?.forEach((elem, index) => {
				arr = ticketData?.ticketData?.filter((Felem) => {
					return elem.id === Felem.userId;
				});

				groupedData.push({
					[index]: {
						title: elem.name,
						value: arr
					}
				});
			});
		} else {
			let priority_list = ["No priority", "Urgent", "High", "Medium", "Low"];

			priority_list.forEach((elem, index) => {
				arr = ticketData.filter((fElem) => {
					return index === fElem.priority;
				});

				groupedData.push({
					[index]: {
						title: elem,
						value: arr
					}
				});
			});
		}

		if (ticketDetails === "priority") {
			groupedData.forEach((elem, index) => {
				elem[index]?.value?.sort((a, b) => b.priority - a.priority);
			});
		}

		if (ticketDetails === "title") {
			groupedData.forEach((elem, index) => {
				elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
			});
		}

		dispatch({ type: "CHOOSE_TICKET_SUCCESS", payload: { groupedData, user } });
	} catch (error) {
		dispatch({ type: "CHOOSE_TICKET_FAILURE", payload: error.message });
	}
};
