const ProjectAPI = {
  projects: [
    {
      id: 1,
      name: "Example Project 1",
      tag: "Javascript",
      url: "example-project1",
      icon: "example-project1-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: null,
      source: "github",
      info: "what"
    },
    {
      id: 2,
      name: "Example Project 2",
      tag: "C#",
      url: "example-project2",
      icon: "example-project2-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: null,
      source: "github",
      info: "what"
    },
    {
      id: 3,
      name: "Example Project 3",
      tag: "C#",
      url: "example-project3",
      icon: "example-project3-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: null,
      source: "github",
      info: "what"
    },
    {
      id: 4,
      name: "Example Project 4",
      tag: "C#",
      url: "example-project4",
      icon: "example-project4-icon",
      about: "This is About text",
      description: "This is a Description text",
      img1: "img1",
      img2: "img2",
      img3: "img3",
      img4: "img4",
      video: "",
      demo: null,
      source: "github",
      info: "what"
    }
  ],
  all: function() {
    return this.projects;
  },
  get: function(id) {
    const isProject = p => p.url === id;
    return this.projects.find(isProject);
  }
};

export default ProjectAPI;
