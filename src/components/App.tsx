import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
	private div: JSX.Element;

	public render() {
		this.div = (
			<div className="app">
				<h1>Hello World!</h1>
				<p>Foo to the barz</p>
				<img src={reactLogo.default} height="480" />
			</div>
		);
		return this.div;
	}
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
