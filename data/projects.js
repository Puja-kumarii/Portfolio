const projectData = [

    {
      title: "Hack2Bot An AI Chatbot",
      link: "https://github.com/Puja-kumarii/Hack2bot-Chatbot",
      image: "images/project-3.png"
    },
    {
      title: "Load Testing Tool",
      link:"https://github.com/Puja-kumarii/Load-Testing-Tool",
      image: "images/project-1.png"
    },
    
    
  ];

  
const project = document.getElementById("project_data");
let project_html = "";

projectData.forEach(p =>{
    project_html +=`
        <div class="col-lg-4">
        <div class="text-container">
            <h5> <strong> ${p.title}</strong> </h5>
            <div class="image-container border">
              <a href="${p.link}" target="_blank">
                <img class="img-fluid" src="${p.image}" alt="alternative">
              </a>
            </div> <!-- end of image-container -->
        </div> <!-- end of text-container -->
    </div> <!-- end of col -->
    `
})

project.innerHTML = project_html;
  