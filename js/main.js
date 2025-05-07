document.addEventListener("DOMContentLoaded", () => {
  fetch('walks.json')
    .then(response => response.json())
    .then(walks => {
      const list = document.getElementById("walkList");
      walks.forEach(walk => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `walks/${walk.file}`;
        link.textContent = walk.title;
        link.target = "_blank";
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error("一覧の読み込みに失敗しました", error);
    });
});
