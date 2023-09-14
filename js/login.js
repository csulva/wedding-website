// class Login {
// 	constructor(form, fields) {
// 		this.form = form;
// 		this.fields = fields;
// 		this.validateonSubmit();
// 	}

// 	validateonSubmit() {
// 		let self = this;

// 		this.form.addEventListener("submit", (e) => {
// 			e.preventDefault();
// 			var error = 0;
// 			self.fields.forEach((field) => {
// 				const input = document.querySelector(`#${field}`);
//                 console.log(input.value)
// 				if (self.validateFields(input) == false) {
// 					error++;
// 				}
// 			});
// 			if (error == 0) {
// 				//do login api here
// 				localStorage.setItem("auth", 1);
// 				this.form.submit();
// 			}
// 		});
// 	}

// 	validateFields(field) {
// 		if (field.value.trim() === "") {
// 			this.setStatus(
// 				field,
// 				`${field.previousElementSibling.innerText} cannot be blank`,
// 				"error"
// 			);
// 			return false;
// 		} else {
// 			if ((field.id === "username" && field.value === "chrisandsara") || (field.id === "password" && field.value === "vermont2024")) {
// 			// Check both username and password
// 			this.setStatus(field, null, "success");
// 			this.setStatus(field.nextElementSibling, null, "success");
// 			return true;
// 		} else {
// 			// Handle incorrect username or password
// 			this.setStatus(
// 				field,
// 				`Incorrect ${field.previousElementSibling.innerText}`,
// 				"error"
// 			);
// 			return false;
// 			}
// 		}
// 	}

// 	setStatus(field, message, status) {
// 		const errorMessage = field.parentElement.querySelector(".error-message");

// 		if (status == "success") {
// 			if (errorMessage) {
// 				errorMessage.innerText = "";
// 			}
// 			field.classList.remove("input-error");
// 		}

// 		if (status == "error") {
// 			errorMessage.innerText = message;
// 			field.classList.add("input-error");
// 		}
// 	}
// }

// const form = document.querySelector(".loginForm");
// if (form) {
// 	const fields = ["username", "password"];
// 	const validator = new Login(form, fields);
// }