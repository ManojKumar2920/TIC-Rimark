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
const rimarksContainer = document.getElementById("Rimarks");

// Render Rimarks dynamically
// Render Rimarks dynamically
rimarksData.map(item => {
    const card = document.createElement("div");
    card.className = " rounded-[12px] md:w-full w-[100%] px-2 md:px-6 py-8 bg-white shadow-md";
    card.style = "box-shadow: 0px 4px 24px 0px #00000014";

    // Generate stars dynamically based on the stars property
    const stars = Array.from({ length: 5 }, (_, index) =>
        `<svg width="16" height="16" fill="${index < item.stars ? '#1F41BB' : '#E0E0E0'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
        </svg>`
    ).join("");

    card.innerHTML = `
        <div class="flex justify-center md:w-full w-[100%] md:items-start space-x-4 ">
            <img src=${item.avatar} alt="Profile Image" class="hidden md:block w-12 h-12 rounded-full">
            <div class="md:w-full w-[100%]">
                <img src="./assets/profileico.png" alt="Profile Image" class="md:hidden block w-12 h-12 rounded-full">
                <h3 class="font-bold text-[24px] text-gray-900">${item.title}</h3>
                <div class="flex items-center space-x-1">${stars}</div>
                <div class=" flex gap-4  px-4 -ml-4   !justify-start !items-start">
                <img src="https://demo.rimark.us/media/review/images/11803e73-1227-409d-96be-f032fbb7f145.jpg"  class=" mt-4 mb-4 object-cover object-top  w-1/2 rounded-xl md:rounded-3xl" alt=""/>
                <img src="https://demo.rimark.us/media/review/images/11803e73-1227-409d-96be-f032fbb7f145.jpg"  class=" mt-4 mb-4 object-cover object-top  w-1/2 rounded-xl  md:rounded-3xl" alt=""/>
                </div>
                <p class="mt-4 md:w-full w-[95%] text-black/60 text-[13px] md:text-[15px]">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happines."</p>
                <div class="flex items-center md:gap-0 gap-10 md:justify-between mt-4">
                    <div class="flex items-center space-x-2">
                        <img src="./assets/Image-60.png" alt="Profile Image 2" class="w-8 h-8 rounded-full">
                        <span class="text-black text-[12px]">${item.reviewer} <span class="text-black/60">• ${item.time}</span></span>
                    </div>
                    <div>

                                <svg width="40" height="40" class="  md:hidden block" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#1F41BB" />
                                    <path
                                        d="M12.3799 15.247L12.3355 15.2915L12.2866 15.247C10.1748 13.3309 8.77882 12.0638 8.77882 10.7789C8.77882 9.88978 9.44569 9.22291 10.3349 9.22291C11.0195 9.22291 11.6864 9.66749 11.922 10.2721H12.7489C12.9846 9.66749 13.6514 9.22291 14.3361 9.22291C15.2253 9.22291 15.8921 9.88978 15.8921 10.7789C15.8921 12.0638 14.4962 13.3309 12.3799 15.247ZM14.3361 8.33374C13.5625 8.33374 12.8201 8.69385 12.3355 9.25847C11.8509 8.69385 11.1084 8.33374 10.3349 8.33374C8.96554 8.33374 7.88965 9.40519 7.88965 10.7789C7.88965 12.455 9.40123 13.8288 11.6908 15.905L12.3355 16.4918L12.9801 15.905C15.2697 13.8288 16.7813 12.455 16.7813 10.7789C16.7813 9.40519 15.7054 8.33374 14.3361 8.33374Z"
                                        fill="white" />
                                </svg>
                                <svg width="28" height="28" class=" md:block hidden" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#1F41BB" />
                                    <path
                                        d="M12.3799 15.247L12.3355 15.2915L12.2866 15.247C10.1748 13.3309 8.77882 12.0638 8.77882 10.7789C8.77882 9.88978 9.44569 9.22291 10.3349 9.22291C11.0195 9.22291 11.6864 9.66749 11.922 10.2721H12.7489C12.9846 9.66749 13.6514 9.22291 14.3361 9.22291C15.2253 9.22291 15.8921 9.88978 15.8921 10.7789C15.8921 12.0638 14.4962 13.3309 12.3799 15.247ZM14.3361 8.33374C13.5625 8.33374 12.8201 8.69385 12.3355 9.25847C11.8509 8.69385 11.1084 8.33374 10.3349 8.33374C8.96554 8.33374 7.88965 9.40519 7.88965 10.7789C7.88965 12.455 9.40123 13.8288 11.6908 15.905L12.3355 16.4918L12.9801 15.905C15.2697 13.8288 16.7813 12.455 16.7813 10.7789C16.7813 9.40519 15.7054 8.33374 14.3361 8.33374Z"
                                        fill="white" />
                                </svg>
                            </div>
                </div>
            </div>
        </div>
    `;

    rimarksContainer.appendChild(card);
});


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



