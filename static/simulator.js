const infoContainer = document.getElementById("infoContainer");
const sectionTitle = document.getElementById("sectionTitle");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressSpan = document.getElementById("sectionProgress");
const loading = document.getElementById("loading");

const sections = [
  {
    title: "Amygdala Introduction",
    className: "section-1",
    points: [
      "The amygdala is a small, almond-shaped part of the brain deep inside your head, there are two amygdalae, one on each side of your brain.",
      "The amygdalas part of the limbic system, which controls emotions and memory."
    ]
  },
  {
    title: "What Does it Do?",
    className: "section-1",
    points: [
      "The amygdala enables you feel a variety of emotions, such as fear, anger, pleasure, and excitement throughout your daily life.",
      "It can quicly detect danger and can trigger your body to physically act before you even consciously think about the situation..",
      "It works with the hippocampus to help create emotional memories, such as recalling happy moments or difficult experiences like when a friend betrayed you",
      "The amygdala can trigger the fight-or-flight response, making your heart beat faster, your breathing quicken, and your body feel more alert.",
      "Sometimes, it causes an “amygdala hijack,” where strong emotions take over your thinking—like when you shout in frustration without meaning to.."
    ]
  },
  {
    title: "Why Does it Matter?",
    className: "carousel",
    points: [
      "The amygdala keeps you aware of threats and helps you survive by alerting you to dangers, like avoiding a sudden loud noise..",
      "Too much activity in the amygdala can cause anxiety, stress, or overreacting, such as feeling jittery before a big presentation.",
      "Damage or problems in the amygdala can affect your emotions and memory, like struggling to stay calm after an argument."
    ]
  },
  {
    title: "How Do I Calm it Down?",
    className: "section-4",
    points: [
      "I can practice deep breathing exercises to soothe my brain and reduce amygdala activity when I feel overwhelmed.",
      "I can engage in physical activities like walking, dancing, or yoga to help alleviate stress and calm my emotions after a tense moment.",
      "I can adopt positive thinking or seek therapy to provide effective strategies to manage intense feelings when I’m on the verge of lashing out."
    ]
  },
  {
    title: "Fun Fact",
    className: "section-5",
    points: [
      "Did you know? Your amygdala develops earlier than the rational part of your brain, which is why you might sometimes feel impulsive or emotional, especially during your teenage years.",
      "Bonus fact: Listening to music can actually calm your amygdala—try your favorite tune next time you’re stressed!"
    ]
  }
];

let currentSection = 0;
let currentPoint = 0;
let carouselIndex = 0;

function updateProgress() {
  if (progressSpan) {
    progressSpan.textContent = `Section ${currentSection + 1}/${sections.length}, Point ${currentPoint + 1}/${sections[currentSection].points.length}`;
  }
}

function navigateWithLoading(url) {
  if (loading) {
    loading.style.display = 'flex';
    setTimeout(() => { window.location.href = url; }, 500);
  }
}

function displayContent() {
  const section = sections[currentSection];
  sectionTitle.textContent = section.title;

  // Clear infoContainer when starting a new section
  if (currentPoint === 0) {
    infoContainer.innerHTML = "";
  }

  if (section.className === "carousel") {
    infoContainer.innerHTML = ""; // Clear for carousel
    const carousel = document.createElement("div");
    carousel.className = "carousel";
    section.points.forEach((point, index) => {
      const item = document.createElement("div");
      item.className = "carousel-item" + (index === carouselIndex ? " active" : "");
      item.innerHTML = point;
      carousel.appendChild(item);
    });
    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev";
    prevBtn.innerHTML = "←";
    prevBtn.addEventListener("click", () => {
      carouselIndex = (carouselIndex > 0) ? carouselIndex - 1 : section.points.length - 1;
      displayContent();
    });
    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next";
    nextBtn.innerHTML = "→";
    nextBtn.addEventListener("click", () => {
      carouselIndex = (carouselIndex < section.points.length - 1) ? carouselIndex + 1 : 0;
      displayContent();
    });
    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);
    infoContainer.appendChild(carousel);
  } else {
    if (currentPoint < section.points.length) {
      const box = document.createElement("div");
      box.className = section.className;
      box.innerHTML = section.points[currentPoint];
      infoContainer.appendChild(box);
    }
  }

  backBtn.style.display = currentSection > 0 || currentPoint > 0 || (section.className === "carousel" && carouselIndex > 0) ? "inline-block" : "none";
  nextBtn.style.display = currentSection < sections.length - 1 || currentPoint < sections[currentSection].points.length - 1 || (section.className === "carousel" && carouselIndex < section.points.length - 1) ? "inline-block" : "none";

  // Show "Continue to Hippocampus" button only on the last point of the last section
  if (currentSection === sections.length - 1 && currentPoint === sections[currentSection].points.length - 1) {
    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-button";
    continueBtn.textContent = "Continue to Hippocampus";
    continueBtn.addEventListener("click", () => {
      navigateWithLoading("{{ url_for('hippocampus') }}");
    });
    infoContainer.appendChild(continueBtn);
  }
}

if (backBtn && nextBtn && restartBtn) {
  // Click anywhere to advance
  document.addEventListener("click", (e) => {
    if (e.target !== backBtn && e.target !== nextBtn && e.target !== restartBtn) {
      if (currentSection >= sections.length) return;

      if (sections[currentSection].className === "carousel") {
        carouselIndex++;
        if (carouselIndex >= sections[currentSection].points.length) {
          carouselIndex = 0;
          currentPoint = 0;
          currentSection++;
        }
      } else {
        currentPoint++;
        if (currentPoint >= sections[currentSection].points.length) {
          currentPoint = 0;
          currentSection++;
        }
      }
      displayContent();
      updateProgress();
    }
  });

  // Back button
  backBtn.addEventListener("click", () => {
    if (sections[currentSection].className === "carousel" && carouselIndex > 0) {
      carouselIndex--;
    } else if (currentPoint > 0) {
      currentPoint--;
    } else if (currentSection > 0) {
      currentSection--;
      if (sections[currentSection].className === "carousel") {
        carouselIndex = sections[currentSection].points.length - 1;
      } else {
        currentPoint = sections[currentSection].points.length - 1;
      }
    }
    displayContent();
    updateProgress();
  });

  // Next button
  nextBtn.addEventListener("click", () => {
    if (currentSection >= sections.length) return;

    if (sections[currentSection].className === "carousel") {
      carouselIndex++;
      if (carouselIndex >= sections[currentSection].points.length) {
        carouselIndex = 0;
        currentPoint = 0;
        currentSection++;
      }
    } else {
      currentPoint++;
      if (currentPoint >= sections[currentSection].points.length) {
        currentPoint = 0;
        currentSection++;
      }
    }
    displayContent();
    updateProgress();
  });

  // Restart button
  restartBtn.addEventListener("click", () => {
    currentSection = 0;
    currentPoint = 0;
    carouselIndex = 0;
    displayContent();
    updateProgress();
  });

  // Keyboard navigation
  backBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      backBtn.click();
    }
  });
  nextBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      nextBtn.click();
    }
  });
  restartBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      restartBtn.click();
    }
  });
}

displayContent(); // Initial display
updateProgress(); // Initial progress