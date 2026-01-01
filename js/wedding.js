document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  const envelopWrapper = document.querySelector(".envelope-wrapper");
  const noteClickHeart = document.querySelector("#note-click-heart");
  const nameContainer = document.querySelector("#name-co__dau-chu__re");
  const arrowDown = document.querySelector("#arrow-down__hint");
  const sectionThongTin = document.querySelector("#section-thong-tin");

  heart.addEventListener("click", () => {
    const isOpen = envelopWrapper.classList.toggle("flap");

    envelopWrapper.classList.toggle("scale-open", isOpen);
    envelopWrapper.classList.toggle("scale-up-center", !isOpen);
    noteClickHeart.classList.toggle("d-none", isOpen);
    nameContainer.classList.toggle("d-none", !isOpen);
    arrowDown.classList.toggle("d-none", !isOpen);
  });

  const items = document.querySelectorAll(".thu-moi-cuoi, .thong-tin");

  arrowDown.addEventListener("click", () => {
    sectionThongTin.classList.remove("d-none");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = [...items].indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300); // delay theo thứ tự
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  items.forEach((el) => observer.observe(el));
});
