document.addEventListener("DOMContentLoaded", () => {
  fetch('walks.json')
    .then(response => response.json())
    .then(walks => {
      const list = document.getElementById("walkList");
      walks.forEach(walk => {
        const li = document.createElement("li");
        li.classList.add("card");

        const link = document.createElement("a");
        link.href = `walks/${walk.file}`;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = walk.thumbnail;
        img.alt = walk.title;

        const title = document.createElement("div");
        title.textContent = walk.title;
        title.className = "card-title";

        link.appendChild(img);
        link.appendChild(title);
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error("一覧の読み込みに失敗しました", error);
    });
});
