
const app = new Vue(
    {
        el: '#list',
        data: {
            mailLIst: [],
         
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((rest) => {
                        this.email = rest.data.response;

                        this.mailLIst.push(this.email);
                    });
            }

        },
    }
);