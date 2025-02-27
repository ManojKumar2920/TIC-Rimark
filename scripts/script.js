document.addEventListener("DOMContentLoaded", function () {
  // Select the onboarding elements
  const stepAccountType = document.getElementById("step-account-type");

  //individual steps
  const stepSignup = document.getElementById("step-signup");
  const stepLogin = document.getElementById("step-signin")
  const stepLocation = document.getElementById("step-location");
  const stepRewards = document.getElementById("step-rewards");
  const stepUsername = document.getElementById("step-username");
  const stepCompletion = document.getElementById("step-completion");
 
  


 

  const stepSignupBusiness = document.getElementById("step-signup-business");
  const stepClaimName = document.getElementById("step-claim-name");
  const stepCreateRewards = document.getElementById("step-create-rewards");
  const stepClaimUrl = document.getElementById("step-claim-url");
  const stepCompletionBusiness = document.getElementById("step-completion-business");

  // Select the account type options
  const accountOptions = document.querySelectorAll(".onboarding-option");
  const leftContainer = document.querySelector(".left-container");
  const themeoverlay = document.querySelector(".theme-overlay");
  const changeText = document.querySelector(".change-text");
  if (accountOptions.length > 0) {
    accountOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const accountType = option.getAttribute("data-account-type");
        console.log("Selected Account Type: ", accountType);

        // Hide account type step
        stepAccountType.classList.remove("active");
        leftContainer.style.backgroundImage = "url('../assets/SecondStep.png')";
        themeoverlay.style.background = "rgba(31, 65, 187,  0.8)";
        changeText.innerHTML = "Join Rimark to attract new customers with powerful, referral-driven recommendations. Let's get your business set up!";
        changeText.style.width = "90%";
        moveIndicator(1);

        // Show the appropriate next step based on account type
        if (accountType === "individual") {
          stepSignup.classList.add("active");
        } else if (accountType === "business") {
          stepSignupBusiness.classList.add("active");
        }
      });
    });
  }

  // Select elements
  const formInputs = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    termsCheckbox: document.getElementById("termsCheckbox"),
  };

  const errors = {
    firstName: document.getElementById("firstNameError"),
    lastName: document.getElementById("lastNameError"),
    email: document.getElementById("emailError"),
    password: document.getElementById("passwordError"),
    termsCheckbox: document.getElementById("termsError"),
  };

  const createAccountButton = document.querySelector("#proceedToLocation");

  // Helper function to display error messages
  function showError(input, message) {
    errors[input].textContent = message;
    errors[input].style.display = "block";
  }

  // Helper function to clear error messages
  function clearError(input) {
    errors[input].textContent = "";
    errors[input].style.display = "none";
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation criteria (at least 8 characters)
  const passwordRegex = /.{8,}/;

  // Validate the form
  function validateForm() {
    let isValid = true;

    // Validate first name
    if (!formInputs.firstName.value.trim()) {
      showError("firstName", "First name is required.");
      isValid = false;
    } else {
      clearError("firstName");
    }

    // Validate last name
    if (!formInputs.lastName.value.trim()) {
      showError("lastName", "Last name is required.");
      isValid = false;
    } else {
      clearError("lastName");
    }

    // Validate email
    if (!formInputs.email.value.trim()) {
      showError("email", "Email is required.");
      isValid = false;
    } else if (!emailRegex.test(formInputs.email.value.trim())) {
      showError("email", "Enter a valid email address.");
      isValid = false;
    } else {
      clearError("email");
    }

    // Validate password
    if (!formInputs.password.value.trim()) {
      showError("password", "Password is required.");
      isValid = false;
    } else if (!passwordRegex.test(formInputs.password.value.trim())) {
      showError("password", "Password must be at least 8 characters long.");
      isValid = false;
    } else {
      clearError("password");
    }

    // Function to detect if the user is on a mobile device
    function isMobileScreen() {
      return window.innerWidth <= 768; // Adjust the width threshold as needed for your design
    }

    // Validation logic for terms and conditions
    if (!isMobileScreen()) {
      // Validate terms and conditions only if not on mobile screen
      if (!formInputs.termsCheckbox.checked) {
        showError("termsCheckbox", "You must agree to the terms and conditions.");
        isValid = false;
      } else {
        clearError("termsCheckbox");
      }
    } else {
      // Clear any errors if on mobile and the checkbox is optional
      clearError("termsCheckbox");
    }


    return isValid;
  }

  // Add event listener to the button
  createAccountButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      // If the form is valid, proceed to the next step
      stepSignup.classList.remove("active");
      stepLocation.classList.add("active");
      leftContainer.style.backgroundImage = "url('../assets/ThridStep.png')";
      themeoverlay.style.background = "rgba(31, 65, 187,  0.8)";
      changeText.innerHTML = "Unlock local recommendations personalized for you! Select your current city to find and share local hidden gems in your community.!";
      changeText.style.fontSize = "16px";
      changeText.style.width = "90%";
      moveIndicator(2)

      console.log("Transition to location step.");
    } else {
      console.log("Validation failed.");
    }
  });

  // Select business signup form elements
  const businessFormInputs = {
    firstName: document.getElementById("bfirstName"),
    lastName: document.getElementById("blastName"),
    email: document.getElementById("bemail"),
    password: document.getElementById("bpassword"),
    termsCheckbox: document.getElementById("btermsCheckbox"),
  };

  const businessErrors = {
    firstName: document.getElementById("bfirstNameError"),
    lastName: document.getElementById("blastNameError"),
    email: document.getElementById("bemailError"),
    password: document.getElementById("bpasswordError"),
    termsCheckbox: document.getElementById("btermsError"),
  };

  const proceedToclaimNameButton = document.querySelector("#proceedToclaimName");

  // Helper function to display error messages
  function showBusinessError(input, message) {
    businessErrors[input].textContent = message;
    businessErrors[input].style.display = "block";
  }

  // Helper function to clear error messages
  function clearBusinessError(input) {
    businessErrors[input].textContent = "";
    businessErrors[input].style.display = "none";
  }

  // Validate the business signup form
  function validateBusinessForm() {
    let isValid = true;
  
    // Function to detect if the screen size is mobile
    function isMobileScreen() {
      return window.innerWidth <= 768; // Adjust breakpoint as needed
    }
  
    // Validate first name
    if (!businessFormInputs.firstName.value.trim()) {
      showBusinessError("firstName", "First name is required.");
      isValid = false;
    } else {
      clearBusinessError("firstName");
    }
  
    // Validate last name
    if (!businessFormInputs.lastName.value.trim()) {
      showBusinessError("lastName", "Last name is required.");
      isValid = false;
    } else {
      clearBusinessError("lastName");
    }
  
    // Validate email
    if (!businessFormInputs.email.value.trim()) {
      showBusinessError("email", "Email is required.");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessFormInputs.email.value.trim())) {
      showBusinessError("email", "Enter a valid email address.");
      isValid = false;
    } else {
      clearBusinessError("email");
    }
  
    // Validate password
    if (!businessFormInputs.password.value.trim()) {
      showBusinessError("password", "Password is required.");
      isValid = false;
    } else if (!/.{8,}/.test(businessFormInputs.password.value.trim())) {
      showBusinessError("password", "Password must be at least 8 characters long.");
      isValid = false;
    } else {
      clearBusinessError("password");
    }
  
    // Validate terms and conditions (optional on mobile screens)
    if (!isMobileScreen()) {
      if (!businessFormInputs.termsCheckbox.checked) {
        showBusinessError("termsCheckbox", "You must agree to the terms and conditions.");
        isValid = false;
      } else {
        clearBusinessError("termsCheckbox");
      }
    } else {
      clearBusinessError("termsCheckbox"); // Clear any previous error for mobile
    }
  
    return isValid;
  }
  

  // Add event listener to the "Create Account" button
  proceedToclaimNameButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    if (validateBusinessForm()) {
      // If the form is valid, transition to the next step
      stepSignupBusiness.classList.remove("active");
      stepClaimName.classList.add("active");
      moveIndicator(2)
      leftContainer.style.backgroundImage = "url('../assets/ThridStep.png')";
      console.log("Transitioned to claim name step.");
    } else {
      console.log("Validation failed for business signup form.");
    }
  });


  const backToRewardsBtn = document.getElementById("backToRewards");
  if (backToRewardsBtn) {
    backToRewardsBtn.addEventListener("click", function () {
      stepLocation.classList.remove("active");
      stepRewards.classList.add("active");
    });
  }

  const backAccTypeBtn = document.getElementById("backToAccountType");
  if (backAccTypeBtn) {
    backAccTypeBtn.addEventListener("click", function () {
      stepSignupBusiness.classList.remove("active");
      stepSignup.classList.remove("active");
      stepAccountType.classList.add("active");
    });
  }

  const backUsernameBtn = document.getElementById("backToUsername");
  if (backUsernameBtn) {
    backUsernameBtn.addEventListener("click", function () {
      stepCompletion.classList.remove("active");
      stepUsername.classList.add("active");
    });
  }

  const backSignUpBtn = document.getElementById("backToSignup");
  if (backSignUpBtn) {
    backSignUpBtn.addEventListener("click", function () {
      console.log("Sign up back is clicked!!");
      stepLocation.classList.remove("active");
      stepSignup.classList.add("active");
    });
  }

  const proceedToRewardsBtn = document.getElementById("proceedToRewards");
  if (proceedToRewardsBtn) {
    proceedToRewardsBtn.addEventListener("click", function () {
      stepLocation.classList.remove("active");
      stepRewards.classList.add("active");
    });
  }

  const proceedToCreateRewardsBtn = document.getElementById("proceedTocreateRewards");
  if (proceedToCreateRewardsBtn) {
    proceedToCreateRewardsBtn.addEventListener("click", function () {
      stepClaimName.classList.remove("active");
      stepCreateRewards.classList.add("active");
      moveIndicator(3);
      leftContainer.style.backgroundImage = "url('../assets/fourthStep.png')";
    });
  }

  const proceedToClaimUrlBtn = document.getElementById("proceedToclaimUrl");
  if (proceedToClaimUrlBtn) {
    proceedToClaimUrlBtn.addEventListener("click", function () {
      stepCreateRewards.classList.remove("active");
      stepClaimUrl.classList.add("active");
      moveIndicator(4);
      leftContainer.style.backgroundImage = "url('../assets/fifthstep.png')";
      // leftContainer.style.backgroundImage = "url('../assets/sixthstep.png')";
    });
  }

  const proceedToUsernameBtn = document.getElementById("proceedToUsername");
  if (proceedToUsernameBtn) {
    proceedToUsernameBtn.addEventListener("click", function () {
      stepRewards.classList.remove("active");
      stepUsername.classList.add("active");

    });
  }

  const socialsh1 = document.getElementById("socials-h1");
  const forSocials = document.getElementById("forSocial");

  const proceedToCompletionBtn = document.getElementById("proceedToCompletion");
  if (proceedToCompletionBtn) {
    proceedToCompletionBtn.addEventListener("click", function () {
      stepUsername.classList.remove("active");
      moveIndicator(5);
      leftContainer.style.backgroundImage = "url('../assets/sixthstep.png')";
      socialsh1.style.display = "block";
      socialsh1.style.marginTop = "0px";
      forSocials.style.position = "absolute";
      forSocials.style.top = "-10px";
      changeText.innerHTML = "you’re all set! Invite friends to earn cash rewards and discover new places recommended by them today.";
      stepCompletion.classList.add("active");
    });
  }

  const proceedToCompletionBusinessBtn = document.getElementById("proceedToCompletionBusiness");
  if (proceedToCompletionBusinessBtn) {
    proceedToCompletionBusinessBtn.addEventListener("click", function () {
      stepClaimUrl.classList.remove("active");
      stepCompletionBusiness.classList.add("active");
      moveIndicator(5);
      leftContainer.style.backgroundImage = "url('../assets/sixthstep.png')";
    });
  }

  const completeSignupBtn = document.getElementById("completeSignup");
  if (completeSignupBtn) {
    completeSignupBtn.addEventListener("click", function () {
      console.log("Account created!");
    });
  }

  const locationInput = document.getElementById("locationInput");
  const suggestionsList = document.getElementById("suggestions");

  function fetchLocationSuggestions(query) {
    if (!query || query.length < 3) {
      suggestionsList.style.display = "none";
      return;
    }

    const locations = [
      "New York, NY, United States",
      "New Jersey, NJ, United States",
      "Newark, NJ, United States",
      "New Orleans, LA, United States",
      "Newcastle, UK",
      "New Delhi, India",
      "Newport Beach, CA, United States",
      "Newton, MA, United States",
    ];

    const results = locations.filter((location) =>
      location.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      suggestionsList.innerHTML = results
        .slice(0, 5)
        .map((location) => `<li>${location}</li>`)
        .join("");
      suggestionsList.style.display = "block";
    } else {
      suggestionsList.innerHTML = `<li>No results found</li>`;
      suggestionsList.style.display = "block";
    }
  }

  locationInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    fetchLocationSuggestions(query);
  });

  suggestionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      locationInput.value = e.target.textContent;
      suggestionsList.style.display = "none";
      document.getElementById("proceedToRewards").disabled = false;
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".location-box")) {
      suggestionsList.style.display = "none";
    }
  });

  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;
  const progressBar = document.querySelector(".progress-bar-container");
  const progressBarLine = document.querySelector(".progress-bar-line");
  const indicator = document.getElementById("indicator");

  // Function to move the indicator based on the step
  function moveIndicator(step) {
    if (step === 0 || step === steps.length - 1) {
      // Hide the indicator on step-accountype (step 0) and complete it on step-completion (last step)
      progressBar.style.display = "none";
      if (step === steps.length - 1) {
        progressBarLine.style.background = `linear-gradient(to right, #1e88e5 100%, #e0e0e0 100%)`;
      } else {
        progressBarLine.style.background = `linear-gradient(to right, #e0e0e0 0%, #e0e0e0 100%)`;
      }
    } else {
      // Show and move the indicator for intermediate steps
      progressBar.style.display = "block";
      const percentage = (step / (steps.length - 1)) * 200;


      // Update the position of the indicator
      indicator.style.left = `calc(${percentage}% - 5px)`; // Adjust for centering the indicator

      // Update the progress bar background
      progressBarLine.style.background = `linear-gradient(to right, 
      #1e88e5 ${percentage}%, 
      #e0e0e0 ${percentage}%)`;
    }
  }

  // Function to show a specific step
  const showStep = (stepIndex) => {
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === stepIndex);
    });
    currentStep = stepIndex;

    // Move the indicator to the current step
    moveIndicator(currentStep);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      showStep(currentStep - 1);
    }
  };

  const nextSteptoRewards = () => {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 3);
      moveIndicator(3);
      //change the background image 
      leftContainer.style.backgroundImage = "url('../assets/FourthStep.png')";
      themeoverlay.style.background = "rgba(31, 65, 187,  0.8)";
      changeText.innerHTML = "Every recommendation helps friends and locals discover trusted spots while you earn rewards.";
      changeText.style.fontSize = "16px";
    }
  };

  const nextSteptoUsername = () => {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
      moveIndicator(4);
      leftContainer.style.backgroundImage = "url('../assets/fifthstep.png')";
    }
  };

  if (document.getElementById("proceedToRewards")) {
    document
      .getElementById("proceedToRewards")
      .addEventListener("click", nextSteptoRewards);
  }

  if (document.getElementById("proceedToUsername")) {
    document
      .getElementById("proceedToUsername")
      .addEventListener("click", nextSteptoUsername);
  }

  if (document.getElementById("backToLocation")) {
    document
      .getElementById("backToLocation")
      .addEventListener("click", prevStep);
  }

  if (document.getElementById("backToAccountType")) {
    document
      .getElementById("backToAccountType")
      .addEventListener("click", prevStep);
  }

  if (document.getElementById("backToRewards")) {
    document
      .getElementById("backToRewards")
      .addEventListener("click", prevStep);
  }

  document.getElementById("signInLink").addEventListener("click", () => {
    window.location.href = "/sign-in";
  });

  if (document.querySelector(".back-btn")) {
    document.querySelector(".back-btn").addEventListener("click", prevStep);
  }

  showStep(0);

  const recommendationInput = document.getElementById("recommendationInput");
  const businessResults = document.getElementById("businessResults");
  const proceedToNextBtn = document.getElementById("proceedToUsername"); // Next button
  let businesses = []; // Store fetched business results here

  // Function to fetch businesses based on search query
  function fetchBusinessSuggestions(query) {
    if (!query || query.length < 3) {
      businessResults.style.display = "none";
      return;
    }

    // Mock business data for demo purposes
    const allBusinesses = [
      {
        name: "Jacobs Group",
        location: "Gurugram",
        image: "/assets/business-dummy.jpeg",
        offer: "Get 20% off!",
        rating: 4.6,
      },
      {
        name: "Tasty Treats",
        location: "Delhi",
        image: "/assets/business-dummy.jpeg",
        offer: "Buy 1 get 1 free!",
        rating: 4.3,
      },
      {
        name: "Pasta Palace",
        location: "Mumbai",
        image: "/assets/business-dummy.jpeg",
        offer: "Free delivery on orders over ₹500!",
        rating: 4.7,
      },
    ];

    // Filter businesses based on query
    businesses = allBusinesses.filter((business) =>
      business.name.toLowerCase().includes(query.toLowerCase())
    );

    // Display business results
    if (businesses.length > 0) {
      businessResults.innerHTML = businesses
        .map(
          (business) => `
          <div class="business-item" data-id="${business.name}">
            <img src="${business.image}" alt="${business.name}" />
            <div class="business-info">
              <h3>${business.name}</h3>
              <p>${business.location}</p>
              <p class="rating">⭐ ${business.rating}</p>
              <button class="follow-btn">Follow</button>
              <p class="offer" style="display: none;">${business.offer}</p>
            </div>
          </div>`
        )
        .join("");
      businessResults.style.display = "block";
    } else {
      businessResults.innerHTML = "<p>No results found</p>";
      businessResults.style.display = "block";
    }
  }

  // Event listener for input changes
  recommendationInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    fetchBusinessSuggestions(query);
  });

  // Handle follow button and business click
  businessResults.addEventListener("click", (e) => {
    const followBtn = e.target.closest(".follow-btn");
    const businessItem = e.target.closest(".business-item");

    if (followBtn) {
      // Follow button logic
      const selectedBusinessName = businessItem.getAttribute("data-id");
      const selectedBusiness = businesses.find(
        (business) => business.name === selectedBusinessName
      );

      // Change button text to "Followed" and show the offer
      followBtn.textContent = "Followed";
      setTimeout(() => {
        const offerParagraph = businessItem.querySelector(".offer");
        offerParagraph.style.display = "block"; // Show the offer text
      }, 2000); // Delay for 2 seconds
    }

    if (businessItem) {
      // Click on business logic
      const selectedBusinessName = businessItem.getAttribute("data-id");
      recommendationInput.value = selectedBusinessName; // Set input value to business name

      // Enable the "Next" button
      proceedToNextBtn.disabled = false;

      // Hide business results
      businessResults.style.display = "none";
    }
  });

  // Hide results if clicked outside
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#businessResults") &&
      !e.target.closest("#recommendationInput")
    ) {
      businessResults.style.display = "none";
    }
  });

  // Function to change right container width to 100%
  //   function goToNextStep() {
  //     document.getElementById("right-container").classList.add("full-width");
  //     document.getElementById("left-container").style.display = "none";
  //     document.getElementById("step-location").classList.remove("active");
  //     document.getElementById("step-rewards").classList.add("active");
  //   }

  //   // Function to go back to the previous step (Step 1)
  //   function goBackToSignup() {
  //     document.getElementById("right-container").classList.remove("full-width");
  //     document.getElementById("left-container").style.display = "block";
  //     document.getElementById("step-rewards").classList.remove("active");
  //     document.getElementById("step-location").classList.add("active");
  //   }

  //   // Example: Adding event listeners for buttons
  //   document
  //     .getElementById("proceedToRewards")
  //     .addEventListener("click", goToNextStep);
  //   document
  //     .getElementById("backToLocation")
  //     .addEventListener("click", goBackToSignup);
});
