// Rewards Data
const rewardsData = [
    {
        name: "Brown Inc",
        location: "Gurugram",
        imageUrl: "./assets/Rewards1.png",
        rating: 5,
        reviews: 23,
        discount: "20% OFF ON NEXT ORDER",
        buttonText: "Followed",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 4,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 5,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 1,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 3,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 5,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    {
        name: "Burger King",
        location: "Delhi",
        imageUrl: "./assets/Rewards1.png",
        rating: 1,
        reviews: 18,
        discount: "15% OFF ON YOUR FIRST ORDER",
        buttonText: "Follow",
    },
    // Add more reward objects as needed
];

// Function to generate stars
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

// Function to render rewards dynamically
const renderRewards = (data) => {
    return data
        .map(
            (reward) => `
             <div class="flex shadow rounded-[16px] flex-col">
             <div class="shadow-md w-full mt-2 relative items-center flex rounded-[16px]">
             <div class="relative h-full w-[40%] overflow-hidden rounded-l-[16px]">
             <img class="h-full w-full overflow-hidden object-cover" src="${reward.imageUrl}" alt="${reward.name}">
        </div>
        <div class="-ml-2 md:ml-0 relative py-10 w-[60%] -mt-10 flex flex-col">
        <div class="p-6">
        <h2 class="text-[14px] font-semibold">${reward.name}</h2>
        <p class="text-[#78909C] text-[12px] font-[500]">${reward.location}</p>
        <button class="mt-2 text-white bg-white  cursor-default	 select-none text-[13px] px-8 py-2 rounded-[8px]">${reward.buttonText}</button>
        <div class="flex whitespace-nowrap mt-2 items-center space-x-0.5">
        ${generateStars(reward.rating)}
        <p class="text-[#0000008A]/55 pl-2 font-[500] text-[10px] md:text-[15px]">${reward.rating}.0 (${reward.reviews})</p>
        </div>
        </div>
        
        </div>
        
        <div class="bg-[#FC3903] absolute bottom-0 md:text-base text-xs w-full font-[600] text-white px-3 py-3   text-center">
        ${reward.discount}
        
        </div>
        
    </div>
     <div class=" px-4  py-4 gap-4 text-sm flex">
      <button class="bg-black hover:bg-black/80 text-white w-full py-3 rounded-full">Hold</button>
      <button class="bg-white hover:bg-gray-100 border-black border text-black w-full py-3 rounded-full">Delete</button>
      </div>
     </div>
     `
        )
        .join("");
};

// Inject dynamic content into the rewards container
document.getElementById("Rewards").innerHTML = renderRewards(rewardsData);




// Expired Rewards Data
const expiredRewardsData = [
    {
        name: "Burger King",
        location: "Gurugram",
        imageUrl: "./assets/Rewards1.png",
        rating: 5,
        reviews: 23,
        discount: "20% OFF ON NEXT ORDER",
        buttonText: "Followed",
        discountColor: "#909090",
    },

    // Add more expired rewards as needed
];


// Function to render expired rewards dynamically
const renderExpiredRewards = (data) => {
    return data
        .map(
            (reward) => `
   <div class="max-w-md  mx-auto p-8 bg-white rounded-lg shadow-lg">
  <!-- Title -->
  <h2 class="md:text-2xl text-xl whitespace-nowrap font-semibold  text-gray-800 text-center">
    Create reward <span class="text-[#1F41BB]">${reward.name}</span>
  </h2>
  <!-- Subtitle -->
  <p class="text-gray-500 text-sm  md:text-base text-xs  text-center mt-2">
    Aspernatur ut eaque dignissimos in id similique et perspiciatis. Voluptatem officia explicabo.
  </p>
  <!-- Input fields -->
  <div class="mt-6 space-y-4">
    <input 
      type="text" 
      placeholder="Business Name" 
      class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <input 
      type="text" 
      placeholder="Coupon Name" 
      class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
  <!-- Button -->
  <button class="w-full mt-6 py-3 text-sm font-semibold text-white bg-[#1F41BB] rounded-[6px] shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Create Coupon
  </button>
</div>

    `
        )
        .join("");
};

// Inject dynamic content into the expired rewards container
document.getElementById("Expired").innerHTML = renderExpiredRewards(expiredRewardsData);




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






