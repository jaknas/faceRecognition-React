import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f3 black">
				{"Paste an image link down below and see what happens!"}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input
						className="f4 pa2 w-70 center br2"
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="w-30 f4 link ph3 pv2 black br2"
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
