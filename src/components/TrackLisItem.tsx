import { Text, StyleSheet, View, Image} from "react-native";
import { Track } from "../types";


type TrackListItemProps = {
    track: Track;
};

export default function TrackListItem({ track }: TrackListItemProps) {
    return (
    <View style={styles.container}>
    <Image 
    source={{ uri: track.album.images[0]?.url }} 
    style={styles.image}
    />
    <View>
    <Text style={styles.title}>{track.name}</Text>
    <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
    </View>
    </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 5, 
        alignItems: 'center',
    },

    title: {
        color: 'Black',
        fontWeight: '500',
        fontSize: 16,
    },

    subtitle: {
        color: 'black',
    },
    image: {
        width:50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10,
    }
    
});
