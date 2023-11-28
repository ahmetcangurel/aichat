import {BaseToastProps} from 'react-native-toast-message';
import {DefaultTheme} from '../../theme/colors';
import CustomToast from './CustomToast';

const ToastConfig = {
  success: (props: BaseToastProps) => (
    <CustomToast
      backgroundColor={DefaultTheme.success.main}
      title={props.text1}
      description={props.text2}
      onPress={() => console.log('Success Toast Pressed!')}
    />
  ),
  warning: (props: BaseToastProps) => (
    <CustomToast
      backgroundColor={DefaultTheme.warning.main}
      title={props.text1}
      description={props.text2}
      onPress={() => console.log('Warning Toast Pressed!')}
    />
  ),
  error: (props: BaseToastProps) => (
    <CustomToast
      backgroundColor={DefaultTheme.error.main}
      title={props.text1}
      description={props.text2}
      onPress={() => console.log('Error Toast Pressed!')}
    />
  ),
};

export default ToastConfig;
