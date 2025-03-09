
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


//togel notification for the mobile
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













// Business Info Data
const businessDetails = {
    name: "Burger K  ",
    address: "Hush Life, Plot No H-154, B Block, Sector 63, Noida, Uttar Pradesh 201301, India",
    hours: "Open 8 am - 10 pm",
    mutualFriendsText: "See your mutual Friends Suggestion",
    mutualFriendsImage: "./assets/SearchPer.png",
    ratings: 5,
    reviews: 23,
};

// Function to generate stars dynamically
const generateStars = (rating) => {
    let starsHTML = "";
    for (let i = 0; i < rating; i++) {
        starsHTML += `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#EAC800" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.1251 9.97931L12.0004 3.44017L9.87566 9.97931H3L8.56252 14.0207L6.43783 20.5599L12.0004 16.5184L17.5629 20.5599L15.7305 14.9203L12.4904 16.1309L15.4384 14.0213L15.4382 14.0207L21.0007 9.97931H14.1251Z" fill="white" />
        </svg>`;
    }
    return starsHTML;
};

// Dynamically render the content
const truncateText = (text, length) => 
    text.length > length ? text.slice(0, length) + "..." : text;

const container = document.getElementById("businessInfo");
container.innerHTML = `
<div class="md:shadow-none gap-2 md:w-full  w-[20rem] shadow-xl bg-white md:bg-transparent rounded-[6px] md:block flex items-center flex-col md:p-0 px-2 py-4">
   <h1 class="text-[20px] md:text-[50px] font-semibold md:font-bold text-[#3E4462] md:text-white">
        ${truncateText(businessDetails.name, 20)}
    </h1>
    <h2 class="md:hidden block text-center text-[#7E7E7E] text-[16px]">${businessDetails.address}</h2>
    <h3 class="md:hidden block -mt-2 text-[14px]">Open <span class="text-[#7E7E7E]">${businessDetails.hours}</span></h3>
    <div class="bg-[#1F41BB] md:hidden block mt-2 text-white flex text-[11px] items-center gap-2 font-[600] rounded-full">
        <img src="${businessDetails.mutualFriendsImage}" class="w-8" alt="Mutual Friends">
        <h1 class="pr-2">${businessDetails.mutualFriendsText}</h1>
    </div>
    <div class="flex items-center mt-2 md:-mt-1 ml-2 mb-2 space-x-0.5">
        ${generateStars(businessDetails.ratings)}
        <p class="md:text-white text-[#0000008A] pl-2 font-[500] text-[15px]">${businessDetails.ratings}.0 (${businessDetails.reviews} reviews)</p>
    </div>
</div>
`;





// Example data for Rimarks
const rimarksData = [
    {
        title: "Product Review",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        avatar: "./assets/profileico.png",
        reviewer: "John Lucas",
        time: "5 minutes ago",
        stars: 5,
    },
    {
        title: "Another Review",
        description: "This is another review about the product's features and usability.",
        avatar: "./assets/person3.png",
        reviewer: "Jane Doe",
        time: "10 minutes ago",
        stars: 3,
    },
    {
        title: "Product Review",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        avatar: "./assets/profileico.png",
        reviewer: "John Lucas",
        time: "5 minutes ago",
        stars: 2,
    },
    {
        title: "Another Review",
        description: "This is another review about the product's features and usability.",
        avatar: "./assets/person3.png",
        reviewer: "Jane Doe",
        time: "10 minutes ago",
        stars: 4,
    },
];

// Target container
const rimarksContainer = document.getElementById("Rimark");

