const hamburgerMenu = document.getElementById('hamburger-menu');
const sideNav = document.getElementById('side-nav');

// Function to toggle navigation visibility
const toggleNav = (show) => {
    sideNav.classList.toggle('-translate-x-full', !show);
    sideNav.classList.toggle('translate-x-0', show);
};

// Open navigation on hamburger menu click
hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    toggleNav(true);
});

// Close navigation on outside click
document.addEventListener('click', (event) => {
    if (!sideNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        toggleNav(false);
    }
});

const firstInput = document.getElementById("first-input");
const secondContainer = document.getElementById("second-container");
const searchButton = document.getElementById("search-button");
const firstSvg = document.getElementById("first-svg");

firstInput.addEventListener("focus", () => {
    secondContainer.classList.remove("hidden", "scale-0", "opacity-0");
    secondContainer.classList.add("scale-100", "opacity-100");
    searchButton.classList.remove("hidden", "scale-0", "opacity-0");
    searchButton.classList.add("scale-100", "opacity-100");
    firstSvg.style.opacity = "0";
});

// Click outside to close
document.addEventListener("mousedown", (event) => {
    if (
        !firstInput.contains(event.target) && 
        !secondContainer.contains(event.target) &&
        !searchButton.contains(event.target)
    ) {
        secondContainer.classList.add("hidden", "scale-0", "opacity-0");
        secondContainer.classList.remove("scale-100", "opacity-100");
        searchButton.classList.add("hidden", "scale-0", "opacity-0");
        searchButton.classList.remove("scale-100", "opacity-100");
        firstSvg.style.opacity = "1";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const placeholders = ['Services', 'Hotels', 'Places', 'Restaurants'];
    const placeholderText = document.querySelector(".placeholder-text");
    const inputField = document.querySelector("#inputField");

    let updateCount = 0;

    function updatePlaceholder() {
        placeholderText.textContent = placeholders[updateCount];
        updateCount = (updateCount + 1) % placeholders.length;
    }

    setInterval(updatePlaceholder, 1600);

    inputField.addEventListener("input", () => {
        const animLabel = document.querySelector(".anim-label");
        if (inputField.value.trim()) {
            animLabel.classList.add("hidden");
        } else {
            animLabel.classList.remove("hidden");
        }
    });

    updatePlaceholder();
});








document.addEventListener('DOMContentLoaded', () => {
    
    const placeholders = ['Services', 'Hotels', 'Places', 'Restaurants'];
    let index = 0;

    const placeholderElement = document.querySelector('.placeholder');

    setInterval(() => {
        index = (index + 1) % placeholders.length;
        placeholderElement.textContent = placeholders[index];
    }, 2000);
});




  // Elements
  const activeNotification = document.getElementById('activeNotification');
  const inactiveNotification = document.getElementById('inactiveNotification');
  const dropdown = document.getElementById('notificationDropdown');

  let isDropdownVisible = false; // State to track dropdown visibility

  // Toggle dropdown and icons
  function toggleDropdown() {
      isDropdownVisible = !isDropdownVisible;

      // Toggle dropdown visibility
      dropdown.classList.toggle('hidden', !isDropdownVisible);

      // Toggle icons
      activeNotification.classList.toggle('hidden', isDropdownVisible);
      inactiveNotification.classList.toggle('hidden', !isDropdownVisible);
  }

  // Add event listeners for active and inactive notification icons
  activeNotification.addEventListener('click', toggleDropdown);
  inactiveNotification.addEventListener('click', toggleDropdown);

  // Close dropdown when clicking outside
  window.addEventListener('click', (e) => {
      if (
          !activeNotification.contains(e.target) &&
          !inactiveNotification.contains(e.target) &&
          !dropdown.contains(e.target)
      ) {
          dropdown.classList.add('hidden');
          isDropdownVisible = false;

          // Reset to active notification icon
          activeNotification.classList.remove('hidden');
          inactiveNotification.classList.add('hidden');
      }
  });




  


//desktopNotifications

const desktopNotifications = [
    {
        type: "note",
        icon: `<svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 7V8M11 10.5V15M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#6CBC6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
        title: "Note",
        description: "Expedita consequuntur distinctio soluta sunt dolor.",
    },
    {
        type: "user",
        avatar: "./assets/person3.png",
        username: "@Sherin",
        description: "Expedita consequuntur distinctio soluta sunt dolor.",
    },
    {
        type: "user",
        avatar: "./assets/person3.png",
        username: "@John",
        description: "Distinctio soluta sunt dolor sit amet.",
    },
];

// Target container for notifications
const desktopNotificationContainer = document.getElementById("desktopNotificationContainer");
const notificationCount = document.getElementById("notificationCount");

// Render desktop notifications dynamically
desktopNotifications.forEach(notification => {
    const notificationElement = document.createElement("div");

    if (notification.type === "note") {
        notificationElement.className = "px-4 py-3 border-l-[4px] border-[#4E8CFF] rounded-[4px] bg-[#1F41BB1A] flex items-start";
        notificationElement.innerHTML = `
            <div class="text-green-600 mr-2 mt-1">${notification.icon}</div>
            <div>
                <h3 class="font-semibold text-gray-800">${notification.title}</h3>
                <p class="text-sm text-gray-600">${notification.description}</p>
            </div>
        `;
    } else if (notification.type === "user") {
        notificationElement.className = "p-4 flex gap-2";
        notificationElement.innerHTML = `
            <img src="${notification.avatar}" class="w-[24px] h-[24px]" alt="User Avatar">
            <div>
                <h1 class="font-semibold text-[15px]">${notification.username}</h1>
                <p class="text-gray-600 text-xs">${notification.description}</p>
            </div>
        `;
    }

    desktopNotificationContainer.appendChild(notificationElement);
});

// Update notification count
notificationCount.textContent = desktopNotifications.length;







//toggeleNotification for mobile    
function toggleNotification() {
    const activeIcon = document.getElementById('activeNotification2');
    const inactiveIcon = document.getElementById('inactiveNotification2');
    const notificationDropdown = document.getElementById('notificationDropdown2');

    // Toggle icons visibility
    activeIcon.classList.toggle('hidden');
    inactiveIcon.classList.toggle('hidden');

    // Toggle dropdown visibility
    if (notificationDropdown.classList.contains('hidden')) {
        notificationDropdown.classList.remove('hidden');
        // Prevent scrolling of the background page
        document.body.classList.add('no-scroll');
    } else {
        notificationDropdown.classList.add('hidden');
        // Allow scrolling of the background page
        document.body.classList.remove('no-scroll');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const notificationDropdown = document.getElementById('notificationDropdown2');
    const activeIcon = document.getElementById('activeNotification2');
    const inactiveIcon = document.getElementById('inactiveNotification2');

    if (
        !notificationDropdown.contains(event.target) &&
        !activeIcon.contains(event.target) &&
        !inactiveIcon.contains(event.target)
    ) {
        notificationDropdown.classList.add('hidden');
        document.body.classList.remove('no-scroll'); // Allow scrolling
    }
});





//mobile notification 


// Example notification data
const notifications = [
    {
        type: "note",
        icon: `<svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7V8M11 10.5V15M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                                  stroke="#6CBC6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,
        title: "Note",
        description: "Expedita consequuntur distinctio soluta sunt dolorum sed quisquam molestiae eos.",
    },
    {
        type: "user",
        avatar: "./assets/person3.png",
        username: "@Sherin",
        description: "Expedita consequuntur distinctio soluta sunt dolorum sed quisquam molestiae eos.",
    },
    {
        type: "user",
        avatar: "./assets/person3.png",
        username: "@John",
        description: "Sit omnis quos fugit consequatur possimus.",
    },
    // Add more notifications as needed
];

// Target container for notifications
const notificationContainer = document.getElementById("notificationContainer");

// Render notifications dynamically
notifications.forEach(notification => {
    const notificationElement = document.createElement("div");

    if (notification.type === "note") {
        notificationElement.className = "px-4  py-3 border-l-[4px] border-[#4E8CFF] rounded-[4px] bg-[#1F41BB1A] flex items-start";
        notificationElement.innerHTML = `
                    <div class="text-green-600 mr-2  mt-1">${notification.icon}</div>
                    <div >
                        <h3 class="font-semibold text-[14px] text-gray-800">${notification.title}</h3>
                        <p class="text-xs text-gray-600 w-[100%]">${notification.description}</p>
                    </div>
                `;
    } else if (notification.type === "user") {
        notificationElement.className = "p-4 flex gap-4 hover:bg-gray-100";
        notificationElement.innerHTML = `
                    <img src="${notification.avatar}" class=" w-[24px] h-[24px]" alt="User Avatar">
                    <div>
                        <h1 class="font-semibold text-[14px]">${notification.username}</h1>
                        <p class="text-gray-600 text-xs w-[95%]">${notification.description}</p>
                    </div>
                `;
    }

    notificationContainer.appendChild(notificationElement);
});


