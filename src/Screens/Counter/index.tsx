import React from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number;
} 

interface State {
    count: number;
}

class Counter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        console.log('constructor');

        this.state = {
            count: props.initValue,
        }
    }

    render() {
        const { title } = this.props;
        const { count } = this.state;
        return (
            <Container>
                {
                    title && (
                        <TitleContainer>
                            <TitleLabel>
                                {title}
                            </TitleLabel>
                        </TitleContainer>
                    )
                }
                <CountContainer>
                    <CountLabel> { count } </CountLabel>
                </CountContainer>
                <ButtonContainer>
                    <Button iconName="plus" onPress={() => this.setState({count: count + 1})} />
                    <Button iconName="minus" onPress={() => this.setState({count: count - 1})} />
                </ButtonContainer>
            </Container>
        );
    }
    //라이프 사이클 함수
    //부모로부터 받은 Props 로 State에 값을 설정
    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        console.log('getDerivedStateFromProps');
    }
}

export default Counter;