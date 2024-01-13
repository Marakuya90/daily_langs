export interface IFilterLevel {
    name: string,
    icon: string,
    check: boolean
}

export interface IFilterSkills {
    name: string,
    icon: string
}

export interface ICourse {
    title: string,
    level: string,
    speaker: string,
    price: number,
    old_price: number,
    currency: string,
    sale: string,
    icon: string,
    img: string,
    background: string
}

export const LEVEL_DATA: IFilterLevel[] = [{
    name: 'Для всех',
    icon: 'mynaui:circle',
    check: true
},
    {
        name: 'Для начинающих',
        icon: 'mynaui:circle',
        check: false
    },
    {
        name: 'Продвинутый уровень',
        icon: 'mynaui:circle',
        check: false
    },
]

export const SKILLS_DATA: IFilterSkills[] = [{
    name: 'Грамматика',
    icon: 'material-symbols-light:square-outline'
}, {
    name: 'Лексика',
    icon: 'material-symbols-light:square-outline'
}, {
    name: 'Синтаксис',
    icon: 'material-symbols-light:square-outline'
}, {
    name: 'Фонетика',
    icon: 'material-symbols-light:square-outline'
}, {
    name: 'Пунктуация',
    icon: 'material-symbols-light:square-outline'
}]

export const CARD_DATA: ICourse[] = [{
    title: 'Английский шаг за шагом:',
    level: 'Базовый уровень',
    speaker: 'Полина Коваленко',
    price: 2940,
    old_price: 6000,
    currency: '&#8381;',
    sale: '-51%',
    icon: '/english-flag.svg',
    img: '/girl1',
    background: '/A-Z.svg'
},
    {
        title: 'Английский шаг за шагом:',
        level: 'Базовый уровень',
        speaker: 'Полина Коваленко',
        price: 2940,
        old_price: 6000,
        currency: '&#8381;',
        sale: '-51%',
        icon: '/english-flag.svg',
        img: '/girl1',
        background: '/A-Z.svg'
    },
    {
        title: 'Английский шаг за шагом:',
        level: 'Базовый уровень',
        speaker: 'Полина Коваленко',
        price: 2940,
        old_price: 6000,
        currency: '&#8381;',
        sale: '-51%',
        icon: '/english-flag.svg',
        img: '/girl1',
        background: '/A-Z.svg'
    },
    {
        title: 'Английский шаг за шагом:',
        level: 'Базовый уровень',
        speaker: 'Полина Коваленко',
        price: 2940,
        old_price: 6000,
        currency: '&#8381;',
        sale: '-51%',
        icon: '/english-flag.svg',
        img: '/girl1',
        background: '/A-Z.svg'
    }
]