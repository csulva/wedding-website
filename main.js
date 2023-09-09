var objPeople = {
    username: "chrisandsara",
    password : "vermont2024"
}

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

    // check is user input matches username and password of a current index of the objPeople array
    if(username == objPeople.username && password == objPeople.password) {
        // stop the function if this is found to be true
        return
    }
	}
	console.log("incorrect username or password")
