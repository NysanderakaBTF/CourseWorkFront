<template>
    <div id="#maindiv" class="content">
            <div class="adv">
                <p>
                    Мы предлагаем Вам незабываемую экскурсиию по шоколадной фабрике с дегустацией в конце. <br><br> Есть  уникальная возможность купить <span class="gold">золотой билет</span> и услышать всё от самого директора, попробовать себя в качестве работника и сделать свою шоколадную скульптуру! <br> <br>
                    Экскурсии на фабрику будет интересна как взрослым, так и детям. Вы сможете посетить единственный в стране музей шоколада, и перенестись в кондитерские мастерские 18 века. Ждем Вас с нетерпением!
                </p>  
            </div >
            <div class="containerr">
                <form action="https://httpbin.org/get" method="get">
                    <fieldset class="myform">
                        <legend>Записаться</legend>
                    
                        <section class="inputLabel">
                          <input name="name" type="text" placeholder="Имя" required >
                          <label for="name">Имя</label>
                        </section>
                        <section class="inputLabel">
                            <input name="surname" type="text" placeholder="Фамимлия" required >
                            <label for="surname">Фамилия</label>
                          </section>
                    
                        <section class="inputLabel">
                          <input name="email" type="email" placeholder="example@email.com" >
                          <label for="email">Email</label>
                        </section>
                    
                        <section class="inputLabel">
                          <input name="date" type="date">
                          <label for="date" >Дата посещения</label>
                        </section>
                        
                        <section class="inputLabel">
                            <input name="phone" type="tel">
                            <label>Телефон</label>
                          </section>

                        <section class="rad">
                        <div class="rado">
                            <input type="radio" name="radio" id="r1" checked>
                            <label for="r1">Обычный билет - 30 бел. руб</label>
                        </div>
                          <div class="rado">
                            <input type="radio" name="radio" id="r2">
                          <label for="r2">Золотой билет - 45 бел. руб</label>
                          </div>
                          
                        </section>
                    

                        <section class="inputLabel">
                          <textarea name="suggestions"></textarea>
                          <label for="suggestions" >Пожелания</label>
                        </section>
                        <div class="but">
                            <button type="submit">отправить</button>
                            <button type="reset">сбросить</button> 
                        </div>
                            
                      </fieldset>
                </form>
            </div>
                
            <div class="im">
                 <img src="../assets/tick.jpg" class="immm">
            </div>
    </div>
</template>

<script>
import Navbar from './navbar.vue';
import Foot from './foot.vue';
export default{
    name: "visit",
    components: {
    Navbar,
    Foot
}
}

</script>

<style lang="scss">
    .content{
        max-width: 1500px;
    }
    #maindiv{
      justify-content: center;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';

        background-color:rgb(255, 251, 247);
        color:rgb(81, 51, 46);
      justify-content: center;
    }
    select,
    input,
    button {
    display: block;
    margin: 0.5em 0.5em;
    font-size: 15px;
    }
    .myform{
        width: fit-content;
    }
    form{
        
        display: flex;
        box-sizing: border-box;
        max-width: 1500px;
        margin: 0 auto;
        justify-content: center;
        border-color: #ac946f;
        border-width: 2px;
        section{
            
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            
            label{
                margin: 0;
                width: fit-content;
                text-align: right;
            }
           
        }
        .rad{
            flex-direction: column;
            
        }
        .rado{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            margin: 0;
        }
        button{
            margin-left: 0;
            margin-right: 0;
            justify-self: center;
        }
    }
    .gold{
        color:goldenrod;
        font-weight: bolder;
    }
    p{
        width: 80%;
        font-size: larger;
    }
    .but{
        display: flex;
        justify-content: space-between;
        button{
            border-radius: 10px;
            border-color: #ac946f;
            background-color: #dfd7c8;
            font-weight: bolder;
            border-width: 2px;
            border-style: solid;
        }
    }
    .immm{
        opacity: 0.7;
        width: 80%;
        justify-self: center;
    }
    .im{
      display: flex;
      max-width: 400px;
    }
    @media screen and (max-width: 400px) {
        form section {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
        }
    }
    .containerr{
        position: relative;
        padding: 50px;
        max-width: 450px;
        margin-bottom: 40px;
        min-height: 380px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        border-radius: 10px;
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
    }
    .containerr::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border-radius: 5px;
        pointer-events: none;
        background: rgba(255, 255, 255, 0.1);
    }
    input {
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        color: rgb(0, 0, 0);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .containerr input:hover,.container input:focus  {
        background: linear-gradient(115deg,
        rgba(0, 0, 0, 0.10),
        rgba(255, 255, 255, 0.25));
        transition: .5s;
    }
</style>