const	faqs = document.querySelectorAll(".faq-box__accordion__minibox");

faqs.forEach(faq => 
{
	faq.addEventListener("click", () =>
	{
		faq.classList.toggle("active");
	})
})

export default faqs;
