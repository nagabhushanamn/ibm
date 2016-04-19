/**
 * http://usejsdoc.org/
 */

var hideBtn = document.querySelector(".btn-danger");
var successBtn = document.querySelector(".btn-success");
var box = document.querySelector(".jumbotron");

hideBtn.addEventListener('click', function(e) {
	box.style.display = 'none';
});

successBtn.addEventListener('click', function(e) {
	box.style.display = 'block';
});

// ------------------------------------------------------

var tnr = {
	tnrName : 'Nag',
	doTeach : function() {
		console.log(this.tnrName + " teaching JS");
	}
};

var teachBtn = document.querySelector("#teach");

// teachBtn.addEventListener('click',function(e){
// tnr.doTeach();
// });

teachBtn.addEventListener('click', tnr.doTeach.bind(tnr)) // hitch

