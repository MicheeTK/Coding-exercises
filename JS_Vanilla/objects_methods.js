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
          infor for: ${profile.username}
          Posts: ${profile.posts}
          Followers: ${profile.followers}
          Following: ${profile.following}
          Biography: ${profile.bio}
         `;
  },
};

info = profile.info();

console.log(info);
