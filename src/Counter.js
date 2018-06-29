//위 파일은 동적인 데이터를 다룰 때의 예시이다.
import React, {Component} from 'react';

class Counter extends Component{
    state={
        number:0, // 해당 방식은 class fields를 사용한것.
        foo:{
            foobar:2
        }
    }
    /*
    constructor사용도 가능하다.
    construcotr(props){
        super(props); //컨스트럭터는 기존의 클래스 생성자를 덮어 쓰므로 super로 미리 실행
        this.state={
            number:0
        }
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    }
    */

    //화살표 함수를 사용하면 bind를 사용하지 않아도 된다. this와의 연이 끊기는 것을 방지한다는데 
    //언어를 잘못 만든게 아닌가??? 머여 이게
    handleIncrease= () =>{
        this.setState({ // setState함수가 호출되면 리렌더링되도록 되어있음
            number: this.state.number+1,
            //객체 깊은 곳은 확인못하므로 다음과 같은 방식으로 바꾼다.
            foo:{
                ...this.state.foo,
                foobar:2
            }
        });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number-1
        });
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button> {/*괄호를 이용한 호출을 하면 안된다. 그러면 렌더링 할 때 마다 호출됨*/}
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}
export default Counter;


/*
Life Cycle Api 정리

prevProps, prevState, 

constructor 생성자

componentDidMount - 컴포넌트가 화면에 나타난 후 호출된다. D3나 masonry같은 외부 라이브러리를 연동하거나 
해당 컴포넌트에서 필요로하는 데이터 요청

컴포넌트 업데이트
 getDerivedStateFromProps()
 shouldComponentUpdate()
 getSnapshotBeforeUpdate()
 componentDidUpdate


 componentWillUnmount - 컴포넌트 제거

 componentDidCatch
*/