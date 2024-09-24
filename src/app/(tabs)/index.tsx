import { StyleSheet, FlatList } from 'react-native';
import TrackListItem from '../../components/TrackLisItem';
import { Text, View } from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks';

export default function HomeScreen() {
  return (

       <FlatList data={tracks} 
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator= {false}
      /> 
  );
}