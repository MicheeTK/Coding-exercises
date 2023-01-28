const profile = {
  username: "name of the user",
  posts: 0,
  followers: 0,
  following: 0,
  picture: "insert link",
  fullName: "user fullname",
  bio: "Some information about the user",
  info() {
    //"this" is the correct way but doest work with the arrow function
    return `
          info for: ${this.username}
          Posts: ${this.posts}
          Followers: ${this.followers}
          Following: ${this.following}
          Biography: ${this.bio}
         `;
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
  info() {
    return `
          info for: ${this.username}
          Posts: ${this.posts}
          Followers: ${this.followers}
          Following: ${this.following}
          Biography: ${this.bio}
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
  info() {
    return `
          info for: ${this.username}
          Posts: ${this.posts}
          Followers: ${this.followers}
          Following: ${this.following}
          Biography: ${this.bio}
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
  info() {
    return `
          info for: ${this.username}
          Posts: ${this.posts}
          Followers: ${this.followers}
          Following: ${this.following}
          Biography: ${this.bio}
         `;
  },
};

andreaInfo = andrea.info();

console.log("Profile base object info:\n", andreaInfo);
