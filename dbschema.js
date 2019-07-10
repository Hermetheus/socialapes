let db = {
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-07-06T03:03:49.906Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "screamId",
      body: "nice one",
      createdAt: "date"
    }
  ],

  users: [
    {
      userId: "values here",
      email: "email here",
      handle: "handle here",
      createdAt: "Date",
      imageUrl: "image",
      bio: "User Bio",
      website: "https://user.com",
      location: "Wherever"
    }
  ]
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: "values here",
    email: "email here",
    handle: "handle here",
    createdAt: "Date",
    imageUrl: "image",
    bio: "User Bio",
    website: "https://user.com",
    location: "Wherever"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "id#"
    },
    {
      userHandle: "user",
      screamId: "id#"
    }
  ]
};
