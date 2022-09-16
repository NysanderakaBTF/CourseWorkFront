<template>
    <footer>
        <nav>
            <ul >
                <li> <a href="#">Наверх</a></li>
                <li><a href="mailto:factory@example.by">Наша почта</a> </li>
                <li> <a href="tel:+375222222222">По вопросам сотрудничества</a></li>
            </ul> 
        </nav>
        <address id="contact">
            Мы находимся по адресу:<br> 
            Республика Беларусь, город Могилев, Минское шоссе, д59
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
    }
    address::first-line{
        font-family: 'Open Sans';
        font-style: initial;
    }

</style>