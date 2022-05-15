import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				{/* info */}
				<div className="info">
					<h1>
						job <span>tracking</span> App
					</h1>
					<p>
						I'm baby direct trade gochujang dreamcatcher wolf hexagon forage polaroid
						swag lumbersexual shoreditch schlitz. Next level 3 wolf moon brunch venmo
						four dollar toast wayfarers.
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
