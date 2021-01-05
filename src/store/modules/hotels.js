export default {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Amara Resort & Spa',
                price: 4000,
                stars: 4,
                type: {
                    'ru': 'Гостиница'
                },
                rating: '8,5',
                imageUrl: require('@/assets/img/hotel-1.jpg')
            },
            {
                title: 'Desert Quail Inn',
                price: 3000,
                stars: 3,
                type: {
                    'ru': 'Мотель'
                },
                rating: '8,9',
                imageUrl: require('@/assets/img/hotel-2.jpg')
            },
            {
                title: 'Villas at Poco Diablo',
                price: 2000,
                stars: 2,
                type: {
                    'ru': 'Апартаменты'
                },
                rating: '9,2',
                imageUrl: require('@/assets/img/hotel-3.jpg')
            }
        ]
    },
    getters: {
        items: ({ items }) => items,
        count: ({ items }) => items.length
    }
}
