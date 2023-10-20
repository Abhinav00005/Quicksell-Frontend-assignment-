import React from "react";
import { WiMoonFull } from "react-icons/wi";
import "./Card.css";

const Card = ({ id, title, tag, status }) => {
	return (
		<div className="card-Box flex-gap-10" style={{ gap: "5px" }}>
			<div className="card-Header flex-sb">
				<span style={{ textTransform: "uppercase" }} className="color-grey">
					{id}
				</span>
				<div className="imageDiv relative" style={{ width: "30px", height: "30px" }}>
					<img
						style={{ width: "100%", height: "100%", borderRadius: "50%" }}
						src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
						alt="UserImage"
					/>
					<div className="seeStatus"></div>
				</div>
			</div>
			<div className="cardIndex" style={{ fontWeight: 250 }}>
				<p>{title}</p>
			</div>
			<div className="contentTags">
				{tag?.map((elem, index) => {
					return (
						<div
							key={index}
							className="tags color-grey"
							style={{ display: "flex", alignItems: "center" }}
						>
							<WiMoonFull style={{ marginRight: "5px" }} />
							{elem}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
