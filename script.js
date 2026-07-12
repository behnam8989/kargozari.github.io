fetch("news.json")
.then(response => response.json())
.then(news => {

    const container = document.getElementById("news");

    news.forEach(item => {

        container.innerHTML += `

        <div class="card">

            <img src="${item.image}" alt="${item.title}">

            <div class="content">

                <h2>${item.title}</h2>

                <p>${item.preview}</p>

                <a class="btn" href="news.html?id=${item.id}">
                    ادامه مطلب
                </a>

            </div>

        </div>

        `;

    });

});
