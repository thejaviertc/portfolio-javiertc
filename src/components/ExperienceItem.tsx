import React from "react";

// Props Interface
interface ExperienceItemProps {
	column: string;
	img: string;
	text: string;
	width: string;
	type: string;
}

// ExperienceItem Component
class ExperienceItem extends React.Component<ExperienceItemProps> {
	render() {
		return (
			<div className={this.props.column + " py-2"}>
				<img
					src={this.props.img}
					width="100px"
					height="75px"
					className="mx-auto d-block my-3"
					alt="Imagen"
				/>
				<h4 className="text-center pb-3">{this.props.text}</h4>
				<div className="progress">
					<div
						className={
							"progress-bar progress-bar-striped progress-bar-animated bg-" +
							this.props.type
						}
						role="progressbar"
						style={{ width: this.props.width }}
					></div>
				</div>
			</div>
		);
	}
}

export default ExperienceItem;
