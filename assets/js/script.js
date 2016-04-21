// Global variables
var result = 0;
var operand = 0;
var operation = "";
var buffer = "";

// Connecting HTML elements to javascript objects....

var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

var btn_dot = document.getElementById("btn.");
var btn_equal = document.getElementById("btn=");
var btn_divide = document.getElementById("btn/");
var btn_multiply = document.getElementById("btnx");
var btn_plus = document.getElementById("btn+");
var btn_minus = document.getElementById("btn-");

var display = document.getElementById("display");
display.innerHTML = 0;

// Setting event listeners....

// For number entry

btn0.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("0");
		display.innerHTML = buffer;
	}
}
btn1.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("1");
		display.innerHTML = buffer;
	}
}
btn2.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("2");
		display.innerHTML = buffer;
	}
}
btn3.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("3");
		display.innerHTML = buffer;
	}
}
btn4.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("4");
		display.innerHTML = buffer;
	}
}
btn5.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("5");
		display.innerHTML = buffer;
	}
}
btn6.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("6");
		display.innerHTML = buffer;
	}
}
btn7.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("7");
		display.innerHTML = buffer;
	}
}
btn8.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("8");
		display.innerHTML = buffer;
	}
}
btn9.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat("9");
		display.innerHTML = buffer;
	}
}
btn_dot.onclick = function() {
	if (buffer.length < 8) {
		buffer = buffer.concat(".");
		display.innerHTML = buffer;
	}
}
btn_plus.onclick = function() {
	result = parseFloat(buffer);
	display.innerHTML = result;
	buffer = "";
	operation = "plus";
}
btn_minus.onclick = function() {
	result = parseFloat(buffer);
	display.innerHTML = result;
	buffer = "";
	operation = "minus";
}
btn_multiply.onclick = function() {
	result = parseFloat(buffer);
	display.innerHTML = result;
	buffer = "";
	operation = "multiply";
}
btn_divide.onclick = function() {
	result = parseFloat(buffer);
	display.innerHTML = result;
	buffer = "";
	operation = "divide";
}
btn_equal.onclick = function() {
	switch (operation) {
		case "plus": 
			if (buffer != "") {
			   result = add(result, parseFloat(buffer));
			} else {
				result = 0;
			}

			display.innerHTML = format8(result);
			result = 0;
			buffer = "";
			break;
		case "minus":
			if (buffer != "") {
			   result = substract(result, parseFloat(buffer));
			} else {
				result = 0;
			}
			display.innerHTML = format8(result);
			result = 0;
			buffer = "";
			break;
		case "multiply":
			if (buffer != "") {
			   result = multiply(result, parseFloat(buffer));
			} else {
				result = 0;
			}
			display.innerHTML = format8(result);
			result = 0;
			buffer = "";
			break;
		case "divide":
			if (buffer != "") {
			   result = divide(result, parseFloat(buffer));
			} else {
				result = 0;
			}
			display.innerHTML = format8(result);
			result = 0;
			buffer = "";
			break;
	}
}

// Basic functions

var add = function(num1, num2) {
	return num1 + num2;
};

var multiply = function(num1, num2) {
	return num1 * num2;
};

var divide = function(num1, num2) {
	return num1 / num2;
};

var substract = function(num1, num2) {
	return num1 - num2;
};
var format8 = function(num) {
	var str = num.toString();
	if (str.length > 8) {
		str = str.slice(0,9);
	}
	return parseFloat(str);
}

btn0.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn0.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn1.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn1.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn2.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn2.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn3.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn3.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn4.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn4.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn5.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn5.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn6.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn6.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn7.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn7.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn8.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn8.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn9.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn9.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_dot.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_dot.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_equal.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_equal.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_divide.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_divide.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_multiply.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_multiply.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_plus.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_plus.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
btn_minus.onmousedown = function() {
	this.style.boxShadow = "1px 1px 1px";
};
btn_minus.onmouseup = function() {
	this.style.boxShadow = "3px 3px 3px";
};
