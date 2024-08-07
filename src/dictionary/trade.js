export const tradeMenuItems = [
    {
        id: 1,
        title: 'Swap',
        link: '/swap'
    },
    {
        id: 2,
        title: 'Liquidity',
        link: '/liquidity'
    },
    {
        id: 3,
        title: 'Perpetual',
        link: '/futures'
    },
    {
        id: 4,
        title: 'Options',
        link: '/stryke'
    },
    {
        id: 5,
        title: 'Bridge',
        link: '/buy-crypto'
    },
    // {
    //     id: 6,
    //     title: 'Limit(Deprecated)',
    //     link: '/limit-orders'
    // },
    // {
    //     id: 7,
    //     title: 'Trading Reward',
    //     link: '/swap'
    // }
]
export const swapStateItems = [
    {
        id: 1,
        title: 'MARKET',
        link: '/swap'
    },
    {
        id: 2,
        title: 'TWAP',
        link: '/swap/twap'
    },
    {
        id: 3,
        title: 'LIMIT',
        link: '/swap/limit'
    }
]
export const swapOperateItems = [
    {
        id: 1,
        icon: 'icon-money'
    },
    {
        id: 2,
        icon: 'icon-tongji'
    },
    {
        id: 3,
        icon: 'icon-fire'
    },
    {
        id: 4,
        icon: 'icon-setting'
    },
    {
        id: 5,
        icon: 'icon-zuijinde'
    },
    {
        id: 6,
        icon: 'icon-shuaxin'
    },
]
export const statisticsTimeItems = [
    {
        id: 1,
        title: '24H'
    },
    {
        id: 2,
        title: '1W'
    },
    {
        id: 3,
        title: '1M'
    },
    {
        id: 4,
        title: '1Y'
    },
]
export const fireTypeItems = [
    {
        id: 1,
        title: 'Price Change'
    },
    {
        id: 2,
        title: 'Volume(24H)'
    },
]
export const fireFilterItems = [
    {
        id: 1,
        title: 'PRICE'
    },
    {
        id: 2,
        title: 'CHANGE'
    }
]
export const tokenList = [
    {
        id: 1,
        title: 'Radio Caca V2(RACA)',
        price: '$0.000028',
        amp: '10.87%',
        type: 'Trade'
    },
    {
        id: 2,
        title: 'Radio Caca V2(RACA)',
        price: '$0.000028',
        amp: '10.87%',
        type: 'Trade'
    },
    {
        id: 3,
        title: 'Radio Caca V2(RACA)',
        price: '$0.000028',
        amp: '10.87%',
        type: 'Trade'
    },
    {
        id: 4,
        title: 'Radio Caca V2(RACA)',
        price: '$0.000028',
        amp: '10.87%',
        type: 'Trade'
    },
]
export const liquidityTypeItems = [
    {
        id: 1,
        title: 'ALL',
    },
    {
        id: 2,
        title: 'V3',
    },
    {
        id: 3,
        title: 'Stableswap',
    },
]

export const liquidityOperateItems = [
    {
        id: 1,
        icon: 'icon-jisuanqi'
    },
    {
        id: 2,
        icon: 'icon-zuijinde'
    },
    {
        id: 3,
        icon: 'icon-setting'
    }
]

export const tokenPair = [
    {
        id: 1,
        title: 'USD3',
        pick: '96%',
        feeTier: '0.25%',
        showMore: false,
        img: 'https://www.3at.org/images/logo.png',
        pointItems: [
            {
                point: '0.01',
                pick: '86'
            },
            {
                point: '0.05',
                pick: '32'
            },
            {
                point: '0.25',
                pick: '6'
            },
            {
                point: '1',
                pick: '65'
            },
        ]

    },
    {
        id: 2,
        title: 'ETH',
        pick: '96%',
        feeTier: '0.25%',
        showMore: false,
        img: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg',
        pointItems: [
            {
                point: '0.01',
                pick: '86'
            },
            {
                point: '0.05',
                pick: '32'
            },
            {
                point: '0.25',
                pick: '6'
            },
            {
                point: '1',
                pick: '65'
            },
        ]

    },

]

export const liquidityTokenInfoItems = [
    {
        id: 1,
        title: 'Gas on destiantion',
        content: 'Add'
    },
    {
        id: 2,
        title: 'You will receive',
        content: '35 HAH'
    },
    {
        id: 3,
        title: 'Fee',
        content: '0.34 USD'
    },
    {
        id: 4,
        title: 'Slippage tolerance',
        content: '0.50%'
    }
]

