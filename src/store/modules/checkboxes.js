export default {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Инфраструктура:',
                checkboxes: [
                    {
                        title: 'Бассейн',
                        checked: true
                    },
                    {
                        title: 'Парковка',
                        checked: false
                    },
                    {
                        title: 'Wi-Fi',
                        checked: false
                    }
                ]
            },
            {
                title: 'Тип жилья:',
                checkboxes: [
                    {
                        title: 'Гостиница',
                        checked: false
                    },
                    {
                        title: 'Мотель',
                        checked: false
                    },
                    {
                        title: 'Апартаменты',
                        checked: false
                    }
                ]
            }
        ]
    },
    mutations: {
        setCheckboxChecked(state, payload) {
            state.items[payload.index].checkboxes[payload.payload.index].checked = payload.payload.data
        }
    },
    getters: {
        items: ({ items }) => items
    }
}
