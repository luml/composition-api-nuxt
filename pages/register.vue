<template>
  <section>
    <div class="register">
      <!-- submit.prevent means no longer reload the page after submission -->
      <form @submit.prevent="submit">
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
          <label class="form__label">Name</label>
          <input class="form__input" v-model.trim="name" @input="setName($event.target.value)"/>
        </div>
        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
          <label class="form__label">Age</label>
          <input class="form__input" :value="age" @change="setAge($event.target.value)"/>
        </div>
        <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </form>
    </div>

    <!-- TODO registered friends -->
  </section>
</template>

<script>
import { required, between, minLength } from 'vuelidate/lib/validators';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      name: '',
      age: 0,
      submitStatus: null,
    }
  },
  computed: {
    ...mapState([
      'friends',
    ])
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      required,
      between: between(20, 30)
    }
  },
  methods: {
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setAge(value) {
      this.age = value
      this.$v.age.$touch()
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.$store.commit('add', {
            name: this.name,
            age: this.age,
          })
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
.register {
  margin: 20px;
  padding: 0 20%;
  width: 900px;
}
</style>

<style lang="scss">
@import url('@/assets/scss/docs.scss');
</style>
