const profile = {
  username: "name of the user",
  posts: 69,
  followers: 997,
  following: 420,
  picture: "insert link",
  fullName: "user fullname",
  bio: "Some information about the user",
  info: () => {
    return `
          infor for: ${username}
          Posts: ${posts}
          Followers: ${followers}
          Following: ${following}
          Biography: ${bio}
         `;
  },
};

info = profile.info();

console.log(info);
