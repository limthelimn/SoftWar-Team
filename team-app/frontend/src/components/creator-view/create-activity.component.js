import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../navbar.component";
import "../Styles.css";
import date from "../images/calendar.png";
import Swal from "sweetalert2"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Datepicker from 'flowbite-datepicker/Datepicker';

export default class CreateActivity extends Component {
	constructor(props) {
		super(props);

		this.onChangeActName = this.onChangeActName.bind(this);
		this.onChangeActDescription = this.onChangeActDescription.bind(this);
		this.onChangeVirtualMoney = this.onChangeVirtualMoney.bind(this);
		this.onChangeUnitMoney = this.onChangeUnitMoney.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			actName: "",
			actDescription: "",
			virtualMoney: "",
			unitMoney: "",
			email: "",
			date: new Date(),
			users: [],
		};
	}

	componentDidMount() {
		// this.setState({actName:"test"});
	}

	onChangeActName(e) {
		//    const data = axios.get("http://localhost:5000/activity/")
		//    const res = data.then((res)=>res.data);

		this.setState({
			actName: e.target.value,
		});
	}

	onChangeActDescription(e) {
		this.setState({
			actDescription: e.target.value,
		});
	}

	onChangeVirtualMoney(e) {
		this.setState({
			virtualMoney: e.target.value,
		});
	}

	onChangeUnitMoney(e) {
		this.setState({
			unitMoney: e.target.value,
		});
	}

	onChangeDate(date) {
		this.setState({
			date: date,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const emails = window.localStorage.activityEmail
		const activity = {
			actName: this.state.actName,
			actDescription: this.state.actDescription,
			virtualMoney: this.state.virtualMoney,
			unitMoney: this.state.unitMoney,
			email: emails,
			date: this.state.date,
		};

		console.log(activity);

		axios
			.post("http://localhost:5000/activity/add", activity)
			.then((res) => {
				if (res.status === 200) {
					Swal.fire('Activity Added !').then((result) => {
						window.location = "/activityList";
					});
				} else {
					// alert("Cannot create this Activity !")
					Swal.fire("Cannot create this Activity !")
				}
				//relocation to homepage
			})
			.catch((err) => {
				if (err) {
					// Swal.fire("Cannot use this Activity Name!")
					Swal.fire("Cannot create this Activity !")
				}
			});
	}


render() {
	return (
		<main>
			<Navbar />
			<div className="p-12">
				<p className="text-36px text-center">Create Activity</p>
			</div>

			<form onSubmit={this.onSubmit}>

				<div className="grid grid-cols-2 w-9/12 gap-16 mx-auto
									xs:grid-cols-1
									sm:grid-cols-1
									md:grid-cols-1
									lg:grid-cols-2
									xl:grid-cols-2
									2xl:grid-cols-2">

					{/* col1 */}
					<div className="justify-center">

						{/* input activity name */}
						<div className="w-full">
							{/* <label className="text-18px bold">Activity Name</label> */}
							<label className="text-18px bold">ACTIVITY NAME</label>
							<input
								className="input mt-4 mb-8 w-full"
								id="actName"
								name="actName"
								type="text"
								value={this.state.actName}
								onChange={this.onChangeActName}
								placeholder="Enter Activity Name"
							/>
						</div>

						{/* input virtual money and unit */}
						<div className="grid grid-cols-2 gap-4">

							{/* virtual money container */}
							<div className="w-full">
								<label className="text-18px bold">VIRTUAL MONEY / GUEST</label>
								<input
									className="input mt-4 mb-8 w-full"
									id="virtualMoney"
									name="virtualMoney"
									type="text"
									value={this.state.virtualMoney}
									onChange={this.onChangeVirtualMoney}
									placeholder="Enter Virtual Money"
								/>
							</div>

							{/* unit container */}
							<div class="w-full">
								<label className="text-18px bold" for="grid-last-name">
									UNIT
								</label>
								<input
									className="input mt-4 mb-8 w-full"
									required
									id="unitMoney"
									name="unitMoney"
									type="text"
									value={this.state.unitMoney}
									onChange={this.onChangeUnitMoney}
									placeholder="Enter Unit"
								/>
							</div>
						</div>

						{/* input date */}
						<div className="w-full">
							<label className="text-18px bold">DATE</label>

							<DatePicker
								className="input mt-4 mb-8 w-full"
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>

					{/* col2 */}
					<div className="justify-center">

						{/* input description */}
						<div className="w-full mx-auto">
							<label className="">Description</label>
							<textarea
								rows="7"
								required
								id="actName"
								name="actName"
								value={this.state.actDescription}
								onChange={this.onChangeActDescription}
								placeholder="Description"
								className="input w-full"
							/>

						</div>
					</div>
				</div>

				{/* description */}
				{/* <div className="justify-center w-9/12 mx-auto">
					<label className="text-18px bold">DESCRIPTION</label>
					<ReactQuill
						theme="snow"
						className="mt-4 mb-8"
						id="actName"
						name="actName"
						value={this.state.actDescription}
						onChange={this.onChangeActDescription}
						modules={this.modules}
						formats={this.formats}
						placeholder="Put your Activity Description here"
					/>
				</div> */}

				<div className="container justify-end my-8 mx-auto w-9/12">
					<input
						type="submit"
						value="Create Activity"
						className="button red p-2 w-48"
					/>
				</div>
			</form>
		</main>
	);
}
}
