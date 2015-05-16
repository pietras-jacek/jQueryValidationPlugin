(function($) {

	$.fn.myvalidate = function(method, options) {
		var settings = $.extend({
			'errorText' : 'Wystapil blad w walidacji',
			'errorColor' : 'red',
			'successColor' : 'green',
			'messageBox' : 'msgBox',
			'reg' : ''
		}, options);
		var methods = {
			required : function() {
				if ($(this).val() === "") {
					$('#' + settings.messageBox).append(
							"<p class=\"required\">" + settings.errorText
									+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$(this).css({
						'background-color' : 'green'
					});
				}

			},
			bigcapital : function() {
				var tester = /^[A-Z][a-z0-9_-]{3,19}$/;
				if (!tester.test($(this).val())) {
					$('#' + settings.messageBox).append(
							"<p class=\"bigcapital\">" + settings.errorText
									+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$(this).css({
						'background-color' : 'green'
					});
				}

			},
			pesel : function() {
				var tester = /^\d{11}$/;
				if ($(this).val() === "" || !tester.test($(this).val())) {
					$('#' + settings.messageBox)
							.append(
									"<p class=\"pesel\">" + settings.errorText
											+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$(this).css({
						'background-color' : 'green'
					});
				}
			},
			tel : function() {
				var tester = /^\d{11}$/;
				if ($(this).val() === "" || !tester.test($(this).val())) {
					$('#' + settings.messageBox).append(
							"<p class=\"tel\">" + settings.errorText + "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$(this).css({
						'background-color' : 'green'
					});
				}
			},
			isString : function() {
				var tester = /\D/;
				if ($(this).val() === "" || !tester.test($(this).val())) {
					$('#' + settings.messageBox).append(
							"<p class=\"isstring\">" + settings.errorText
									+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$(".isString").remove();
					$(this).css({
						'background-color' : 'green'
					});
				}
			},
			isNumber : function() {
				var tester = /\d/;
				if ($(this).val() === "" || !tester.test($(this).val())) {
					$('#' + settings.messageBox).append(
							"<p class=\"isnumber\">" + settings.errorText
									+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$('#' + settings.messageBox);
					$('.isNumer').remove();
					$(this).css({
						'background-color' : 'green'
					});
				}
			},
			isEmail : function() {
				var tester = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
				if ($(this).val() === "" || !tester.test($(this).val())) {
					$('#' + settings.messageBox).append(
							"<p class=\"isnumber\">" + settings.errorText
									+ "</p>");
					$(this).css({
						'background-color' : 'red'
					});
				} else {
					$('#' + settings.messageBox);
					$('.isNumer').remove();
					$(this).css({
						'background-color' : 'green'
					});
				}

			}
		//
		};
		return this.each(function() {

			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(
						arguments, 1));
			} else {
				$.error('Metoda ' + method
						+ ' nie istnieje w rozszerzeniu jQuery.inputText');
			}
		});
	};

})(jQuery);
