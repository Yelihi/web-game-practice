const React = require("react"); // 항상 가져와줘야 한다.
const { component } = React;

class WordRelay extends React.Component {
  state = {
    word: "바나나",
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
      this.setState({
        result: '딩동댕',
        word : this.state.value,
        value : '',
      });
      this.input.focus();
    }else {
      this.setState({
        result: "땡",
        value: '',
      });
      this.input.focus();
    }
  }

  onRefInput = (c) => {
    this.input = c;
  }

  onChange = (e) => {
    this.setState({ value : e.target.value });
  }

  render() {
    return (
      <>
        <h1>{this.state.word}</h1>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange} />
          <button>클릭</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay; // 요것도 붙여주자. 쪼갠 컴포넌트를 밖에서도 사용할 수 있게 해주는것.
