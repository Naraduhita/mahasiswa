<template>
  <div class="">
    <div class="m-auto p-5">
      <!-- @submit.prevent="addShopp"  -->
      <div class="flex">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded"
          @click.prevent="addRandomCode"
        >
          +
        </button>
        <div class="ml-3 my-auto font-bold text-xl">{{ total }}</div>
      </div>
      <!--show Random Code -->
      <div id="randomCode">
        <div
          v-for="item in arrayShopping"
          class="flex my-5"
          v-bind:key="item.id"
        >
          <div class="border p-2 mr-5 w-1/5">{{ item.id }}</div>
          <button
            class="bg-purple5 mr-3 hover:bg-purple2 text-white font-bold py-2 px-4 rounded"
          >
            {{ item.jumlah }}
          </button>
          <button
            class="bg-purple4 mr-3 hover:bg-purple2 text-white font-bold py-2 px-4 rounded"
            @click="penjumlahan(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
          <!--Kurang-->
          <button
            class="bg-purple5 mr-3 hover:bg-purple2 text-white font-bold py-2 px-4 rounded"
            @click="pengurangan(item.id)"
            :disabled="item.jumlah === 0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
          <!-- Hapus -->
          <button
            class="bg-red-500 hover:bg-purple2 text-white font-bold py-2 px-4 rounded"
            @click="hapus(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../firebase/config";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";

export default {
  name: "Shopping",
  components: {},

  data: () => ({
    arrayShopping: [],
    total: 0,
  }),

  async mounted() {
    // const querySnapshot = await getDocs(collection(database, "items"));
    // querySnapshot.forEach((doc) => {
    //   this.arrayShopping.push({ id: doc.data().id, jumlah: doc.data().jumlah });
    // });
    const temp = []
    onSnapshot(collection(database, "items"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        temp.push({
          id: doc.data().id,
          jumlah: doc.data().jumlah,
        });
      });
    this.arrayShopping = temp

    });
  },
  // https://www.youtube.com/watch?v=84mhLKUM04E&ab_channel=MakeAppswithDanny
  //  https://firebase.google.com/docs/firestore/quickstart
  methods: {
    async addRandomCode() {
      const randomCode = Math.random().toString(36).slice(2);
      // this.arrayShopping.push({ id: randomCode, jumlah: 0 });
      try {
        const docRef = await addDoc(collection(database, "items"), {
          id: randomCode,
          jumlah: 0,
        });
        console.log("Success with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    penjumlahan(id) {
      const index = this.arrayShopping.findIndex((item) => {
        return id === item.id;
      });
      this.arrayShopping[index].jumlah = this.arrayShopping[index].jumlah + 1;
      this.total = this.total + 1;
    },
    pengurangan(id) {
      const index = this.arrayShopping.findIndex((item) => {
        return id === item.id;
      });
      this.arrayShopping[index].jumlah = this.arrayShopping[index].jumlah - 1;
      this.total = this.total - 1;
    },
    hapus(id) {
      const index = this.arrayShopping.findIndex((item) => {
        return id === item.id;
      });
      this.total = this.total - this.arrayShopping[index].jumlah;
      const arrayDeleted = this.arrayShopping.filter((item) => item.id !== id);
      this.arrayShopping = arrayDeleted;
      // console.log(this.arrayShopping)
    },
  },
};
</script>

<style></style>
