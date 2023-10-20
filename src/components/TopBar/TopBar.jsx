import React, { useEffect, useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import "./TopBar.css";
import { useDispatch, useSelector } from "react-redux";
import { chooseData } from "../../Api/DataProcessing";

const fetchGroup = () => {
	if (localStorage.getItem("group")) {
		return localStorage.getItem("group");
	} else {
		return "status";
	}
};

const fetchOrder = () => {
	if (localStorage.getItem("order")) {
		return localStorage.getItem("order");
	} else {
		return "priority";
	}
};
const TopBar = () => {
	const [showOnClick, setshowOnClick] = useState(false);
	const dispatch = useDispatch();
	const { ticketData, allUser } = useSelector((state) => state.ReduxReducer);
	const [groupDetails, setgroupDetails] = useState(fetchGroup());
	const [ticketDetails, setticketDetails] = useState(fetchOrder());

	const handlegroupDetails = (e, valueBool) => {
		if (valueBool) {
			setgroupDetails(e.target.value);
			setshowOnClick(!showOnClick);
			localStorage.setItem("group", e.target.value);
		} else {
			setticketDetails(e.target.value);
			setshowOnClick(!showOnClick);
			localStorage.setItem("order", e.target.value);
		}
	};

	useEffect(() => {
		if (groupDetails === "user") {
			dispatch(
				chooseData(
					groupDetails,
					{
						ticketData,
						allUser
					},
					ticketDetails
				)
			);
		} else {
			dispatch(chooseData(groupDetails, ticketData, ticketDetails));
		}
	}, [ticketData, dispatch, groupDetails, allUser, ticketDetails]);

	return (
		<div className="top-header" style={{ paddingLeft: "20px", backgroundColor: "white" }}>
			<div className="displayButton">
				<button className="p-10 f-16 btn" onClick={() => setshowOnClick(!showOnClick)}>
					<span style={{ display: "flex", alignItems: "center" }}>
						<FaSlidersH style={{ marginRight: "5px" }} />
						Display
						<AiOutlineDown style={{ marginLeft: "10px" }} />
					</span>
				</button>

				{showOnClick && (
					<>
						<div className="dropOnClick flex-gap-10 p-10">
							<div className="selectGroup flex-sb">
								<span>Grouping</span>
								<select
									value={groupDetails}
									onChange={(e) => handlegroupDetails(e, true)}
									className="chooseStyle"
									name="group"
									id="group"
								>
									<option value="status">Status</option>
									<option value="user">User</option>
									<option value="priority">Priority</option>
								</select>
							</div>
							<div className="selectGroup flex-sb">
								<span>Ordering</span>
								<select
									value={ticketDetails}
									onChange={(e) => handlegroupDetails(e, false)}
									className="chooseStyle"
									name="order"
									id="order"
								>
									<option value="priority">Priority</option>
									<option value="title">Title</option>
								</select>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default TopBar;
