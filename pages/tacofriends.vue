<template>
    <main>
        <h1>Our taco Friends:</h1>
        <ul>
            <li 
                @click="alertUnit" 
                v-for="friend in listOfFriends" 
                :key="friend">{{ friend }}
            </li>
        </ul>
        <p>
            <i>Click on a friend!</i>
            <button @click="inviteFriend">Invite a new friens</button>
        </p>
    </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
    setup() {
        const state = reactive({
            listOfFriends: [
                "Caicai likes varity show",
                "A-liang likes play games on mobile",
                "Elio likes movies",
            ]
        })

        function alertUnit(e: any) {
            alert(e.target.textContent)
        }

        function inviteFriend() {
            const newFriend = 'James' + Math.random()
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
  width: 400px;
}

li {
  text-align: left;
  transition: 0.4s all ease;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}

i {
  color: #555;
}
</style>