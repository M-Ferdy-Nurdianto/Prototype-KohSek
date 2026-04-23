document.addEventListener('alpine:init', () => {
    Alpine.data('kohiApp', () => ({
        members: [
            {
                id: 1,
                name: 'Arie',
                role: 'Leader',
                description: 'The warm heart of Kohi Sekai. Her voice is as soothing as a morning latte.',
                image: 'img/member_arie.png',
                instagram: '@arie_kohi',
                twitter: '@arie_kohi'
            },
            {
                id: 2,
                name: 'Luna',
                role: 'Vocal',
                description: 'The mysterious elegance of the group. A deep voice with a cool personality.',
                image: 'img/member_luna.png',
                instagram: '@luna_kohi',
                twitter: '@luna_kohi'
            },
            {
                id: 3,
                name: 'Hana',
                role: 'Performance',
                description: 'A burst of energy in every step. Bright, cute, and full of sunshine.',
                image: 'img/member_hana.png',
                instagram: '@hana_kohi',
                twitter: '@hana_kohi'
            }
        ],
        events: [
            {
                id: 1,
                title: 'Espresso Morning Session',
                date: '24 April 2026',
                time: '10:00 AM',
                location: 'Kohi Cafe, Yogyakarta',
                price: 'Rp 50.000'
            },
            {
                id: 2,
                title: 'Creamy Sunset Concert',
                date: '30 April 2026',
                time: '05:00 PM',
                location: 'Jogja Expo Center',
                price: 'Rp 75.000'
            }
        ],
        chekiTickets: [
            {
                id: 1,
                member: 'Arie',
                type: 'Digital Cheki',
                price: 35000,
                stock: 15,
                image: 'img/member_arie.png'
            },
            {
                id: 2,
                member: 'Luna',
                type: 'Digital Cheki',
                price: 35000,
                stock: 8,
                image: 'img/member_luna.png'
            },
            {
                id: 3,
                member: 'Hana',
                type: 'Digital Cheki',
                price: 35000,
                stock: 20,
                image: 'img/member_hana.png'
            }
        ],
        isModalOpen: false,
        selectedTicket: null,
        successMessage: false,
        formData: {
            name: '',
            contact: ''
        },

        openBuyModal(ticket) {
            this.selectedTicket = ticket;
            this.isModalOpen = true;
        },

        submitForm() {
            // Fake success flow
            this.successMessage = true;
            setTimeout(() => {
                this.isModalOpen = false;
                this.successMessage = false;
                this.formData = { name: '', contact: '' };
            }, 3000);
        }
    }));
});
