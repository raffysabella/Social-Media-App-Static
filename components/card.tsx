import { Image, ImageProps, Text, TextProps, View, ViewProps } from "react-native";
import '../global.css';

const Card = ({ ...props }: ViewProps) => {
  return <View className=" p-3 rounded-md shadow-md " {...props} />;
};

const CardUserName = ({ ...props }: TextProps) => {
  return <Text className="text-blue-500 ml-2 font-semibold text-2xl" {...props} />;
};

const CardPfp = ({...props}: ImageProps) => {
    return <Image className="h-[48px] w-[48px] rounded-full" {...props}/>;
};

const CardDescription = ({ ...props }: TextProps) => {
  return <Text {...props} />;
};

export { Card, CardDescription, CardPfp, CardUserName };

