export const pageMenuItems = [
    {
        title: 'Trade',
        hasChild: true,
        showChild: false,
        meta: 'trade',
        id: 1,
        children: [
            {
                id: 2,
                title: 'Swap',
                link: '/swap',
                meta: 'swap',
            },
            {
                id: 3,
                title: 'Liquidity',
                link: '/liquidity',
                meta: 'liquidity'
            },
            // {
            //     id: 4,
            //     title: 'Perpetual',
            //     link: '/perpetual',
            //     meta: 'perpetual'
            // },
            {
                id: 5,
                title: 'Options',
                link: '/stryke',
                meta: 'options'
            },
            {
                id: 6,
                title: 'Bridge',
                link: '/buy-crypto',
                meta: 'bridge'
            },
            // {
            //     id: 7,
            //     title: 'Limit (Deprecated)',
            //     link: 'limit',
            //     meta: 'limit'
            // },
            // {
            //     id: 8,
            //     title: 'Trading Reward',
            //     link: 'trading-reward',
            //     meta: 'trading-reward'
            // },
        ]
    },
    {
        id: 9,
        title: 'Buy',
        hasChild: false,
        meta: 'buy'
    },
    {
        id: 10,
        title: 'Earn',
        hasChild: false,
        meta: 'earn'
    },
    {
        id: 11,
        title: 'Game',
        hasChild: false,
        meta: 'buy'
    },
    {
        id: 12,
        title: 'NFT',
        hasChild: false,
        meta: 'buy'
    },
] 