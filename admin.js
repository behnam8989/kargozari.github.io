let news = [];

const PASSWORD = "1234";

async function login() {

    const pass = document.getElementById("password").value;

    if(pass!==PASSWORD){

        alert("رمز اشتباه است");

        return;

    }

    document.getElementById("panel").style.display="block";

    const response=await fetch("news.json");

    news=await response.json();

}
function addNews(){

    const title = document.getElementById("title").value.trim();
    const preview = document.getElementById("preview").value.trim();
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim();
    const date = document.getElementById("date").value.trim();

    if(title=="" || preview=="" || content==""){

        alert("لطفاً عنوان، متن کوتاه و متن کامل را وارد کنید.");

        return;

    }

    const item={

        id: news.length>0 ? Math.max(...news.map(n=>n.id))+1 : 1,

        title:title,

        preview:preview,

        content:content,

        image:image,

        date:date

    };

    news.push(item);

    alert("✅ خبر با موفقیت اضافه شد.");

    document.getElementById("title").value="";
    document.getElementById("preview").value="";
    document.getElementById("content").value="";
    document.getElementById("image").value="";
    document.getElementById("date").value="";

}
function downloadJson(){

    if(news.length===0){

        alert("هنوز هیچ خبری ثبت نشده است.");

        return;

    }

    const json = JSON.stringify(news,null,2);

    const blob = new Blob([json],{
        type:"application/json"
    });

    const link=document.createElement("a");

    link.href=URL.createObjectURL(blob);

    link.download="news.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

}
