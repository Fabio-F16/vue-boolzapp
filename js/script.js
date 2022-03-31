console.log(contacts);
console.log('js ok');


const app = new Vue({

    el: '#root',
    data: {
        contacts,
        contactClicked: undefined,
        newMessage: '',
        search: '',
        array: ['']


    },
    methods: {

        getImgAvatar(valore) {
            return 'img/avatar' + valore + '.jpg'
        },

        setContactClicked(i) {
            this.contactClicked = i;
            // console.log('click');
        },

        typeOfMessage(status) {
            if (status === 'sent') {
                return 'send'
            } else {
                return 'received'
            }
        },

        sendMessage() {
            const newMessageToSend = {
                date: '',
                message: '',
                status: 'sent'
            };

            newMessageToSend.message = this.newMessage;
            this.contacts[this.contactClicked].messages.push(newMessageToSend);

            this.newMessage = '';

            setTimeout(() => {

                const newMessageReceived = {
                    date: '',
                    message: '',
                    status: 'received'
                };

                newMessageReceived.message = 'I love you';
                this.contacts[this.contactClicked].messages.push(newMessageReceived);

            }, 1000)
        },

        contactSearch() {
            this.contacts.forEach(element => {
                const nomi = element.name.toLowerCase();
                element.visible = nomi.includes(this.search);
            });
        }
    }
})