$(document).ready(function(){
	$('#imie').blur(function(){
		$(this).myvalidate('required',{'errorText':'Pole imie jest wymagane','messageBox':'bledy'});
	});
	$('#nazwisko').blur(function(){
		$(this).myvalidate('bigcapital',{'errorText':'Nazwisko musi zaczynac sie wielka litera'});
	});
	$('#yob').blur(function(){
		$(this).myvalidate('isNumber');
	});
	$('#email').blur(function() {
		$(this).myvalidate('isEmail');
	});
});