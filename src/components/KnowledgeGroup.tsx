import React from "react";

interface KnowledgeProps {
	title: string;
	items: JSX.Element[];
}

/**
 * A group of knowledge items
 */
export default class KnowledgeGroup extends React.Component<KnowledgeProps> {
	render() {
		return (
			<div className="col-12 col-md-5 py-4">
				<h3>{this.props.title}</h3>
				<div className="row pt-3">{this.props.items}</div>
			</div>
		);
	}
}
