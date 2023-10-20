import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashBoard.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const DashBoard = () => {
	const { groupedData, user } = useSelector((state) => state.chooseDataReducer);

	return (
		groupedData && (
			<div className="dashBox" style={{ justifyContent: "space-evenly", marginTop: "12px" }}>
				{groupedData.map((elem, index) => {
					return (
						<>
							<div key={index} className="dash-Card-Box" style={{ marginLeft: "12px" }}>
								<div
									className="dash-Card-Heading flex-sb"
									style={{ marginBottom: "10px", marginTop: "10px" }}
								>
									<div className="leftDiv">
										{!user ? (
											<IoCheckmarkDoneCircleSharp />
										) : (
											<>
												<div
													className="imageDiv relative"
													style={{ width: "15px", height: "15px", display: "inline-block" }}
												>
													<img
														style={{
															width: "100%",
															height: "100%",
															borderRadius: "50%"
														}}
														src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
														alt="UserImage"
													/>
												</div>
											</>
										)}
										<span>
											{" "}
											{elem[index]?.title} {elem[index]?.value?.length}
										</span>
									</div>
									<div className="rightDiv">
										<AiOutlinePlus /> <span style={{ letterSpacing: "2px" }}> ••• </span>
									</div>
								</div>
								<div className="dashList flex-gap-10">
									{elem[index]?.value?.map((elem, ind) => {
										return <Card id={elem.id} title={elem.title} tag={elem.tag} />;
									})}
								</div>
							</div>
						</>
					);
				})}
			</div>
		)
	);
};

export default DashBoard;
