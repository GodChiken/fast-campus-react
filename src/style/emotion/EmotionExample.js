// 다음 명령어로 설치 npm install --save emotion
import { css } from 'emotion';
import React from 'react';

const color = 'darkgreen';

export default function EmotionExample() {
    return <div
        className={css({
            backgroundColor: 'hotpink',
            '&:hover': {
                color
            }
        })}
    >
        This has a hotpink background.
    </div>
}