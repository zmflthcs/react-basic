import React, { Component } from 'react';

/*  class를 이용한 방식
class MyName extends Component {
  static defaultProps={
    name: '기본이름' // props가 없을 시 나타나는 props
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}
*/

//함수를 이용한 방식
const MyName= ({name})=>{
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
}

export default MyName;