class FAQManager {
  constructor() {
    this.faqItems = document.querySelectorAll(".faq-item");
    this.searchInput = document.getElementById("searchInput");
    this.noResults = document.getElementById("noResults");
    this.viewCounts = this.loadViewCounts();

    this.init();
  }

  init() {
    this.setupAccordion();
    this.setupSearch();
    this.updateViewCounts();
  }

  setupAccordion() {
    this.faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      const answerContent = answer.innerHTML;
      answer.innerHTML = `<div>${answerContent}</div>`;

      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        this.faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        if (isActive) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
          this.incrementViewCount(item);
        }
      });
    });
  }

  setupSearch() {
    this.searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      this.filterFAQs(searchTerm);
    });
  }

  filterFAQs(searchTerm) {
    let visibleCount = 0;

    this.faqItems.forEach((item) => {
      const question = item.querySelector("h3").textContent.toLowerCase();
      const keywords = item.dataset.keywords.toLowerCase();
      const answer = item
        .querySelector(".faq-answer")
        .textContent.toLowerCase();

      const isMatch =
        question.includes(searchTerm) ||
        keywords.includes(searchTerm) ||
        answer.includes(searchTerm);

      if (isMatch || searchTerm === "") {
        item.classList.remove("hidden");
        visibleCount++;
      } else {
        item.classList.add("hidden");
        item.classList.remove("active");
      }
    });

    this.noResults.style.display = visibleCount === 0 ? "block" : "none";
  }

  incrementViewCount(item) {
    const questionText = item.querySelector("h3").textContent;
    const currentCount = this.viewCounts[questionText] || 0;
    this.viewCounts[questionText] = currentCount + 1;

    this.saveViewCounts();
    this.updateViewCount(item, this.viewCounts[questionText]);
  }

  updateViewCounts() {
    this.faqItems.forEach((item) => {
      const questionText = item.querySelector("h3").textContent;
      const count = this.viewCounts[questionText] || 0;
      this.updateViewCount(item, count);
    });
  }

  updateViewCount(item, count) {
    const viewCountElement = item.querySelector(".view-count");
    viewCountElement.textContent = `${count} visualizaç${
      count !== 1 ? "ões" : "ão"
    }`;
  }

  loadViewCounts() {
    const stored = localStorage.getItem("adventus_faq_views");
    return stored ? JSON.parse(stored) : {};
  }

  saveViewCounts() {
    localStorage.setItem("adventus_faq_views", JSON.stringify(this.viewCounts));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new FAQManager();
});
