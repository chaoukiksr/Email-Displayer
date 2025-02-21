const {createApp} = Vue;
createApp({
   data(){

      return {
         result:[], // this array will hold the fetched items
         loading:true,
         isRefreshing:false
      }
   },
   methods:{
      async fetchEmails(){
         //here we are going to fetch the data from the server
         try {
            let response = await fetch('http://localhost:5000/displayAll', {
               method: 'GET'
            })
            let data = await response.json()
            let result = data.result
            this.result = result
         } catch (error) {
            console.error('error fetching the data', error)
         } finally {
            this.loading = false;
            this.isRefreshing = false;
         }
      },
      async refreshEmails(){
         this.isRefreshing=true;
         await this.fetchEmails();
      },
      formatDate(dateString) {
         return new Date(dateString).toLocaleString('fr-FR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
         });
      }
   },
   async created(){
      await this.fetchEmails()
   }
}).mount('#app')
