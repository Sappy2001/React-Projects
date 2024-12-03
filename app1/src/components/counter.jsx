import React, { Component } from "react";
export default class Counter extends Component {
	// state = {
	// 	count: this.props.value,
	// 	// imagUrl: "https://picsum.photos/200",
	// 	tags: ["tag1", "tag2", "tag3"],
	// };
	// handleIncrement=()=> {
		
    //     this.setState({count:this.state.count+1});
    //     console.log("increment clicked",this.state.count);
	// }

	render() {
		console.log(this.props);
		return (
			<>
			{this.props.children}
				{/* <img src={this.state.imagUrl} alt="" /> */}
				<span style={{ fontSize: 15,margin:5 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
				style={{ margin:5}}
					// onClick={this.handleIncrement}
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm">+
					</button>
					<button
					style={{ margin:5}}
					// onClick={this.handleDecrement}
					onClick={() => this.props.onDecrement(this.props.counter)}
					className="btn btn-secondary btn-sm">-
					</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete
				</button>
				{/* {this.rederTags()} */}
			</>
		);
	}
	// rederTags() {
	// 	return this.state.tags.length === 0 ? (
	// 		<p>there is no tags</p>
	// 	) : (
	// 		<ul>
	// 			{this.state.tags.map((tag) => (
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		// const { count }=this.state;
		// const {value}= this.props.counter;
		return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
	}
}
