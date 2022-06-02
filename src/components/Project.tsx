import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";

interface ProjectProps {
	title: string;
	description: string;
	image: string;
	badges: JSX.Element[];
	websiteLink: string;
	githubLink: string;
	position: string;
}

/**
 * Show Project info
 */
export default class Project extends React.Component<ProjectProps> {
	render() {
		const informationPanel = (
			<div className="col-12 col-md-6">
				<h3>{this.props.title}</h3>
				<p>{this.props.badges}</p>
				<h4 className="py-2">{this.props.description}</h4>
				<div className="d-flex justify-content-center py-3">
					<Button
						icon={<FontAwesomeIcon icon={faWifi} />}
						text="Live Website"
						link={this.props.websiteLink}
					/>
					<Button
						icon={<FontAwesomeIcon icon={faGithub} />}
						text="Github Repository"
						link={this.props.githubLink}
					/>
				</div>
			</div>
		);

		const photoPanel = (
			<div className="col-12 col-md-6 d-none d-md-block">
				<img
					className="img-fluid"
					src={this.props.image}
					alt="Imagen"
				/>
			</div>
		);

		if (this.props.position == "left") {
			return (
				<div className="row py-5">
					{informationPanel}
					{photoPanel}
				</div>
			);
		} else {
			return (
				<div className="row py-5">
					{photoPanel}
					{informationPanel}
				</div>
			);
		}
	}
}
