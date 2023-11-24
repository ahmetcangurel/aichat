import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

//styles
import styles from './NativePicker.Style';

//data
import RegionCodes from '../../assets/region/RegionCodes';

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

  return (
    <SelectList
      setSelected={(val: string) => {
        console.log('Selected: ', val);
        setItem(val);
        setValue(val);
      }}
      save="key"
      data={RegionCodes.map((item: any) => {
        return {
          key: item.dial_code,
          value: `${item.name} ${item.dial_code}`,
        };
      })}
      searchPlaceholder={searchPlaceholder ? searchPlaceholder : 'Search...'}
      placeholder={placeholder ? placeholder : 'Select...'}
      notFoundText={notFoundText ? notFoundText : 'Not Found'}
      boxStyles={Style.boxStyles}
    />
  );
};

export default NativePicker;
