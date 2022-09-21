export const adminMenu = [
    {   //quản lý người dùng
        name: 'menu.admin.users',
        menus: [
            { name: 'menu.admin.crud', link: '/system/users-manage' },
            { name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            { name: 'menu.admin.manage-seller', link: '/system/user-seller' },
            { name: 'menu.admin.manage-manager', link: '/system/user-admin' }
        ],
    },

    //quản lý sản phẩm
    {
        name: 'menu.admin.products',
        menus: [
            { name: 'menu.admin.manage-products', link: 'system/products-manage' },
            { name: 'menu.admin.manage-product-types', link: 'system/product-types-manage' },
        ],
    },

    //quản lý thương hiệu
    {
        name: 'menu.admin.brands',
        menus: [
            { name: 'menu.admin.manage-brands', link: 'system/brands-manage' },
        ],
    },

    //quản lý bài viết
    {
        name: 'menu.admin.blogs',
        menus: [
            { name: 'menu.admin.manage-blogs', link: 'system/blogs-manage' },
        ],
    },

    //quản lý đơn hàng
    {
        name: 'menu.admin.orders',
        menus: [
            { name: 'menu.admin.manage-orders', link: 'system/orders-manage' },
            { name: 'menu.admin.manage-order-details', link: 'system/order-details-manage' },
        ],
    },
];