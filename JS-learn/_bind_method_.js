/**
 * http://usejsdoc.org/
 */

var tnr = {
	tnrName : 'Nag',
	doTeach : function() {
		console.log(this.tnrName + " teaching JS");
	}
};

//tnr.doTeach();

var newTnr={tnrName:'New Nag'};


//tnr.doTeach.call(newTnr);
//tnr.doTeach.apply(newTnr);

var newF=tnr.doTeach.bind(newTnr);

// teach by new-tnr
newF();