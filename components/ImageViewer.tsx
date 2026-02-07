import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

//props are parameters for a function
type Props = {
    imgSource: ImageSourcePropType; //imgSource: type of props
};

export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});
