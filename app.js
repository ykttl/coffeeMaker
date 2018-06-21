var data = {

	coffeeName: '',		

	  espresso: {

		 sliderValue: 0,
		 slider0: true,
	     slider1: false,
	     height: 0,

	  },

      milk: {

		 sliderValue: 0,
		 slider0: true,
	     slider1: false,
		 slider2: false,
	     height: 0,

	  }, 


	  foam: {

		 sliderValue: 0,
		 slider0: true,
	     slider1: false,
	     height: 0,

      },

};



var event = {

	init: function() {
		this.espressoSlider();
		this.milkSlider();
		this.foamSlider();
	},

	espressoSlider: function() { 
		document.getElementById('espresso-slider').addEventListener('change', function() {

			var slider = document.getElementById('espresso-slider').value; // this returns number as string

			if(slider == 1 && data.espresso.slider0 === true) { 
				console.log( '0 -> 1');
				data.espresso.sliderValue = 1;
				data.espresso.slider1 = true;
				data.espresso.slider0 = false;
				render.espresso();
			}
			if(slider == 0 && data.espresso.slider1 === true ){ console.log( '1 -> 0');
				data.espresso.sliderValue = 0;
				data.espresso.slider1 = false;
				data.espresso.slider0 = true;
				render.removeEspresso();
			}
	        if(slider == 0 && data.espresso.slider1 === false ){ console.log( '0');
				data.espresso.sliderValue = 0;
				data.espresso.slider1 = false;
				data.espresso.slider0 = true;			
			}

			render.coffeeName();


			var foam = document.getElementById('foam');
             if (data.foam.height != 0 && data.milk.sliderValue === 0) {
             	foam.style.bottom = data.espresso.height; 
             }
             if (data.foam.height != 0 && data.milk.sliderValue === 0 && data.espresso.sliderValue === 0) {
             	foam.style.bottom = 0; 
             }
			
	    });
	},

	milkSlider: function() {
		document.getElementById('milk-slider').addEventListener('change', function() {
			var slider = document.getElementById('milk-slider').value; // this returns number as string

			if(slider == 2) { console.log( '1 -> 2');
				data.milk.sliderValue = 2;
				data.milk.slider2 = true;
				data.milk.slider1 = false;
				data.milk.slider0 = false;
				render.milk();
			}
			if(slider == 1 && data.milk.slider2 === true && data.milk.slider0 === false) { 
				console.log( '2 -> 1');
				data.milk.sliderValue = 1;
				data.milk.slider2 = false;
				data.milk.slider1 = true;
				data.milk.slider0 = false;
				render.removeMilk();
				render.removeMilk();
				render.milk();
			}
			if(slider == 1 && data.milk.slider2 === false && data.milk.slider0 === true) { 
				console.log( '0 -> 1');
				data.milk.sliderValue = 1;
				data.milk.slider2 = false;
				data.milk.slider1 = true;
				data.milk.slider0 = false;
				render.milk();
			}
			
			if(slider == 0 && data.milk.slider1 === true ){ console.log( '1 -> 0');
				data.milk.sliderValue = 0;
				data.milk.slider2 = false;
				data.milk.slider1 = false;
				data.milk.slider0 = true;
				render.removeMilk();
			}
			

			if(slider == 0 && data.milk.slider2 === true ){ console.log( '2 -> 0');
				data.milk.sliderValue = 0;
				data.milk.slider2 = false;
				data.milk.slider1 = false;
				data.milk.slider0 = true;
				render.removeMilk();
				render.removeMilk();

			}
	        if(slider == 0 && data.milk.slider1 === false ){ console.log( '0');
				data.milk.sliderValue = 0;
				data.milk.slider2 = false;
				data.milk.slider1 = false;
				data.milk.slider0 = true;			
			}

			render.coffeeName();
			
			var foam = document.getElementById('foam');
            if(data.foam.height != 0) {
            	foam.style.bottom = data.milk.height; 
             }  
             if (data.foam.height != 0 && data.milk.sliderValue === 0) {
             	foam.style.bottom = 0; 
             }

	    });
	},

	foamSlider: function() {
		document.getElementById('foam-slider').addEventListener('change', function() {
		
			var slider = document.getElementById('foam-slider').value; // this returns number as string


			if(slider == 1  && data.foam.slider0 === true) { 
				console.log( '0 -> 1');
				data.foam.sliderValue = 1;
				data.foam.slider1 = true;
				data.foam.slider0 = false;
				render.foam();
			}
			if(slider == 0 && data.foam.slider1 === true ){ console.log( '1 -> 0');
				data.foam.sliderValue = 0;
				data.foam.slider1 = false;
				data.foam.slider0 = true;
				render.removeFoam();
			}
	        if(slider == 0 && data.foam.slider1 === false ){ console.log( '0');
				data.foam.sliderValue = 0;
				data.foam.slider1 = false;
				data.foam.slider0 = true;			
			}

			render.coffeeName();
            
		})
	},
};