export const providerItems = [
    {
        id: 1,
        title: 'Mercuryo',
        imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/klEQVR4AcXQEXTDABAG4M9lXIfQOFqXvleulyujYblQDMSC0cAoGJtVwtFYKHDbXpK85a2+T+/d/XfnHyW37Jp6rhnKrOr7qye6Auw/hz1IB6tbbXaIDI5hcRquB4tHg2sk4OXRN33Vju2SV7V8xDsYLy4fONZRAuXDGA24cM+BPO6gbiNiZ5JlZk2fQHyrTW6FxTneKOPHCUyZi744xyQB+xarNmZjAkZWeaxG0KVrZhe/eEWRweu56GNDjn2H+MsA03nHrIsN9Tvupcmh3RSTEcLittm2KlDmFqeYDTtEirA6z307OA7IK7Z/OADFJ8bU6ufcyqwpOfXbwfAFLNz2XLy7Vj8AAAAASUVORK5CYII=',
        price: '0.244',
        amp: '-1.280'
    },
    {
        id: 2,
        title: 'Transak',
        imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEwzi+4wiO0vhuwuhOsne+cgceU0i+0xiOwtg+onfOciduQtg+sdcOIQW9oRXNoZad8VZNwSXtoOV9cLeegBZN4PWdnv8/z////1+P41bNw0jO9Gg+YAUdcOWNk0jO40i+4VY91/aAhiAAAAInRSTlMAUo+2ylIh//////+f/5fr////////vf////9S//9RylJRl5qpAwAAAQFJREFUeAFl0gUWg0AMBNDg7rZb7/0v2QmBDYWp978IQhrPD8Iw8CO6JA6SNM2yLM/zIoj/rUwSQVhRVfXRQFpYIc3ZtLBt204NOVm/1ZZqgrCuH2q2+FoI64chBgabjaMUTlPHhcMw68RxMVJozW1CIUJ03wuNeYgZc3sOnBf5YoJiu9YUMGIaIxvUbjrTGzha81iR/8YTHw55GZMBF7yewMFaQbka0g42MT6fMEafMc8Bhq1jBMlCHy4UhbVHfBHt582u1j0Xw8bh07fhNMlJfe42A+PT1XCJCSmBzhRrEHJANXejqCmSC5sUap2mBIrpPE08a9M5pku+9YzUL3L5AZgBJtOznhgMAAAAAElFTkSuQmCC',
        price: '0.244',
        amp: '-1.280'
    },
    {
        id: 3,
        title: 'MoonPay',
        imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX///+7kP+kZ//Tt/+hX/9wAP94AP///P99AP+HIf/p2v+vev+POf+ONP+obv/gzP/t4f+0gv+jY/+5i//x5/++lf/Env/48f/Jp/+h5VjdAAAAcklEQVR4AdXMtRHAQBAEwRPsihnzT1TMD77G7aqRv+e4ntF8ECYNEIZ0xVDEEI58ipM0ywuRMoL/tQoMQ6Jez19rEG5x1U8twiMUCnY8kbmC+YVhZsNUwf5CJgoOOBGxKI04rFJtVS6hEW1Dn+ddK/9tBlQVBSPChPAYAAAAAElFTkSuQmCC',
        price: '0.244',
        amp: '-1.280'
    },

]
export const FAQItems = [
    {
        id: 1,
        title: "Why can't I see my bitcoin purchase",
        content: "Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.",
        showMore: false
    },
    {
        id: 2,
        title: "Why can’t I see quotes from providers?",
        content: "Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.",
        showMore: false
    },
    {
        id: 3,
        title: "Why can't I see my bitcoin purchase",
        content: "Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.",
        showMore: false
    },
    {
        id: 4,
        title: "Why can't I see my bitcoin purchase",
        content: "Transfers through the Bitcoin network may take longer due to network congestion. Please check your BTC address again after a few hours.",
        showMore: false
    },
]
export const settingTranSpeedItmes = [
    {
        id: 1,
        title: 'Default',
    },
    {
        id: 2,
        title: 'Standard(1)',
    },
    {
        id: 3,
        title: 'Fast(4)',
    },
    {
        id: 4,
        title: 'Instant(5)',
    }
]
export const slippageTolerance = [
    {
        id: 1,
        title: '0.1%'
    },
    {
        id: 2,
        title: '0.5%'
    },
    {
        id: 3,
        title: '1.0%'
    },

]
export const settingOptions = [
    {
        id: 1,
        title: 'Tx deadline(mins)',
        type: 'edit'
    },
    {
        id: 2,
        title: 'Expert Mode',
        type: 'switch'
    },
    {
        id: 3,
        title: 'Flippy sounds',
        type: 'switch'
    },
    {
        id: 4,
        title: 'Fast routing(BETA)',
        type: 'switch'
    },
]

export const liquiditypSourceItems = [
    {
        id: 1,
        title: 'EX.zone V3',
    },
    {
        id: 2,
        title: 'EX.zone V2',
    },
    {
        id: 3,
        title: 'EX.zone StableSwap',
    },
    {
        id: 4,
        title: 'EX.zone MM Linked Pool',
    },
]

export const routingPreferenceItems = [
    {
        id: 1,
        title: 'Allow Multihops'
    },
    {
        id: 2,
        title: 'Allow Multihops'
    }
]