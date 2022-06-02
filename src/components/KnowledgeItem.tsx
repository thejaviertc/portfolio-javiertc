import React from "react";

interface KnowledgeItemProps {
	title: string;
	img: string;
	amount: number;
}

/**
 * Shows knowledge info
 */
export default class KnowledgeItem extends React.Component<KnowledgeItemProps> {
	private type = "";

	/**
	 * Returns a string for the type of progress bar depending on the amount
	 */
	public identifyProgressType() {
		if (this.props.amount > 0 && this.props.amount <= 25)
			this.type = "danger";
		else if (this.props.amount > 25 && this.props.amount <= 50)
			this.type = "warning";
		else this.type = "success";
	}

	render() {
		this.identifyProgressType();

		return (
			<div className="col-6 my-4">
				<img
					src={this.props.img}
					width="100px"
					height="75px"
					className="mx-auto d-block"
					alt="Imagen"
				/>
				<h4 className="py-3">{this.props.title}</h4>
				<div className="progress" style={{ height: "22px" }}>
					<div
						className={
							"progress-bar progress-bar-striped progress-bar-animated bg-" +
							this.type
						}
						role="progressbar"
						style={{ width: this.props.amount + "%" }}
					>
						{this.props.amount + "%"}
					</div>
				</div>
			</div>
		);
	}
}
