import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputAffix = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
  );
};

export default TextInputAffix;