<template>
  <div class="shopping" style="margin-left: 600px; margin-right: 600px">
    <form @submit.prevent="addShopp">
    <button class="mx-1 mt-2 bg-purple4 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" type="submit" value="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
    <br />
    <div><input type="text" class="w-max p-1 mt-2 text-center border-purple5" v-model="keterangan" placeholder="1234566" />{{arrayShopping.keterangan}}</div>
    <!--Jumlah-->
    <button class="mx-1 mt-2 bg-purple5 hover:bg-purple2 text-white font-bold py-2 px-4 rounded">{{ jumlah }}</button>
    <div>item</div>
    <!--Jumlah-->
    <button class="mx-1 mt-2 bg-purple5 hover:bg-purple2 text-white font-bold py-2 px-4 rounded">{{ jumlah }}</button>
    <!--Tambah-->
    <button class="mx-1 mt-2 bg-purple4 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="tambahPesanan(arrayShopping)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </button>
    <!--Kurang-->
    <button class="mx-1 mt-2 bg-purple5 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="kurangPesanan(arrayShopping)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
    <!--Delete-->
    <button class="mx-1 mt-2 bg-red-500 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="hapusPesanan(arrayShopping)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
  </form>
    <!--Banyak Pesanan-->
    <ul>
      <li class="text-lg" v-for="arrayShopping in arrayShopping" v-bind:key="arrayShopping.jumlah">
        <p class="text-center -ml-20 text-lg"> {{arrayShopping.keterangan}}</p>
       <!--Jumlah-->
    <button class="mx-1 mt-2 bg-purple5 hover:bg-purple2 text-white font-bold py-2 px-4 rounded">{{ jumlah }}</button>
        <!--Tambah-->
    <button class="mx-1 mt-2 bg-purple4 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="tambahPesanan(arrayShopping)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </button>
    <!--Kurang-->
    <button class="mx-1 mt-2 bg-purple5 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="kurangPesanan(arrayShopping)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
    <!--Delete-->
    <button class="mx-1 mt-2 bg-red-500 hover:bg-purple2 text-white font-bold py-2 px-4 rounded" @click="hapusPesanan(arrayShopping.id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, where, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5iy0fdXeQoVvedq8APCW2eVt8MailuAA",
  authDomain: "shopp-app-b2b94.firebaseapp.com",
  projectId: "shopp-app-b2b94",
  storageBucket: "shopp-app-b2b94.appspot.com",
  messagingSenderId: "139605541996",
  appId: "1:139605541996:web:fdbcee58162ef53694c449",
  measurementId: "G-XH00CV6D02"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  name: 'Shopping',
  components: {},
  data() {
    return {
      jumlah: 0,
      arrayShopping: [],
      keterangan:'',
    };
  },
  
  methods: {
    tambahPesanan(){
      this.arrayShopping.push({
        keterangan:this.keterangan,
      });
    },
    kurangPesanan(){
      
    },
    hapusPesanan(arrayShopping){
      const index = this.arrayShopping.indexOf(arrayShopping);
      if (index > -1) {
        this.arrayShopping.splice(index, 1);
    }
  },
}};
</script>

<style></style>
