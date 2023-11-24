//Select List: Search Placeholder rengi değiştirilemiyor. - node_modules dizininden güncellenmesi gerekiyor.
//eklenen prop: searchPlaceholderTextColor, bu prop sadece placeholder rengini değiştiriyor.
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

//styles
import {useTheme} from '../../theme/ThemeProvider';
import styles from './NativePicker.Style';

//
import RegionCodes from '../../assets/region/RegionCodes';
import SvgX from '../icons/X';
import SvgSearch from '../icons/Search';
import SvgArrowRight from '../icons/ArrowRight';

type InputProps = {
  setValue: (e: string) => void;
  placeholder: string;
  searchPlaceholder?: string;
  notFoundText?: string;
};

const NativePicker = ({
  setValue,
  placeholder,
  searchPlaceholder,
  notFoundText,
}: InputProps) => {
  const [item, setItem] = useState<string>('');
  const Style = styles();
  const {colors} = useTheme();

  return (
    <SelectList
      setSelected={(val: string) => {
        console.log('Selected: ', val);
        setItem(val);
        setValue(val);
      }}
      data={RegionCodes.map((item: any) => {
        return {
          key: item.dial_code,
          value: `${item.name} ${item.dial_code}`,
        };
      })}
      save="key"
      //placeholder
      searchPlaceholder={searchPlaceholder ? searchPlaceholder : 'Search...'}
      placeholder={placeholder ? placeholder : 'Select...'}
      notFoundText={notFoundText ? notFoundText : 'Not Found'}
      //styles
      boxStyles={Style.boxStyles}
      inputStyles={Style.inputStyles}
      dropdownTextStyles={Style.dropdownTextStyles}
      searchPlaceholderTextColor={colors.text.disabled}
      //icons
      closeicon={<SvgX width={16} height={16} color={colors.text.primary} />}
      searchicon={
        <SvgSearch width={16} height={16} color={colors.text.primary} />
      }
      arrowicon={
        <SvgArrowRight width={16} height={16} color={colors.text.primary} />
      }
    />
  );
};

export default NativePicker;
