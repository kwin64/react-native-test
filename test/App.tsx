import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<ActivityIndicator
				size='small'
				color='#0000ff'
			/>
			<Button
				title='Press me'
				onPress={() => Alert.alert('Simple Button pressed')}
			/>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
