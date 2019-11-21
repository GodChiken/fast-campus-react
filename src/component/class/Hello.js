import React, {Component} from 'react'

export default class Hello extends Component {
    render() {
        const {color,name,isSpecial} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}
Hello.defaultProps = {
    name: '이름 없음'
};