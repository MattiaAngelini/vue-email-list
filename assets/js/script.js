const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
            
        };
    },
    methods: {
        get10Mails() {
            for(i = 0; i < 10; i++){
                this.getMailFromApi();
            }
        },
      
        getMailFromApi() {
            // Chiamo l'api che genera una mail
            // quando otteniamo la risposta: popoliamo la variabile mails con
            // mail random ottenuta da API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const serverMail = response.data;
                //pusho mail trovata in Api nell'array vuoto creato.
                this.mails.push(serverMail.response);              
            });
        },
        
    },
    mounted() {
        this.get10Mails(); 
    },
}).mount('#app');