// JavaScript for Tab Switching
const tabHeaders = document.querySelectorAll('.tab-header');
const tabContents = document.querySelectorAll('.tab-content');

tabHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        // Remove active styles from all tabs
        tabHeaders.forEach((tab) => tab.classList.remove('text-[#1F41BB]'));
        tabHeaders.forEach((tab) => tab.classList.add('text-[#909090]'));

        // Hide all tab contents
        tabContents.forEach((content) => content.classList.add('hidden'));

        // Show the selected tab content
        const targetTab = header.dataset.tab;
        document.getElementById(targetTab).classList.remove('hidden');

        // Add active styles to the clicked tab
        header.classList.remove('text-[#909090]');
        header.classList.add('text-[#1F41BB]');
    });
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






// Example user data
const userData = {
    name: "Danial <br /> Jason La",
    profileImage: "./assets/ProfilePage.png",
    statistics: {
        rimarks: 27,
        followers: 217,
        following: 217,
        rewards: 27,
    },
    memberSince: 2024,
    location: "Los Angeles, CA",
    description: "Et omnis quos    Aspernatur deserunt nihil beatae dolores. AccusamusEt omnis quos fugit  Aspernatur deserunt nihil beatae dolores. AccusamusEt omnis quos fugit  Aspernatur deserunt nihil beatae dolores. Accusamus aut et harum distinctio dolore. Consequatur omnis aliquam modi.",
    mobileDescription: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam.",
    buttons: [
        {
            label: "Follow",
            style: "bg-black md:h-fit  text-white",
            icon: ` <svg
                            width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M19.2398 0.32295C19.3825 0.440834 19.5006 0.585676 19.5873 0.749205C19.674 0.912733 19.7277 1.09174 19.7452 1.27602C19.7628 1.46029 19.7438 1.64621 19.6895 1.82316C19.6352 2.00011 19.5465 2.16463 19.4286 2.30732L8.09743 16.0203L8.0932 16.0231C7.83563 16.3329 7.51221 16.5813 7.1465 16.7502C6.78079 16.9192 6.382 17.0045 5.97917 16.9998C5.57032 16.9948 5.1679 16.8974 4.80203 16.7149C4.43617 16.5323 4.11636 16.2693 3.86655 15.9456L3.86515 15.9428L0.316396 11.3821C0.197902 11.2366 0.109673 11.0688 0.0568873 10.8887C0.00410164 10.7086 -0.0121776 10.5198 0.00900479 10.3333C0.0301872 10.1468 0.0884047 9.96643 0.180241 9.80275C0.272077 9.63906 0.395681 9.49537 0.543801 9.38011C0.691921 9.26484 0.861572 9.18032 1.0428 9.1315C1.22402 9.08269 1.41318 9.07056 1.59915 9.09584C1.78513 9.12111 1.96418 9.18328 2.12581 9.27869C2.28743 9.37411 2.42837 9.50084 2.54035 9.65145L6.013 14.1149L17.254 0.511803C17.3719 0.369091 17.5167 0.250998 17.6803 0.16427C17.8438 0.0775419 18.0228 0.0238768 18.2071 0.0063396C18.3913 -0.0111976 18.5773 0.00773684 18.7542 0.0620614C18.9312 0.116386 19.0957 0.205037 19.2384 0.32295H19.2398Z"
                                fill="white" />
                        </svg>`,
        },
        {
            label: "Edit Profile",
            style: "bg-white  md:h-fit border-[#1F41BB] border text-[#1F41BB]",
            icon: `  <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5887 1.40289C12.0545 0.849613 12.6801 0.527425 13.3386 0.501672C13.9971 0.475919 14.6392 0.748529 15.1347 1.26422L15.2593 1.40289L15.8709 2.12916C16.3366 2.68226 16.6078 3.42492 16.6295 4.20661C16.6511 4.98831 16.4217 5.75055 15.9877 6.33884L15.8709 6.48677L6.1714 18.0054C6.03426 18.1682 5.86813 18.2924 5.68522 18.369L5.54507 18.4173L1.69192 19.4733C1.55691 19.5106 1.41633 19.5088 1.28203 19.4681C1.14772 19.4274 1.02362 19.349 0.920168 19.2394C0.816718 19.1299 0.736951 18.9924 0.687585 18.8386C0.638219 18.6848 0.620698 18.5192 0.636499 18.3556L0.653801 18.2396L1.54226 13.6632C1.58615 13.4387 1.67188 13.2288 1.79314 13.0489L1.88916 12.9205L11.5887 1.40289ZM10.977 5.03423L3.19979 14.2692L2.64958 17.1024L5.03553 16.448L12.8128 7.21304L10.977 5.03423ZM14.036 2.85543C13.8871 2.67856 13.6889 2.57231 13.4786 2.55661C13.2684 2.54092 13.0605 2.61685 12.8941 2.77017L12.8128 2.85543L12.2003 3.5817L14.036 5.7605L14.6476 5.03423C14.7966 4.85735 14.8861 4.622 14.8993 4.37235C14.9125 4.12271 14.8486 3.87591 14.7194 3.67826L14.6476 3.5817L14.036 2.85543Z"
                                    fill="#1F41BB" />
                            </svg>`,
            link: "./Edit.html",
        },
        {
            label:"",
            style:" md:block hidden -mt-2 -ml-10",
            icon: `<svg width="46" height="46" class=" md:block hidden" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="23" cy="23" r="22.5" stroke="black" stroke-opacity="0.6"></circle>
                        <g clip-path="url(#clip0_588_9644)">
                            <path d="M30.5108 13.9799L12.3925 20.0208C12.3184 20.0455 12.2534 20.0921 12.2064 20.1546C12.1594 20.217 12.1325 20.2923 12.1292 20.3704C12.126 20.4485 12.1466 20.5258 12.1884 20.5919C12.2301 20.658 12.2909 20.7099 12.3628 20.7406L19.0211 23.5943C19.056 23.6094 19.0942 23.6152 19.132 23.6111C19.1698 23.6071 19.2059 23.5933 19.2368 23.5711L25.7642 18.907C25.9667 18.764 26.2154 19.0127 26.0723 19.2152L21.4082 25.7425C21.3864 25.7734 21.373 25.8094 21.3691 25.8469C21.3652 25.8845 21.3711 25.9225 21.3862 25.9571L24.2388 32.6154C24.2694 32.6873 24.3212 32.7483 24.3872 32.7901C24.4532 32.8319 24.5304 32.8526 24.6086 32.8495C24.6867 32.8464 24.762 32.8196 24.8245 32.7727C24.887 32.7258 24.9338 32.6609 24.9586 32.5868L30.9994 14.4675C31.0222 14.3995 31.0255 14.3266 31.0091 14.2569C30.9927 14.1872 30.9572 14.1235 30.9065 14.0728C30.8559 14.0222 30.7921 13.9866 30.7224 13.9702C30.6527 13.9538 30.5787 13.9572 30.5108 13.9799Z" fill="black" fill-opacity="0.6"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_588_9644">
                                <rect width="24" height="19" fill="white" transform="translate(11 14)"></rect>
                            </clipPath>
                        </defs>
                    </svg>`
        }
    ],
};

