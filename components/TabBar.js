import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
  background-color: white;
`;

const Tab = styled.Pressable`
  flex: 1;
`;

const Label = styled.Text`
  color: ${props =>
    props.isFocused ? props.theme.colors.textColor : 'lightgray'};
  font-weight: bold;
  text-align: center;
`;

const Line = styled.View`
  margin-top: 10px;
  border: 2px solid
    ${props => (props.isFocused ? props.theme.colors.textColor : 'lightgray')};
`;

export default function ReviewTabBar({state, navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Container>
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <Tab onPress={onPress} key={`tab_${index}`}>
              <Label isFocused={isFocused}>{label}</Label>
              <Line isFocused={isFocused} />
            </Tab>
          );
        })}
      </Container>
    </SafeAreaView>
  );
}
