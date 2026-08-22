const accordionData = [
  {
    id: 1,
    title: "What is an AI Agent?",
    content:
      "An AI agent is a system that can perceive its environment, make decisions, and take actions to achieve specific goals."
  },
  {
    id: 2,
    title: "What is LangChain?",
    content:
      "LangChain is a framework for building applications powered by large language models."
  },
  {
    id: 3,
    title: "What is RAG?",
    content:
      "Retrieval-Augmented Generation combines information retrieval with generative AI to provide more accurate responses."
  },
  {
    id: 4,
    title: "What is Vector Search?",
    content:
      "Vector search finds similar data points by comparing numerical embeddings instead of exact keywords."
  },
  {
    id: 5,
    title: "What is Fine-Tuning?",
    content:
      "Fine-tuning is the process of training a pre-trained model on a specific dataset to improve performance for a particular task."
  }
];

const accordianEl = document.querySelector(".accordion")

function accordionFunction(){
    accordianEl.innerHTML = accordionData
      .map(
        (dataItem) => `
     <div class="accordion-container">
        <div class="header">
          <h3 class="title">${dataItem.title}</h3>
          <button class="button">Show</button>
        </div>

        <div class="content-container">
          <p class="content">${dataItem.content}</p>
        </div>
      </div>
    `,
      )
      .join(" ");
}

accordionFunction()

const currentAccordionTitle = document.querySelectorAll('.accordion-container')



currentAccordionTitle.forEach(currentActiveAccordion => {
    const button= document.querySelector(".button")
   currentActiveAccordion.addEventListener("click", (event) => {
    if (currentActiveAccordion.classList.contains('active')){
        currentActiveAccordion.classList.remove("active")
        button.textContent = "Show"
    }else{
        let getAllActiveAccordion = document.querySelectorAll(".active")

        getAllActiveAccordion.forEach((activeAccordion) => {
            activeAccordion.classList.remove("active")
        })

        currentActiveAccordion.classList.add("active")
        button.textContent = "Hide"
    }
   })
})


