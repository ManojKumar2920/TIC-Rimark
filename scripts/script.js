document.addEventListener("DOMContentLoaded", function () {
  // Select the onboarding elements
  const stepAccountType = document.getElementById("step-account-type");
  const stepSignup = document.getElementById("step-signup");
  const stepLocation = document.getElementById("step-location");
  const stepRewards = document.getElementById("step-rewards");
  const stepUsername = document.getElementById("step-username");
  const stepCompletion = document.getElementById("step-completion");

  // Select the account type options
  const accountOptions = document.querySelectorAll(".onboarding-option");

  // Step transition logic for account type selection
  if (accountOptions.length > 0) {
    accountOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const accountType = option.getAttribute("data-account-type");
        console.log("Selected Account Type: ", accountType);

        stepAccountType.classList.remove("active");
        stepSignup.classList.add("active");
      });
    });
  }

  // Ensure elements exist before adding event listeners
  const proceedToLocationBtn = document.getElementById("proceedToLocation");
  if (proceedToLocationBtn) {
    proceedToLocationBtn.addEventListener("click", function () {
      stepSignup.classList.remove("active");
      stepLocation.classList.add("active");
    });
  }

  const backToRewardsBtn = document.getElementById("backToRewards");
  if (backToRewardsBtn) {
    backToRewardsBtn.addEventListener("click", function () {
      stepLocation.classList.remove("active");
      stepRewards.classList.add("active");
    });
  }

  const proceedToRewardsBtn = document.getElementById("proceedToRewards");
  if (proceedToRewardsBtn) {
    proceedToRewardsBtn.addEventListener("click", function () {
      stepLocation.classList.remove("active");
      stepRewards.classList.add("active");
    });
  }

  const proceedToUsernameBtn = document.getElementById("proceedToUsername");
  if (proceedToUsernameBtn) {
    proceedToUsernameBtn.addEventListener("click", function () {
      stepRewards.classList.remove("active");
      stepUsername.classList.add("active");
    });
  }

  const proceedToCompletionBtn = document.getElementById("proceedToCompletion");
  if (proceedToCompletionBtn) {
    proceedToCompletionBtn.addEventListener("click", function () {
        stepUsername.classList.remove("active");
      stepCompletion.classList.add("active");
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
    const percentage = (step / (steps.length - 1)) * 100;

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

  if (document.getElementById("proceedToLocation")) {
    document
      .getElementById("proceedToLocation")
      .addEventListener("click", nextStep);
  }

  if (document.getElementById("proceedToRewards")) {
    document
      .getElementById("proceedToRewards")
      .addEventListener("click", nextStep);
  }

  if (document.getElementById("proceedToUsername")) {
    document
      .getElementById("proceedToUsername")
      .addEventListener("click", nextStep);
  }

  if (document.getElementById("backToLocation")) {
    document
      .getElementById("backToLocation")
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
