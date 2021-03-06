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
            return 'img/avatar' + valore + '.jpg';
        },

        getLastMessage(contact) {

            const messages = contact.messages;
            if (messages.length > 0) {
                return messages[messages.length - 1].message;
            } else {
                return '';
            }
            // const messages = contact.messages;
            // const lastMessage = [messages.length - 1].message;
            // console.log(lastMessage)
            // return lastMessage

            // const messages = contact.messages;
            // const lastMessage = (messages.length > 0) ? messages[messages.length - 1].message : '';
            // console.log(lastMessage);
            // return lastMessage;
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
                element.visible = nomi.includes(this.search.toLowerCase());
            })
        }
    }
})