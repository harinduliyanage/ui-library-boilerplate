import * as React from "react";
import { hot } from "react-hot-loader";

import logo from "./logo.png";
import "./app.component.scss";
import { Button } from "../components/button/Button";

class AppComponent extends React.Component<Record<string, unknown>, undefined> {
	private div: JSX.Element;

	public render() {
		this.div = (
			<div className="app">
				<h1>Hello World!</h1>
				<img src={logo} height="480" />
				<Button
					backgroundColor={"yellow"}
					size={"large"}
					label={"Hello From Button"}
				/>
			</div>
		);
		return this.div;
	}
}

declare let module: Record<string, unknown>;

export default hot(module)(AppComponent);