// Render Dashboard
const dashboardContainer = document.getElementById("dashboardContainer");
dashboardContainer.innerHTML = `
    <div class="md:rounded-[15px]    rounded-[32px] mt-10 overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur bg-opacity-20 flex items-center w-[60%] md:w-1/5 justify-center ">
        <img src="../assets/demopic.jpg" class=" object-cover  w-80 object-top h-48" alt="Profile Image">
    </div>
    <div class="border hidden max-[1200px]:gap-6 gap-20 md:flex max-[1200px]:w-1/2 border-white/15 mx-auto bg-black bg-clip-padding backdrop-filter backdrop-blur bg-opacity-20 items-end justify-end rounded-[16px] shadow-xl px-8 py-2">
        <div class="flex flex-col mt-2 pb-2">
            <h2 class="text-white text-[16px] max-[1200px]:text-xs font-semibold mb-4 uppercase">Your Dashboard</h2>
            <div class="flex text-center   max-[1200px]:text-xs max-[1200px]:gap-4 gap-20 text-white ">
                <div class="max-[1200px]:space-y-1"><h1 class="font-bold max-[1200px]:text-4xl text-[52px]">${userData.statistics.rimarks}</h1><h2 class="-mt-2 max-[1200px]:text-base text-[15px]">My Rimarks</h2></div>
                <div class="max-[1200px]:space-y-1"><h1 class="font-bold max-[1200px]:text-4xl text-[52px]">${userData.statistics.followers}</h1><h2 class="-mt-2 max-[1200px]:text-base text-[15px]">My Followers</h2></div>
                <div class="max-[1200px]:space-y-1"><h1 class="font-bold max-[1200px]:text-4xl text-[52px]">${userData.statistics.following}</h1><h2 class="-mt-2 max-[1200px]:text-base text-[15px]">My Following</h2></div>
            </div>
        </div>
        <div class="text-[#1F41BB] h-full flex flex-col items-center justify-center px-4 py-6 bg-white rounded-[16px] w-fit">
            <h1 class="font-bold text-[52px]">${userData.statistics.rewards}</h1>
            <h2 class="text-[15px]">Total Rewards</h2>
            
        </div>
    </div>
`;

