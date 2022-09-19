<template>
    <div id="#maindiv">
        <!-- <Navbar/> -->
        <body id="mmp" class="vh-100">
            <div class="ourHistory content">
                <div class="text">
                    <h2>История фабрики</h2>
                <p >Город Могилев в Беларуси славится производством шоколада. Он также известен как город романтики и восточного декаданса. Город был основан в 13 веке.
                    Первая кондитерская мастерская в Могилеве была построена в 1670 г. Она расположена в исторической части города под названием Книхаохя, что в переводе означает кондитерская или конфета. . В течение 18 и 19 веков Европа стала одержима сладкими продуктами. Это привело к массовому производству шоколада, что обогатило местную экономику. Первая шоколадная фабрика в Могилеве была построена в 17 веке. К этому времени в Великом княжестве Литовском насчитывалось более 100 подобных предприятий.
                    Сегодня Могилев славится шоколадом и конфетами ручной работы. Есть много мелких предприятий, которые делают эти угощения. Каждое предприятие создает уникальные творения, основанные на многолетнем опыте создания уникальных рецептов. Природная красота города делает его идеальным местом для производства шоколада. В окрестных лесах в изобилии растет мед, который местные жители используют для приготовления вкуснейших шоколадных напитков.
                    Шоколад, произведенный в Могилеве, известен во всем мире благодаря своему качеству и восхитительному вкусу. Город известен как «Шоколадная столица Европы» из-за своей богатой истории и современной известности в отрасли. Многие туристы ежегодно посещают этот исторический город, чтобы насладиться шоколадом и конфетами ручной работы, созданными талантливыми местными жителями.
                <br>
                    <div class="now text">
                        Наша фабрика является одной из старейших на территории Могилева. Мы соблюдаем вековые традиции, и в то же время применяем инновационные технологии. Только за 2020 год мы поставили более 100 тысяч тонн отборного шоколада во многие страны. Наши двери всегда открыты для посетителей и дегустаторов!
                    </div>
                </p>
                </div>
                
            </div>
            <article>
                <h2 class="wgood">Почему шоколад полезен?</h2>
                <div class="row content">
                
                    <div class="lefttext content">
                        
                        <section>
                            <h3>Из чего шоколад делается</h3>
                            <p>
                                Сложно представить себе более популярную и любимую сладость, чем шоколад. Для детей он сразу становится заветным лакомством, да и взрослые не прочь побаловать себя им время от времени. Любимая сладость нашла отражение и во множестве произведений искусства, например известная картина «Шоколадница» Жана-Этьена Лиотара<br>
                                Шоколад производится из какао-бобов. Именно они отвечают за полезную составляющую продукта: чем больше содержание какао-бобов, тем питательнее лакомство. 
                            </p>
                        </section>
                        <section>
                            <h3>Чем он полезен</h3>
                            <p>
                                Чем же так целебны какао-бобы? Дело в том, что они содержат особое вещество – <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D1%85%D0%B8%D0%BD%D1%8B">катехин</a>, которое является мощным антиоксидантом  и помогает защитить наш организм от вредного воздействия <a href="#terms">свободных радикалов</a>.
                                
                                Кроме катехина какао-бобы содержат и флавоноиды , известные своим антибактериальнымвоздействием и положительным влиянием на состав крови.
                                <br>
                                Также этот продукт содержит в себе кофеин и глюкозу, которая придает тонус и активирует мозговую деятельность человека. Поэтому иногда, чтобы взбодриться и стимулировать свой ум, необязательно выпивать целую чашку крепкого кофе, а достаточно съесть пару кусочков темного шоколада.
                                <br>
                                100 граммов молочного шоколада являются отличным источником (более 19% <abbr title="Дневная норма" style="background-color: inherit;">ДН</abbr>) рибофлавина, <a href="#terms" style="background-color: inherit;">витамина B<sub style="background-color: inherit;">12</sub></a>, марганца, фосфора и цинка. Шоколад является хорошим источником (10–19% суточной нормы) кальция, магния и железа.
                            </p>
                        </section>
                    </div>
        
                    <div class="imgright content" >
                        <img src="../assets/shokolad.jpeg" alt="Красивый шоколад" width="400" height="300">
                    </div>
                    
                
                </div>
            </article>
        </body>
        <!-- <Foot/> -->
    </div>
</template>

<script>
import Navbar from './navbar.vue';
import Foot from './foot.vue';
export default{
    name: "Mainpage",
    components: {
    Navbar,
    Foot
}
}
var w = window.innerWidth;
</script>

<style lang="scss">
    *{
       // max-width: 1500px;
        margin: 0 auto;
    }
    .content{
        max-width: 1500px;
    }
    #maindiv{
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';
        background-color: rgb(255, 246, 237);
        color:rgb(81, 51, 46);
    }
.text{
    p{
        background-color: transparent;
        font-weight: bolder;
        margin-left: 10%;
        margin-right: 10%;
    }
    h2{background-color: transparent;text-align: center;font-weight: bolder}
    .now{
        margin-left: 10%;
        margin-right: 10%;
        font-size: large;
        font-weight: bold;
    }

    background-color: rgba(256 , 256,256,0.5);
    backdrop-filter: blur(1px);
    
}
.ourHistory{
    background-image: url('../assets/Mahilo.jpg');
    background-color: transparent;
    background-size: cover;

}
.row{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 10px;
    max-width: 1500px;
    background-color: rgb(255, 251, 247);
    margin: 0 auto;
}
.lefttext{
    margin:0;
    padding: 0;
    width: 60%;  

}
.imgright{
    width: 30%;
    margin:0;
    padding: 0;
    overflow:hidden;
    img:hover{
        transform: scale(1.2);
        transition: transform ease 0.5s;
    }
    transition-duration: 0.5s;
    transition: transform ease 0.5s;
}
.wgood{
    text-align: center;
    background-color: #603e31;
    color: beige;
}
h3{
    text-align: center;
}
@media screen and (max-width: 1000px) {
    #maindiv{
        flex-wrap: wrap;
        flex-direction: column;
    }  
    .row{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .now{
        margin: 0;
    }
    .imgright{
        margin: 0;
        justify-self: center;
        padding: 0;
        margin-left: 2%;
        margin-right: 2%;
        width: min-content;
    }
    .lefttext{
        width: auto;
        margin:2%;
        padding: 0;
        text-align: justify;     
    }
}
@media screen and (max-width: 400px) {
    #maindiv{
        flex-wrap: wrap;
        flex-direction: column;
    }  
    .row{
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0;
    }
    .now{
        margin: 0;
    }
    .imgright img{
        width: 95vw;
        height :min-content
    }
    .lefttext{
        width: auto;
        margin:2%;
        padding: 0;
             
    }
    .lefttext{
        text-align: justify;
    }
}

</style>