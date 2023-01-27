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
          infor for: ${celline.username}
          Posts: ${celline.posts}
          Followers: ${celline.followers}
          Following: ${celline.following}
          Biography: ${celline.bio}
         `;
  },
};

cellineInfo = celline.info();
console.log("Profile base object info:\n", cellineInfo);

const paul = {
  username: "Paul",
  posts: 100,
  followers: 3997,
  following: 120,
  picture: "insert link",
  fullName: "Paul Tshistshi",
  bio: "Paul is dope",
  info: () => {
    return `
          infor for: ${paul.username}
          Posts: ${paul.posts}
          Followers: ${paul.followers}
          Following: ${paul.following}
          Biography: ${paul.bio}
         `;
  },
};

paulInfo = paul.info();
console.log("Profile base object info:\n", paulInfo);

const andrea = {
  username: "Andrea",
  posts: 69,
  followers: 997,
  following: 420,
  picture: "insert link",
  fullName: "Andrea Botez",
  bio: "Andrea is hot",
  info: () => {
    return `
          infor for: ${andrea.username}
          Posts: ${andrea.posts}
          Followers: ${andrea.followers}
          Following: ${andrea.following}
          Biography: ${andrea.bio}
         `;
  },
};

andreaInfo = andrea.info();

console.log("Profile base object info:\n", andreaInfo);
