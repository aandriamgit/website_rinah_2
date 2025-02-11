const observer = new IntersectionObserver((entries) => 
{
	entries.forEach((entry) => 
	{
		console.log(entry)
		if (entry.isIntersecting)
			entry.target.classList.add('show');
		else
			entry.target.classList.remove('show');
	});
});

const hidden_elements = document.querySelectorAll('.on_scroll');
hidden_elements.forEach((el) => observer.observe(el));

export default hidden_elements;
