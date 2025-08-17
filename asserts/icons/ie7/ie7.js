/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ico-moon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-api': '&#xe90c;',
		'icon-apis': '&#xe90d;',
		'icon-award-badge': '&#xe90e;',
		'icon-award': '&#xe90f;',
		'icon-certificate': '&#xe910;',
		'icon-clients': '&#xe911;',
		'icon-clock': '&#xe912;',
		'icon-cloud-data': '&#xe913;',
		'icon-data-connection': '&#xe920;',
		'icon-education-savings': '&#xe921;',
		'icon-globe': '&#xe923;',
		'icon-education': '&#xe93a;',
		'icon-security': '&#xe93b;',
		'icon-payment-security': '&#xe93c;',
		'icon-personal-website': '&#xe93d;',
		'icon-protection': '&#xe93e;',
		'icon-secure': '&#xe93f;',
		'icon-speed-optimization': '&#xe941;',
		'icon-responsive-svgrepo-com-1': '&#xe942;',
		'icon-responsive': '&#xe943;',
		'icon-web-page': '&#xe944;',
		'icon-website-communication': '&#xe945;',
		'icon-website-program': '&#xe946;',
		'icon-website-seo': '&#xe947;',
		'icon-arrow-down-circle': '&#xe901;',
		'icon-book-open': '&#xe902;',
		'icon-home': '&#xe903;',
		'icon-mail': '&#xe904;',
		'icon-map-pin': '&#xe905;',
		'icon-pause-circle': '&#xe906;',
		'icon-phone': '&#xe907;',
		'icon-phone-call': '&#xe900;',
		'icon-phone-outgoing': '&#xe908;',
		'icon-play-circle': '&#xe909;',
		'icon-thumbs-up': '&#xe90a;',
		'icon-user': '&#xe90b;',
		'icon-users': '&#xe948;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
