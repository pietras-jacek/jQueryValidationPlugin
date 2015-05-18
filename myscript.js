$(document).ready(function(){
	$('#imie').blur(function(){
		$(this).myvalidate('required',{'errorText':'Pole imie jest wymagane','messageBox':'bledy'});
	});
	$('#nazwisko').blur(function(){
		$(this).myvalidate('bigcapital',{'errorText':'Nazwisko musi zaczynac sie wielka litera'});
	});
	$('#yob').blur(function(){
		$(this).myvalidate('isNumber', {'errorText' : 'Możliwe są tylko cyfry'});
	});
	$('#email').blur(function() {
		$(this).myvalidate('isEmail', {'errorText' : 'Adres email musi zawierać znak "@" '});
		$(this).myvalidate('required',{'errorText':'Pole adres email jest wymagane','messageBox':'bledy'});
	});
});