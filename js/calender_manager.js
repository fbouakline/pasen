function dagNaPasen(dag){
	this.dag = dag;
	this.getDag = function(){
		var D = this.parent.Pasen.datum.getDate() + this.dag;
		var M = this.parent.Pasen.datum.getMonth();
		var Y = this.parent.Pasen.datum.getFullYear();
		this.datum = new Date(Y, M, D)
		return this;
	}
}


var Calender = {
	Pasen : {

		getPasen : function(Y) {
			var C = Math.floor(Y/100);
	    	var N = Y - 19*Math.floor(Y/19);
		    var K = Math.floor((C - 17)/25);
		    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
		    I = I - 30*Math.floor((I/30));
		    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
		    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
		    J = J - 7*Math.floor(J/7);
		    var L = I - J;
		    var M = 3 + Math.floor((L + 40)/44);
		    var D = L + 28 - 31*Math.floor(M/4);
	   		this.datum = new Date(Y, ( M - 1 ), D);
	    	return this;
		}
	},


	Schrikkeljaar : {
		isSchrikkeljaar : function(Y) {
			this.year = Y;
			this.isLeap = new Date(Y, 1, 29).getMonth() == 1;
			return this;
		},
		bericht: function(){
			if ( this.isLeap ){
				return this.year + " is een schrikkeljaar.";
			}
			else{
				return this.year + " is geen schrikkeljaar.";
			}
		}
	},

	goedeVrijdag : {
		getDag : function(){
			var D = this.parent.Pasen.datum.getDate() - 2;
			var M = this.parent.Pasen.datum.getMonth();
			var Y = this.parent.Pasen.datum.getFullYear();
			this.datum = new Date(Y, M, D)
			return this;
		}
	},

	Hemelvaartsdag : new dagNaPasen(39),

	Pinksteren : new dagNaPasen(49),

	init : function() {
        this.goedeVrijdag.parent = this;
        this.Hemelvaartsdag.parent = this;
        this.Pinksteren.parent = this;
        delete this.init;
        return this;
    }

}.init();