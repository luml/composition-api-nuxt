<template>
    <main>
        <h1>Our taco Friends:</h1>
        <ul>
            <li
                @click="alertUnit"
                v-for="friend in listOfFriends"
                :key="friend">
                {{ friend }}
              <i>HIT UP☎️</i>
              <!-- <i v-else>TAKE CARE</i> -->
            </li>
        </ul>
        <p>
            <button @click="inviteFriend">Invite a new friens</button>
        </p>
    </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
    data() {
      return {
        isCalled: false,
      }
    },
    setup() {
        const state = reactive({
            listOfFriends: [
                "Caicai likes varity show",
                "A-liang likes play games on mobile",
                "Elio likes movies",
            ]
        })

        function alertUnit(e: any) {
            // this.isCalled = true
            // console.log(e.currentTarget.textContent)
            alert(e.currentTarget.textContent)
        }

        function inviteFriend() {
            const newFriend = 'James works night shift starts at between '
              + Math.random().toFixed(1) + ' and ' + Math.random().toFixed(1)
            state.listOfFriends.unshift(newFriend)
        }

        return {
            ...toRefs(state),
            alertUnit,
            inviteFriend,
        }
    }
})
</script>

<style lang="scss" scoped>
ul {
  width: 550px;
}

li {
  text-align: left;
  transition: 0.4s all ease;
  cursor: pointer;
  &:hover {
    background: #eee;
  }

  i {
    float: right;
  }
}

i {
  color: #555;
}
</style>
