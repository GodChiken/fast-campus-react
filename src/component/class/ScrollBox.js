import React, { Component } from "react";
import "../../css/ScrollBox.css";

class ScrollBox extends Component {
    id = 2;
    state = { array: [1] };

    handleInsert = () => {
        this.setState({ array: [this.id++, ...this.state.array] });
    };

    /*
        DOM 업데이트가 일어나기 직전의 시점.
        새 데이터가 상단에 추가되어도 스크롤바를 유지하는 기능을 구현.
        scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
        scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
        이미 구현이 되어있다면 처리하지 않도록 하기 위함.
        이곳에서 리턴 되는 데이터는 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.array !== this.state.array) {
            const { scrollTop, scrollHeight } = this.list;
            return { scrollTop, scrollHeight };
        }
    }
    // 브라우저마다 scrollTop 이 구현된 것도 존재하기 때문에 기능이 이미 구현되어있다면 처리하지 않습니다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            const { scrollTop } = this.list;
            if (scrollTop !== snapshot.scrollTop) return;
            const diff = this.list.scrollHeight - snapshot.scrollHeight;
            this.list.scrollTop += diff;
        }
    }

    render() {
        const rows = this.state.array.map(number => (
            <div className="row" key={number}>
                {number}
            </div>
        ));

        return (
            <div>
                <div
                    ref={ ref => { this.list = ref; }}
                    className="list"
                >
                    {rows}
                </div>
                <button onClick={this.handleInsert}>Click Me</button>
            </div>
        );
    }
}

export default ScrollBox;