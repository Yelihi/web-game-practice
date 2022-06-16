const React = require('react'); // 항상 가져와줘야 한다.
const { component } = React;


class WordRelay extends React.Component {
    state = {
        text: 'Hello webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    };
}









module.exports = WordRelay; // 요것도 붙여주자. 쪼갠 컴포넌트를 밖에서도 사용할 수 있게 해주는것.