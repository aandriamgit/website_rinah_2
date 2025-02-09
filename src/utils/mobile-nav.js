const mobile_nav = () =>
{
	let header__bars;
	let mobil_nav;
	let flag;
	let window_width;

	header__bars = document.querySelector('.header__bars');
	mobil_nav = document.querySelector('.mobile-nav');
	flag = false;
	header__bars.addEventListener('click', () => 
	{
		flag = !flag;
		if (flag)
			mobil_nav.style.display = 'flex';
		else
			mobil_nav.style.display = 'none';
	});
	window.addEventListener('resize', () =>
	{
		window_width = window.innerWidth;
		if (window_width >= 768)
			mobil_nav.style.display = 'none'
	});
};

export default mobile_nav;
