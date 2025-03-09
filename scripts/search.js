

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