// Render Profile Details
document.getElementById("profileName").innerHTML = `<h3 class="font-bold text-black md:text-[#1F41BB] text-[28px] leading-[28px]">${userData.name}</h3>`;
document.getElementById("profileDetails").innerHTML = `
    <p class="flex gap-2 text-sm -ml-4">
        <img src="./assets/Time.png" class="w-4 h-4" alt=""> Member Since ${userData.memberSince}
    </p>
    <p class="flex gap-2 text-sm">
        <img src="./assets/Location.png" class="w-5 h-5" alt=""> ${userData.location}
    </p>
`;
document.getElementById("profileDescription").textContent = userData.description;
document.getElementById("mobileDescription").innerHTML = `
    <h3 class="text-[16px] text-[#222222E5]">About</h3>
    <p class="text-[#49454FCC] text-xs">${userData.mobileDescription}</p>
`;

// Render Action Buttons
const actionButtons = document.getElementById("actionButtons");
userData.buttons.forEach(button => {
    const btn = document.createElement(button.link ? "a" : "button");
    btn.className = `flex  font-[600] items-center gap-2 rounded-[8px] md:rounded-[16px] px-6 md:px-12 py-1 md:py-3 text-[15px] md:text-[20px] ${button.style}`;
    btn.innerHTML = `${button.icon} ${button.label}`;
    if (button.link) btn.href = button.link;
    actionButtons.appendChild(btn);
});


// Example stats data
const statsData = [
    { value: 217, label: "Followers" },
    { value: 117, label: "Following" },
    { value: 17, label: "Total Rewards" },
];

// Target container
const mobileStats = document.getElementById("mobileStats");

// Render stats dynamically
statsData.forEach(stat => {
    const statElement = document.createElement("div");
    statElement.className = "text-center tracking-tighter";
    statElement.innerHTML = `
        <h1 class="text-[52px] font-bold">${stat.value}</h1>
        <h2 class="tracking-wide whitespace-nowrap">${stat.label}</h2>
    `;
    mobileStats.appendChild(statElement);
});




// Example data for followers
const followersData = [
    {
        name: "Lowell",
        location: "Location Here",
        profileImage: "./assets/person2.png",
    },
    {
        name: "Sherin",
        location: "Los Angeles, CA",
        profileImage: "./assets/person3.png",
    },
    {
        name: "Danial",
        location: "San Francisco, CA",
        profileImage: "./assets/profileico.png",
    },
    {
        name: "Lowell",
        location: "Location Here",
        profileImage: "./assets/person2.png",
    },
];

