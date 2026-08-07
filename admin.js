let players = JSON.parse(localStorage.getItem("players")) || [];
let news = JSON.parse(localStorage.getItem("news")) || [];

// ===== نمایش بازیکنان =====
function showPlayers(){

    let html = "";

    if(players.length==0){

        html="<div class='card'>هنوز بازیکنی ثبت نشده است.</div>";

    }else{

        for(let i=0;i<players.length;i++){

            html += `
            <div class="card">

                <img src="${players[i].image}">

                <h3>${players[i].name}</h3>

                <p>شماره: ${players[i].number}</p>

                <p>پست: ${players[i].position}</p>

                <button class="delete" onclick="deletePlayer(${i})">
                حذف
                </button>

            </div>
            `;
        }

    }

    document.getElementById("players").innerHTML = html;

}

// ===== افزودن بازیکن =====
function addPlayer(){

    let name=document.getElementById("playerName").value;
    let number=document.getElementById("playerNumber").value;
    let position=document.getElementById("playerPosition").value;
    let file=document.getElementById("playerImage").files[0];

    if(name=="" || number=="" || position=="" || !file){

        alert("تمام قسمت ها را کامل کنید.");

        return;

    }

    let reader=new FileReader();

    reader.onload=function(e){

        players.push({

            name:name,

            number:number,

            position:position,

            image:e.target.result

        });

        localStorage.setItem("players",JSON.stringify(players));

        showPlayers();

        document.getElementById("playerName").value="";
        document.getElementById("playerNumber").value="";
        document.getElementById("playerPosition").value="";
        document.getElementById("playerImage").value="";

    }

    reader.readAsDataURL(file);

}

// ===== حذف بازیکن =====
function deletePlayer(index){

    players.splice(index,1);

    localStorage.setItem("players",JSON.stringify(players));

    showPlayers();

}

// ===== نمایش خبر =====
function showNews(){

    let html="";

    if(news.length==0){

        html="<div class='card'>هنوز خبری ثبت نشده است.</div>";

    }else{

        for(let i=0;i<news.length;i++){

            html+=`

            <div class="card">

            <img src="${news[i].image}">

            <h3>${news[i].title}</h3>

            <p>${news[i].text}</p>

            <button class="delete" onclick="deleteNews(${i})">

            حذف

            </button>

            </div>

            `;

        }

    }

    document.getElementById("news").innerHTML=html;

}

// ===== افزودن خبر =====
function addNews(){

    let title=document.getElementById("newsTitle").value;
    let text=document.getElementById("newsText").value;
    let file=document.getElementById("newsImage").files[0];

    if(title=="" || text=="" || !file){

        alert("تمام قسمت ها را کامل کنید.");

        return;

    }

    let reader=new FileReader();

    reader.onload=function(e){

        news.push({

            title:title,

            text:text,

            image:e.target.result

        });

        localStorage.setItem("news",JSON.stringify(news));

        showNews();

        document.getElementById("newsTitle").value="";
        document.getElementById("newsText").value="";
        document.getElementById("newsImage").value="";

    }

    reader.readAsDataURL(file);

}

// ===== حذف خبر =====
function deleteNews(index){

    news.splice(index,1);

    localStorage.setItem("news",JSON.stringify(news));

    showNews();

}

showPlayers();

showNews();