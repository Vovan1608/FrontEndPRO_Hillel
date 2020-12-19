window.onload = function() {
	function checkRegistration() {
		const forms = document.querySelectorAll("#registr form");

		forms.forEach( (form, index) => form.addEventListener("submit", function(event) {
			event.preventDefault();
			
			ajax({
				method: "GET",
				url: "http://localhost:3000/check-reg",
				success(response) {
					const status = response && JSON.parse(response);
					console.log(response);
					if(status) {
						doNextStep.call(this, index);
					}
				},
				error() {}
			})
		}));

		function doNextStep(curentStep) {
			const STEP = 1;
			const FIRST_STEP = 0;

			let nextStep = curentStep + STEP;
			nextStep = forms[nextStep] ? nextStep : FIRST_STEP;

			forms[curentStep].classList.remove("center");
			forms[nextStep].classList.add("center");
		}
	}

	checkRegistration();
}