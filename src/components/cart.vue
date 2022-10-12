  <template>
    <div class="container">
        <div class="product_list">
            <Cartitem v-for="i in (1,2,3,4,5)" :key=i />
        </div>
        <div class="checkout">
            <div class="total_price">
                  <p>Итого: </p>
                  <p>13 руб </p>
            </div>
            <div class="cart">
                <a href="#" class="cart_b">Перейти к оплате</a> 
            </div>
        </div>
    </div>
  </template>
  
  <script>
import cartitem from '../components/cartitem.vue'
import Cartitem from './cartitem.vue'
  export default {
    name: "cart",
    components: { Cartitem }
}
  </script>
  
  <style lang="scss" scoped>
    .container{
        height: max-content;  
        min-height: 100%;
    }
.checkout{
    margin-top: 5%;
    display: flex;
    align-items: center;
    margin-bottom: 5%;
    flex-direction: column;
}
.cart,.cart_b{
    background-color:  #603e31;;
    color: antiquewhite;
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    text-align: center;
}
.total_price{
    display: flex ;
    align-items: center;
    width:50%; 

}
.confirm a{
    text-decoration: none;
    color: black;

}
  </style>