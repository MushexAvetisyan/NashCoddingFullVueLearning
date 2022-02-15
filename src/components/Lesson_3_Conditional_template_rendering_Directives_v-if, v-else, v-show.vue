<template>
  <div class="app">
    <div class="message" v-if="msgIsVisible === 1">
      Print Some Message (v-if) = msgIsVisible inside The Div === 1
    </div>
    <div class="message" v-else-if="msgIsVisible === 2">
      Print Else Message (v-else-if) msgIsVisible === 2
    </div>
    <div class="message" v-else>Print Another Message (v-else)</div>



    <template v-if="msgisVisible2 === 1">
      <div class="message">
        Print Some Message (v-if) = msgIsVisible2 inside the Template Tag === 1
      </div>
    </template>

    <template v-else-if="msgisVisible2 === 2">
      <div class="message">
        Print Else Message (v-else-if) msgIsVisible2 === 2
      </div>
    </template>

    <template v-else>
      <div class="message">Print Anothers Message (v-else)</div>
    </template>

    <div class="vshow" v-show="isVisibleBlock">
      V-Show Example
    </div>



    <div class="name_input" v-if="inputNameVisible">
      <label>Name</label>
      <input type="text" placeholder="input name" key="name_input">
    </div>

    <div class="Nickname_input" v-else>
      <label>Nickname</label>
      <input type="password" placeholder="input Nickname" key="Nickname_input">
    </div>

    <button class="changeinput" @click="inputNameVisible = !inputNameVisible">Change Input Form</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msgIsVisible: 1,
    msgisVisible2: 1,
    isVisibleBlock: true,
    inputNameVisible: true
  }),
};
</script>

<style scoped lang="scss">
.message {
  margin-top: 50px;
  font-size: 30px;
}
.vshow{
  margin-top: 40px;
  font-size: 30px;
}
.name_input{
  margin-top: 40px;
  input{
    padding: 5px 10px;
    margin-left: 10px;
  }
}

.Nickname_input{
  margin-top: 40px;
  input{
    padding: 5px 10px;
    margin-left: 10px;
  }
}

.changeinput{
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
