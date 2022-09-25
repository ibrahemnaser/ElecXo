export default function displayCategories() {
  const categorisArea = document.getElementById("category-box");
  let html = "";
  fetch("../../data/categories.json")
    .then((res) => res.json())
    .then(({ data }) => {
      data.forEach((category) => {
        html += `
            <li>
                      <a href="#">
                        <div class="category-item">
                          <span class="category-name"> ${category.name} </span>
                          <div class="category-img">
                            <img
                              src="${category.img}"
                              alt="${category.name}"
                            />
                          </div>
                        </div>
                      </a>
                    </li>
            `;
      });
      categorisArea.innerHTML = html;
    });
}
