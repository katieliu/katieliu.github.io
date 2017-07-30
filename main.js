function main(){
	$('.head').hide();
	$('.head').fadeIn(5000);
	$('.nav').hide();
	$('.nav').fadeIn(5000);
	$('.slider').hide();
	$('.about').hide();
	$('.sectors').hide();
	$('.media').hide();
	$('.neshama').hide();
	$('.mediatwo').hide();
	$('.pride').hide();
	$('.sectorstwo').hide();
	$('.mediathree').hide();
	$('.pusateri').hide();
	$('.mediafour').hide();
	$('.city').hide();
	$('.mediafive').hide();
	$('.airport').hide();
	$('.photography').hide();
	$('.photo').hide();
	$('.webdev').hide();
	$('.phototwo').hide();
	$('.resume').hide();
	$('.underhead').hide();
	$('.underhead').slideDown(2000);
	//Homepage//
	$('.home').on("click", function(){
		$('.head').fadeIn(5000);
		$('.img').hide();
		$('.slider').hide();
		$('.about').hide();
		$('.sectors').hide();
		$('.media').hide();
		$('.neshama').hide();
		$('.mediatwo').hide();
		$('.pride').hide()
		$('.sectorstwo').hide();
		$('.mediathree').hide();
		$('.pusateri').hide();
		$('.mediafour').hide();
		$('.city').hide();
		$('.mediafive').hide();
		$('.airport').hide();
		$('.photography').hide();
		$('.photo').hide();
		$('.webdev').hide();
		$('.phototwo').hide();
		$('.resume').hide();
		$('.underhead').hide();
		$('.underhead').slideDown(2000);
	}); 
	//Who Am I page//
	$('.whoami').on("click", function(){
		$('.head').hide();
		$('.slider').fadeIn(1200);
		$('.about').fadeIn(2000);
		$('.sectors').hide();
		$('.media').hide();
		$('.neshama').hide();
		$('.mediatwo').hide();
		$('.pride').hide()
		$('.sectorstwo').hide();
		$('.mediathree').hide();
		$('.pusateri').hide();
		$('.mediafour').hide();
		$('.city').hide();
		$('.mediafive').hide();
		$('.airport').hide();
		$('.photography').hide();
		$('.photo').hide();
		$('.webdev').hide();
		$('.phototwo').hide();
		$('.resume').hide();
		$('.underhead').hide();
	});
	//Experiences Page//
	$('.exp').on("click",function(){
		$('.head').hide();
		$('.slider').hide();
		$('.about').hide();
		$('.photography').hide();
		$('.photo').hide();
		$('.webdev').hide();
		$('.phototwo').hide();
		$('.sectors').fadeIn(1000);
		$('.media').fadeIn(2000);
		$('.sectorstwo').fadeIn(1000);
		$('.mediathree').fadeIn(2000);
		$('.mediafour').fadeIn(2000);
		$('.mediafive').fadeIn(2000);
		$('.resume').slideDown(3500);
		$('.underhead').hide();


	$('.media').on('click', function(){
		$('.neshama').fadeIn(500);
		$('.pride').fadeOut();
		$('.pusateri').fadeOut();
		$('.city').fadeOut();
		$('.airport').fadeOut();
		});
	$('.mediatwo').fadeIn(2000);
	$('.mediatwo').on('click', function(){
		$('.pride').fadeIn(500);
		$('.neshama').fadeOut();
		$('.pusateri').fadeOut();
		$('.city').fadeOut();
		$('.airport').fadeOut();
		});
	$('.mediathree').on('click', function(){
		$('.pusateri').fadeIn(500);
		$('.pride').fadeOut();
		$('.neshama').fadeOut();
		$('.city').fadeOut();
		$('.airport').fadeOut();
		});
	$('.mediafour').on('click', function(){
		$('.city').fadeIn(500);
		$('.pusateri').fadeOut();
		$('.pride').fadeOut();
		$('.neshama').fadeOut();
		$('.airport').fadeOut();
	});
	$('.mediafive').on('click',function(){
		$('.airport').fadeIn(500);
		$('.city').fadeOut();
		$('.pusateri').fadeOut();
		$('.pride').fadeOut();
		$('.neshama').fadeOut();
	});
	});
	//Skills Page//
	$('.skills').on("click", function(){
		$('.head').hide();
		$('.underhead').hide();
		$('.slider').hide();
		$('.about').hide();
		$('.sectors').hide();
		$('.media').hide();
		$('.neshama').hide();
		$('.mediatwo').hide();
		$('.pride').hide()
		$('.sectorstwo').hide();
		$('.mediathree').hide();
		$('.pusateri').hide();
		$('.mediafour').hide();
		$('.city').hide();
		$('.mediafive').hide();
		$('.airport').hide();
		$('.photo').hide();
		$('.phototwo').hide();
		$('.resume').hide();
		$('.photography').slideDown(500);
		$('.webdev').slideDown(500);


	$('.photography').on('click',function(){
		$('.photo').slideDown(1000);
		$('.phototwo').slideUp(200);
	});
	$('.webdev').on('click',function(){
		$('.phototwo').slideDown(1000);
		$('.photo').slideUp(200);
	});



	});


}

$(document).ready(main);
var name = prompt ('Please Enter Your Name.');
console.log(name);

if (name === " "){
	name = prompt('Enter Your Name Please!!!');
	var newmessage = "Wecome, "+ name ;
	document.getElementsByClassName('underhead')[0].innerHTML = newmessage ;
}else if (name === "  ") {
	name = prompt('Enter Your Name Please!!!');
	var newmessage = "Wecome, "+ name ;
	document.getElementsByClassName('underhead')[0].innerHTML = newmessage ;
}else if (name === "    "){
	name = prompt('Enter Your Name Please!!!');
	var newmessage = "Wecome, "+ name ;
	document.getElementsByClassName('underhead')[0].innerHTML = newmessage ;
}else{
	var message = "Welcome, "+ name ;
	document.getElementsByClassName('underhead')[0].innerHTML = message;
}