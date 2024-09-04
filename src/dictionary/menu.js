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
            {
                id: 4,
                title: 'Perpetual',
                link: '/futures',
                meta: 'perpetual'
            },
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
        meta: 'buy',
        link: '/buy-crypto',
    },
    {
        id: 10,
        title: 'Earn',
        hasChild: false,
        meta: 'earn',
        hasChild: true,
        showChild: false,
        children: [
            {
                id: 16,
                title: 'Farms',
                link: '/liquidity/pools'
            },
            {
                id: 15,
                title: 'HAH Staking',
                link: '/hah-staking'
            },
            {
                id: 11,
                title: 'Pools',
                link: '/pools',
                meta: 'pools',
            },
            {
                id: 12,
                title: 'Position Managers',
                link: '/position-managers',
                meta: 'position-managers',
            },

            {
                id: 13,
                title: 'Liquid Staking',
                link: '/liquid-staking',
                meta: 'liquid-staking',
            },
            {
                id: 14,
                title: 'Simple Staking',
                link: '/simple-staking',
                meta: 'simple-staking',
            },

        ]
    },
    // {
    //     id: 15,
    //     title: 'Game',
    //     hasChild: false,
    //     meta: 'buy'
    // },
    // {
    //     id: 16,
    //     title: 'NFT',
    //     hasChild: false,
    //     meta: 'buy'
    // },
] 