// Render Rimarks dynamically
rimarksData.map((item) => {
    const card = document.createElement("div");
    card.className = "rounded-[12px] md:w-full w-[100%] px-2 md:px-6 py-8 bg-white shadow-md ";
    card.style = "box-shadow: 0px 4px 24px 0px #00000014; border: 1px solid #00000014";

    // Generate stars dynamically based on the stars property
    const stars = Array.from({ length: 5 }, (_, index) =>
        `<svg width="16" height="16" fill="${index < item.stars ? '#1F41BB' : '#E0E0E0'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
        </svg>`
    ).join("");

    card.innerHTML = `
        <div class="flex justify-center md:w-full w-[100%] md:items-start space-x-4" >
            <img src=${item.avatar} alt="Profile Image" class="hidden md:block w-12 h-12 rounded-full">
            <div class="md:w-full w-[100%]">
                <img src="./assets/profileico.png" alt="Profile Image" class="md:hidden block w-12 h-12 rounded-full">
                <h3 class="font-bold text-[24px] text-gray-900">${item.title}</h3>
                <div class="flex items-center space-x-1">${stars}</div>
                <p class="mt-4 md:w-full w-[95%] text-black/60 text-[13px] md:text-[15px]">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happines."</p>
                <div class="flex items-center md:gap-0 gap-10 md:justify-between mt-4">
                    <div class="flex items-center space-x-2">
                        <img src="./assets/Image-60.png" alt="Profile Image 2" class="w-8 h-8 rounded-full">
                        <span class="text-black text-[12px]">${item.reviewer} <span class="text-black/60">• ${item.time}</span></span>
                    </div>
                    <div>
                        <svg width="40" height="40" class="md:hidden block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#1F41BB" />
                            <path d="M12.3799 15.247L12.3355 15.2915L12.2866 15.247C10.1748 13.3309 8.77882 12.0638 8.77882 10.7789C8.77882 9.88978 9.44569 9.22291 10.3349 9.22291C11.0195 9.22291 11.6864 9.66749 11.922 10.2721H12.7489C12.9846 9.66749 13.6514 9.22291 14.3361 9.22291C15.2253 9.22291 15.8921 9.88978 15.8921 10.7789C15.8921 12.0638 14.4962 13.3309 12.3799 15.247ZM14.3361 8.33374C13.5625 8.33374 12.8201 8.69385 12.3355 9.25847C11.8509 8.69385 11.1084 8.33374 10.3349 8.33374C8.96554 8.33374 7.88965 9.40519 7.88965 10.7789C7.88965 12.455 9.40123 13.8288 11.6908 15.905L12.3355 16.4918L12.9801 15.905C15.2697 13.8288 16.7813 12.455 16.7813 10.7789C16.7813 9.40519 15.7054 8.33374 14.3361 8.33374Z" fill="white" />
                        </svg>
                        <svg width="28" height="28" class="md:block hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#1F41BB" />
                            <path d="M12.3799 15.247L12.3355 15.2915L12.2866 15.247C10.1748 13.3309 8.77882 12.0638 8.77882 10.7789C8.77882 9.88978 9.44569 9.22291 10.3349 9.22291C11.0195 9.22291 11.6864 9.66749 11.922 10.2721H12.7489C12.9846 9.66749 13.6514 9.22291 14.3361 9.22291C15.2253 9.22291 15.8921 9.88978 15.8921 10.7789C15.8921 12.0638 14.4962 13.3309 12.3799 15.247ZM14.3361 8.33374C13.5625 8.33374 12.8201 8.69385 12.3355 9.25847C11.8509 8.69385 11.1084 8.33374 10.3349 8.33374C8.96554 8.33374 7.88965 9.40519 7.88965 10.7789C7.88965 12.455 9.40123 13.8288 11.6908 15.905L12.3355 16.4918L12.9801 15.905C15.2697 13.8288 16.7813 12.455 16.7813 10.7789C16.7813 9.40519 15.7054 8.33374 14.3361 8.33374Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `;

    rimarksContainer.appendChild(card);
});

// Dynamically add the 'View More' button after cards
const viewMoreButton = document.createElement("div");
viewMoreButton.id = "ViewMoreButton";
viewMoreButton.className = "mt-4 text-[14px] bg-gray-200 px-3 py-1 rounded-full text-center cursor-pointer";
viewMoreButton.innerText = "View More";

rimarksContainer.appendChild(viewMoreButton);