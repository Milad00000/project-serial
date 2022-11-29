let serial = document.querySelector(".serial");
let gen = document.querySelector(".generate");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let num = "";

gen.onclick = function() {
	for (let i=0; i<=10; i++) {
		let ran = arr[Math.floor(Math.random() * arr.length)];
		num += ran;
	}
	serial.innerHTML = num;
	num = "";
}