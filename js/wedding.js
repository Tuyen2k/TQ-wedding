document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  const envelopWrapper = document.querySelector(".envelope-wrapper");
  const noteClickHeart = document.querySelector("#note-click-heart");
  const nameContainer = document.querySelector("#name-co__dau-chu__re");
  const arrowDown = document.querySelector("#arrow-down__hint");
  const sectionThongTin = document.querySelector("#section-thong-tin");
  const sectionIntroCoDauChuRe = document.querySelector("#section-intro-co-dau-chu-re");

  heart.addEventListener("click", () => {
    const isOpen = envelopWrapper.classList.toggle("flap");

    envelopWrapper.classList.toggle("scale-open", isOpen);
    envelopWrapper.classList.toggle("scale-up-center", !isOpen);
    noteClickHeart.classList.toggle("d-none", isOpen);
    nameContainer.classList.toggle("d-none", !isOpen);
    arrowDown.classList.toggle("d-none", !isOpen);
  });

  const items = document.querySelectorAll(".thu-moi-cuoi, .thong-tin");

  let isThongTinShown = false;

  const showThongTin = () => {
    sectionThongTin.classList.remove("d-none");
    sectionIntroCoDauChuRe.classList.remove("d-none");
    isThongTinShown = true;
  };

  function onUserIntent() {
    if (arrowDown.classList.contains("d-none")) return;
    if (isThongTinShown) return;

    showThongTin();
  }

  // 👉 Click arrow
  arrowDown.addEventListener("click", () => {
    onUserIntent();

    sectionThongTin.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // 👉 Scroll để hiện section
  window.addEventListener("wheel", onUserIntent, { passive: true });
  window.addEventListener("touchmove", onUserIntent, { passive: true });

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
