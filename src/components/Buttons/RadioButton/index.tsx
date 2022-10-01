import React from 'react';
import {Box} from 'native-base';

type Props = {
  selected?: boolean;
};
const RadioButton = ({selected}: Props) => {
  return (
    <Box
      height="14px"
      width="14px"
      borderWidth="1px"
      borderColor={selected ? 'primary.shade1' : 'secondary.shade3'}
      borderRadius="50px"
      alignItems="center"
      justifyContent="center">
      {selected && (
        <Box
          height="6px"
          width="6px"
          backgroundColor={selected ? 'primary.shade1' : 'secondary.shade3'}
          borderRadius="50px"
        />
      )}
    </Box>
  );
};
export default RadioButton;
