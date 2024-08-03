import { action, fetature, name, status, category } from "../../Constant"

export const categoryData = [
    {
        id: 1,
        title: 'HTML5',
        feature: true,
        status: false,
      
    },
    {
        id: 2,
        title: 'PHP Script',
        feature: false,
        status: true,
    },
    {
        id: 3,
        title: 'Flutter',
        feature: false,
        status: false,
      
    },
    {
        id: 4,
        title: 'WordPress',
        feature: true,
        status: false,
      
    },
    {
        id: 5,
        title: 'User Interface',
        feature: false,
        status: true,
    }
]

export const subCategoryData = [
    {
        id: 1,
        title: 'E-Commerce',
        categoryName: 'PHP Script',
        status: true,
    },
    {
        id: 2,
        title: 'Listing',
        categoryName: 'PHP Script',
        status: false,
    },
    {
        id: 3,
        title: 'Forum',
        categoryName: 'PHP Script',
        status: true,
    },
    {
        id: 4,
        title: 'Help & Support',
        categoryName: 'HTML5',
        status: false,
    },
    {
        id: 5,
        title: 'Template',
        categoryName: 'HTML5',
        status: true,
    },
    {
        id: 6,
        title: 'Plugin',
        categoryName: 'Flutter',
        status: false,
    },
    {
        id: 7,
        title: 'App',
        categoryName: 'Flutter',
        status: true,
    }
]

export const ReviewData = [
    {
        id: 1,
        title: 'Code Quality',
        status: false,
    },
    {
        id: 2,
        title: 'Customer Support',
        status: true,
    },
    {
        id: 3,
        title: 'Design Quality',
        status: false,
    },
    {
        id: 4,
        title: 'Feature Availability',
        status: false,
    },
    {
        id: 5,
        title: 'Bug',
        status: true,
    }
]


export const categoryHeading = [name,fetature, status , action]
export const subCategoryHeading = [name, category, status, action]
export const reviewHeading = [name, status, action]