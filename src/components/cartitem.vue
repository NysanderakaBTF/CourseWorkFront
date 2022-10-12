<template>
    <div class="prod">
      <div class="descr">
        <div class="inf">
          <h4>Наименование</h4>
          <img src="@/assets/product.jpg" style="width: 100px;">
        </div>
        <div class="quant">
           <span>Кол-во:</span>
          <input type="number" value="1" style="width: 40px; border: none; font-size: 20px;">
        </div>
        <div class="price">
            <span>Всего: </span>
          <span>
            3 руб
          </span>
        </div>
        <div class="but">
            <button class="delete">Удалить</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "cartitem"
  }
  </script>
  
  <style lang="scss" scoped>

    .inf{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
  .delete{
    background-color:  #603e31;
    color:antiquewhite;
    font-weight: bolder;
    border-color: none;
    border-radius: 5px;
  }
  .descr h3 {
    margin: 0;
  }
  
  .prod {
    display: flex;
    border: #603e31;
    border-width: 2px;
    border-style: groove;
    border-bottom: none;


  }
  .price{
    display: flex;
    justify-content: space-evenly;
  }
  .prod:last-child {
    border-bottom: groove;
    border-bottom-width: 2px;
  }
  
  .quant, .price, .but {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .descr {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-left: 20px;
  }
  @media screen and (max-width: 410px) {
    .descr{
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
    }
  }
  </style>