// Target container
const followerContainer = document.getElementById("follower");

// Render followers dynamically
followersData.forEach(follower => {
    const followerItem = document.createElement("div");
    followerItem.className = "flex items-center justify-between bg-white p-4 rounded-lg";

    followerItem.innerHTML = `
        <div class="flex items-center space-x-4">
            <!-- Profile Image -->
            <img src="${follower.profileImage}" alt="${follower.name}" class="md:w-14 w-10 h-10 md:h-14 rounded-full object-cover" />
            <!-- User Info -->
            <div>
                <h2 class="md:text-[30px] text-[14px] font-normal text-gray-800">${follower.name}</h2>
                <p class="text-[#1F41BB] md:text-sm text-xs mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.5 6 9 6 9s6-4.5 6-9a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clip-rule="evenodd" />
                    </svg>
                    ${follower.location}
                </p>
            </div>
        </div>
        <!-- View Profile Button -->
        <button class="md:text-gray-800 text-white border text-[10px] md:bg-white bg-black md:text-base border-gray-400 px-4 py-2 rounded-[12px] md:rounded-[16px] flex items-center md:hover:bg-gray-100">
            <svg width="16" height="16" viewBox="0 0 19 19" class="  md:block hidden mr-2" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5.44727 4.5C5.44727 3.43913 5.86869 2.42172 6.61884 1.67157C7.36898 0.921427 8.3864 0.5 9.44727 0.5C10.5081 0.5 11.5255 0.921427 12.2757 1.67157C13.0258 2.42172 13.4473 3.43913 13.4473 4.5C13.4473 5.56087 13.0258 6.57828 12.2757 7.32843C11.5255 8.07857 10.5081 8.5 9.44727 8.5C8.3864 8.5 7.36898 8.07857 6.61884 7.32843C5.86869 6.57828 5.44727 5.56087 5.44727 4.5ZM5.44727 10.5C4.12118 10.5 2.84941 11.0268 1.91173 11.9645C0.97405 12.9021 0.447266 14.1739 0.447266 15.5C0.447266 16.2956 0.763336 17.0587 1.32595 17.6213C1.88855 18.1839 2.65162 18.5 3.44727 18.5H15.4473C16.2429 18.5 17.006 18.1839 17.5686 17.6213C18.1312 17.0587 18.4473 16.2956 18.4473 15.5C18.4473 14.1739 17.9205 12.9021 16.9828 11.9645C16.0451 11.0268 14.7733 10.5 13.4473 10.5H5.44727Z"
        fill="#3C3C3C" />
</svg>
           <svg width="16" height="16" class="md:hidden block mr-2" viewBox="0 0 19 20" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.16667 6.41667C8.16667 5.44421 8.57053 4.51157 9.28942 3.82394C10.0083 3.13631 10.9833 2.75 12 2.75C13.0167 2.75 13.9917 3.13631 14.7106 3.82394C15.4295 4.51157 15.8333 5.44421 15.8333 6.41667C15.8333 7.38913 15.4295 8.32176 14.7106 9.00939C13.9917 9.69703 13.0167 10.0833 12 10.0833C10.9833 10.0833 10.0083 9.69703 9.28942 9.00939C8.57053 8.32176 8.16667 7.38913 8.16667 6.41667ZM8.16667 11.9167C6.89584 11.9167 5.67706 12.3996 4.77845 13.2591C3.87983 14.1186 3.375 15.2844 3.375 16.5C3.375 17.2293 3.6779 17.9288 4.21707 18.4445C4.75624 18.9603 5.4875 19.25 6.25 19.25H17.75C18.5125 19.25 19.2438 18.9603 19.7829 18.4445C20.3221 17.9288 20.625 17.2293 20.625 16.5C20.625 15.2844 20.1202 14.1186 19.2216 13.2591C18.3229 12.3996 17.1042 11.9167 15.8333 11.9167H8.16667Z"
        fill="white" />
</svg>
            View Profile
        </button>
    `;

    followerContainer.appendChild(followerItem);
});





