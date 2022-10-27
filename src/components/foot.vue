<template>
    <footer>
            <nav class="na">
            <ul >
                <li> <a href="#">Наверх</a></li>
                <li><a href="mailto:factory@example.by">Наша почта</a> </li>
                <li> <a href="tel:+375222222222">По вопросам сотрудничества</a></li>
            </ul> 
            </nav>
            <div class="social_buttons">
                <a class="social_button" href="https://facebook.com"><img src="../assets/icons8-facebook.svg"></a>
                <a class="social_button" href="https://github.com"><img src="../assets/icons8-github.svg"></a>
                <a class="social_button" href="https://pinterest.com"><img src="../assets/icons8-pinterest.svg"></a>
                <a class="social_button" href="https://twitter.com"><img src="../assets/icons8-twitter.svg"></a>
            </div>
            <address id="contact">
                <p>
                    Мы находимся по адресу:<br> 
                    Республика Беларусь, город Могилев, Минское шоссе, д59
                </p>
                
            </address>
            <p>&copy; Магілёўская фабрыка шакаладу 2022<br>Разработчик и дизайнер: Григорий Резников</p>

    </footer>

</template>

<script>
export default{
    name: "Foot"
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');
    
    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #603e31;
        color: beige;
        font-weight: 600;
        padding-top: 10px;
        width: 100vw;
    }
    footer p{
        width: 100%;
        text-align: center;
    }
    footer {
        a,li,address,p,ul,nav{
            background: inherit;
            color: inherit;
            &:hover{
                color: beige;
            }
        }   
        
    }
    ul{
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    address::first-line{
        font-family: 'Open Sans';
        font-style: initial;
    }
    @media screen and (max-width: 740px) {
        footer{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
        }
        address{
            margin-left: 1%;
            text-align: center;
            text-justify: distribute;
            margin: 0 auto;
            margin-bottom: 4%;
        }
        li{
            text-align: center;
        }
    }
    @media screen and (min-width: 890px) {
        .na,.social_buttons, #contact{
            width: 33%;
        }
    }
    @media screen and (max-width: 890px) {
        .na,.social_buttons, #contact{
            width: 100%;
            justify-content: center;
        }
    }
    .social_buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        top: 20px;
        bottom: 20px;
    }
    
    .social_button img {
        width: 30px;
        position: relative;
        z-index: 3;
    }
    
    .social_button {
        margin: 0 10px;
        position: relative;
        overflow: hidden;
        height: 40px;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
    }
    
    .social_button::after {
        content: "";
        background: linear-gradient(#cabd36, #db691d);
        position: absolute;
        z-index: 1;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }
    
    .social_button:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
</style>