var render = {


	espresso: function() {	  
		var espresso = document.createElement('div');
			espresso.setAttribute('id','espresso');
			document.getElementById('magcup').appendChild(espresso);

		if (data.espresso.sliderValue === 1) { 	
		  	data.espresso.height = '30px';
		} 

		if (data.espresso.sliderValue === 0) {
			data.espresso.height= '0px';			
		}

		 espresso.style.height = data.espresso.height;		 
	},

	removeEspresso: function() {
        var espresso = document.getElementById('espresso');
	        espresso.parentNode.removeChild(espresso);
	},

	milk: function() {		
		var milk = document.createElement('div');
			milk.setAttribute('id','milk');
			document.getElementById('magcup').appendChild(milk);

		if (data.milk.sliderValue === 1) { 		
		  	data.milk.height = '80px';
		} 

		if(data.milk.sliderValue === 2) { 
			data.milk.height = '200px';
		}

		if (data.milk.sliderValue === 0) {
			data.milk.height= '0px';			
		}

		 milk.style.height = data.milk.height;	
	},

	removeMilk: function() {
        var milk = document.getElementById('milk');
	        milk.parentNode.removeChild(milk);
	},

	foam: function() {				 
		var foam = document.createElement('div');
			foam.setAttribute('id','foam');
			document.getElementById('magcup').appendChild(foam);

		if (data.foam.sliderValue === 1) { 	
		  	data.foam.height = '40px';
		} 

		if (data.foam.sliderValue === 0) {
			data.foam.height= '0px';			
		}

		if(data.milk.sliderValue != 0){
           var x = data.milk.height;
           foam.style.bottom = x;		   	
		} 
		
		if(data.milk.sliderValue === 0 && data.espresso.sliderValue != 0) {
		 var y = data.espresso.height;
		  foam.style.bottom = y;		 
		}

		foam.style.height = data.foam.height;
		
	},

	removeFoam: function() {
        var foam = document.getElementById('foam');
	        foam.parentNode.removeChild(foam);
	},

	coffeeName: function () {
		
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 0 && data.foam.sliderValue === 0) {
			data.coffeeName = 'espresso';
		}
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 0 && data.foam.sliderValue === 1 ) {
			data.coffeeName = 'macchiato';
		}
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 1 && data.foam.sliderValue === 0 ) {
			data.coffeeName = 'piccolo';
		}
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 2 && data.foam.sliderValue === 1 ) {
			data.coffeeName = 'latte';
		}
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 1 && data.foam.sliderValue === 1 ) {
			data.coffeeName = 'cappuccino';
		}
		if(data.espresso.sliderValue === 1 && data.milk.sliderValue === 2 && data.foam.sliderValue === 0 ) {
			data.coffeeName = 'flat white';
		}
		if(data.espresso.sliderValue === 0 && data.milk.sliderValue != 0 && data.foam.sliderValue != 0 ) {
			data.coffeeName = 'foamed milk';
		}
		if(data.espresso.sliderValue === 0 && data.milk.sliderValue != 0 && data.foam.sliderValue === 0 ) {
			data.coffeeName = 'milk';
		}
		if(data.espresso.sliderValue === 0 && data.milk.sliderValue === 0 && data.foam.sliderValue != 0 ) {
			data.coffeeName = 'foam';
		}

		var name = document.getElementById('coffee-name');
		name.textContent = data.coffeeName;


		this.menu(); 

	},

	menu: function() { 
		if(data.coffeeName === 'espresso') {
			document.getElementById('m-espresso').style.color = 'yellow';
		}
		if(data.coffeeName === 'latte') {
			document.getElementById('m-latte').style.color = 'yellow';
		}
		if(data.coffeeName === 'flat white') {
			document.getElementById('m-flat').style.color = 'yellow';
		}
		if(data.coffeeName === 'macchiato') {
			document.getElementById('m-macchiato').style.color = 'yellow';
		}
		if(data.coffeeName === 'cappuccino') {
			document.getElementById('m-cappuccino').style.color = 'yellow';
		}
		if(data.coffeeName === 'piccolo') {
			document.getElementById('m-piccolo').style.color = 'yellow';
		}
		if(data.coffeeName === 'milk') {
			document.getElementById('m-milk').style.color = 'yellow';
		}
		if(data.coffeeName === 'foamed milk') {
			document.getElementById('m-foamed-milk').style.color = 'yellow';
		}
	}
};

event.init();