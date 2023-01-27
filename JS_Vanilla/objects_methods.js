const profile = {
  username: "name of the user",
  posts: 0,
  followers: 0,
  following: 0,
  picture: "insert link",
  fullName: "user fullname",
  bio: "Some information about the user",
  info: () => {
    return `
          infor for: ${profile.username}
          Posts: ${profile.posts}
          Followers: ${profile.followers}
          Following: ${profile.following}
          Biography: ${profile.bio}
         `; //Hard coding usinf the object name  isn't a good idea...
  },
};

profileInfo = profile.info();

console.log("Profile base object info:\n", profileInfo);

//From code base above, let create 3 different accounts

const celline = {
  username: "Celline",
  posts: 82,
  followers: 2000,
  following: 720,
  picture: "insert link",
  fullName: "Celline Reuter",
  bio: "Celline is awesome",
  info: () => {
    return `
          infor for: ${profile.username}//Hard coding the object name isn't a good idea...
          Posts: ${profile.posts}
          Followers: ${profile.followers}
          Following: ${profile.following}
          Biography: ${profile.bio}
         `;
  },
};

const Paul = {
  username: "Paul",
  posts: 100,
  followers: 3997,
  following: 120,
  picture: "insert link",
  fullName: "Paul Tshistshi",
  bio: "Paul is dope",
  info: () => {
    return `
          infor for: ${profile.username}//Hard coding the object name isn't a good idea...
          Posts: ${profile.posts}
          Followers: ${profile.followers}
          Following: ${profile.following}
          Biography: ${profile.bio}
         `;
  },
};

paulInfo = profile.info();

console.log("Profile base object info:\n", paulInfo);

const Andrea = {
  username: "Andrea",
  posts: 69,
  followers: 997,
  following: 420,
  picture: "insert link",
  fullName: "Andrea Botez",
  bio: "Andrea is hot",
  info: () => {
    return `
          infor for: ${profile.username}//Hard coding the object name isn't a good idea...
          Posts: ${profile.posts}
          Followers: ${profile.followers}
          Following: ${profile.following}
          Biography: ${profile.bio}
         `;
  },
};

andreaInfo = profile.info();

console.log("Profile base object info:\n", paulInfo);
