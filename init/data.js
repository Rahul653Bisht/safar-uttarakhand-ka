const sampleListings = [
  {
    title: "Mussoorie",
    description:
      "Enjoy the misty hills of Mussoorie, also known as the Queen of Hills. A perfect escape from the summer heat with scenic views and colonial charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1547106365-bb4b17f50a15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3200,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0707, 30.4599],
    },
    category: "Mountains"
  },
  {
    title: "Nainital",
    description:
      "Discover the serene beauty of Nainital, a picturesque hill station nestled around a pear-shaped lake, ideal for boating and surrounded by lush green hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590265787538-4dc8fdeb9651?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2800,
    location: "Nainital, Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4591, 29.3803],
    },
    category: "Lake"
  },
  {
    title: "Rishikesh",
    description:
      "Known as the Yoga Capital of the World, Rishikesh offers a serene environment on the banks of the Ganges. Enjoy river rafting, yoga retreats, and spiritual experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1650341278999-d1b5142cfe30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2500,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    },
    category: "Trending"
  },
  {
    title: "Chopta",
    description:
      "Chopta, also known as the 'Mini Switzerland of India', is a picturesque hill station surrounded by meadows and evergreen forest. It is the base for Tungnath and Chandrashila treks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1735808925775-ef75d878c7c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1800,
    location: "Chopta",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.2245, 30.5456]
    },
    category: "Camping"
  },
  {
    title: "Mukteshwar",
    description:
      "Mukteshwar is a peaceful hill station in Uttarakhand known for its scenic views of the Himalayas, fruit orchards, and colonial architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1693557452401-65f0587a240b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2200,
    location: "Mukteshwar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.6479, 29.4722]
    },
    category: "Farms"
  },
  {
    title: "Binsar",
    description:
      "Binsar is a serene forest retreat nestled in the Kumaon Hills, perfect for nature lovers and bird watchers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1667029839141-057b1c445e4e?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2500,
    location: "Binsar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.5851, 29.6333]
    },
    category: "Mountains"
  },
  {
    title: "Joshimath",
    description:
      "Joshimath is a gateway to several Himalayan expeditions and pilgrimages including Badrinath and Valley of Flowers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575358791694-31183304d4b6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2700,
    location: "Joshimath",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.5678, 30.5564]
    },
    category: "Arctic"
  },
  {
    title: "Bhimtal",
    description:
      "Bhimtal is a picturesque town built around a lake, perfect for boating, leisure, and scenic walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1663128687086-995ac1a9cea6?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1900,
    location: "Bhimtal",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.5611, 29.3434]
    },
    category: "Lake"
  }
];

module.exports = { data: sampleListings };
