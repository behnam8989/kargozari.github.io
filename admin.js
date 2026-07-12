const PASSWORD = "1234"; // رمز ورود

let news = [];

function login() {
    const pass = document.getElementById("password").value;

    if (pass !== PASSWORD) {
        alert("رمز اشتباه است.");
        return;
    }

    document.getElementById("panel").style.display = "block";
    alert("خوش آمدید.");
}

function addNews() {

    const item = {
        id: news.length + 1,
        title: document.getElementById("title").value,
        preview: document.getElementById("preview").value,
        content: document.getElementById("content").value,
        image: document.getElementById("image").value,
        date: document.getElementById("date").value
    };

    news.push(item);

    alert("خبر اضافه شد.");

    document.getElementById("title").value = "";
    document.getElementById("preview").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";
    document.getElementById("date").value = "";
}

function downloadJson() {

    const json = JSON.stringify(news, null, 2);

    const blob = new Blob([json], {type: "application/json"});

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "news.json";

    a.click();

}
