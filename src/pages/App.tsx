import {
	faGithub,
	faSteam,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import KnowledgeGroup from "../components/KnowledgeGroup";
import KnowledgeItem from "../components/KnowledgeItem";
import Project from "../components/Project";

export default class App extends React.Component {
	public render() {
		return (
			<div>
				<section id="header" className="fullpage bg-primary">
					<div className="container text-center">
						<h1>
							Javiertc <FontAwesomeIcon icon={faCode} />
						</h1>
						<h2>Software Engineering Student</h2>
						<div className="d-flex justify-content-center py-4">
							<Button
								icon={<FontAwesomeIcon icon={faGithub} />}
								text="Github"
								link="https://github.com/thejaviertc"
							/>
							<Button
								icon={<FontAwesomeIcon icon={faTwitter} />}
								text="Twitter"
								link="https://twitter.com/javiertcesp"
							/>
							<Button
								icon={<FontAwesomeIcon icon={faSteam} />}
								text="Steam"
								link="https://steamcommunity.com/id/javiertc/"
							/>
						</div>
						<Button
							icon={<FontAwesomeIcon icon={faAngleDown} />}
							text="View More"
							link="#knowledge"
						/>
					</div>
				</section>
				<section id="knowledge" className="bg-secondary py-5">
					<div className="container text-center">
						<h2>Knowledge</h2>
						<div className="row justify-content-between">
							<KnowledgeGroup
								title="Frontend"
								items={[
									<KnowledgeItem
										key={1}
										title="HTML"
										img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
										amount={85}
									/>,
									<KnowledgeItem
										key={2}
										title="CSS"
										img="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={3}
										title="SCSS"
										img="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
										amount={25}
									/>,
									<KnowledgeItem
										key={4}
										title="Bootstrap"
										img="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={5}
										title="Javascript"
										img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={6}
										title="ReactJS"
										img="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
										amount={40}
									/>,
								]}
							/>
							<KnowledgeGroup
								title="Backend"
								items={[
									<KnowledgeItem
										key={1}
										title="Javascript"
										img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
										amount={65}
									/>,
									<KnowledgeItem
										key={2}
										title="Typescript"
										img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={3}
										title="NodeJS (ExpressJS)"
										img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={4}
										title="Java"
										img="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
										amount={50}
									/>,
								]}
							/>
							<KnowledgeGroup
								title="Databases"
								items={[
									<KnowledgeItem
										key={1}
										title="SQL"
										img="https://www.logo.wine/a/logo/Oracle_SQL_Developer/Oracle_SQL_Developer-Logo.wine.svg"
										amount={50}
									/>,
									<KnowledgeItem
										key={2}
										title="MySQL"
										img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
										amount={25}
									/>,
								]}
							/>
							<KnowledgeGroup
								title="Tools"
								items={[
									<KnowledgeItem
										key={1}
										title="Linux"
										img="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
										amount={45}
									/>,
									<KnowledgeItem
										key={2}
										title="Git"
										img="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
										amount={25}
									/>,
									<KnowledgeItem
										key={3}
										title="MySQL Workbench"
										img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
										amount={25}
									/>,
									<KnowledgeItem
										key={4}
										title="Adobe Photoshop"
										img="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
										amount={20}
									/>,
								]}
							/>
						</div>
					</div>
				</section>
				<section id="projects" className="bg-primary py-5">
					<div className="container text-center">
						<h2>Current Projects</h2>
						<Project
							title="Twitch Data"
							description="See the views and followers of your favourite Twitch Streamers!"
							image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/twitch-stats.jpg"
							badges={[
								<Badge
									key={1}
									title="Website"
									type="success"
								/>,
								<Badge
									key={2}
									title="ReactJS"
									type="warning"
								/>,
								<Badge
									key={3}
									title="Typescript"
									type="secondary"
								/>,
							]}
							websiteLink="https://thejaviertc.github.io/twitch-stats/"
							githubLink="https://github.com/thejaviertc/twitch-stats"
							position="left"
						/>
						<Project
							title="Steam Workshop Stats"
							description="See the views, subscriptions and favs of your Steam Workshop addons!"
							image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/steam-workshop-stats.jpg"
							badges={[
								<Badge
									key={1}
									title="Website"
									type="success"
								/>,
								<Badge
									key={2}
									title="ReactJS"
									type="warning"
								/>,
								<Badge
									key={3}
									title="Typescript"
									type="secondary"
								/>,
							]}
							websiteLink="https://thejaviertc.github.io/steam-workshop-stats/"
							githubLink="https://github.com/thejaviertc/steam-workshop-stats"
							position="right"
						/>
					</div>
				</section>
			</div>
		);
	}
}
