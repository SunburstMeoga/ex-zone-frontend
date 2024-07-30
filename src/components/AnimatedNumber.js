import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ number }) => {
    const [prevNumber, setPrevNumber] = useState(number);
    const { animatedNumber } = useSpring({
        animatedNumber: number,
        from: { animatedNumber: prevNumber },
        config: { duration: 1000 },
        onRest: () => setPrevNumber(number),
    });

    return (
        <animated.span>
            {animatedNumber.to((n) => Math.floor(n).toLocaleString())}
        </animated.span>
    );
};

export default AnimatedNumber;
