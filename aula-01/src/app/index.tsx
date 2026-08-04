import { Ionicons } from '@expo/vector-icons';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View style={styles.outerWrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>

          {/* Header com avatar e dados da conta */}
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={28} color="#FF6600" />
            </View>
            <View>
              <Text style={styles.helloText}>Olá, Enriko</Text>
              <Text style={styles.accountText}>agência ••63  conta •••13-</Text>
            </View>
            <Ionicons name="chevron-down" size={22} color="#fff" style={{ marginLeft: 'auto' }} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#1a1a1a' : '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    width: Platform.OS === 'web' ? 390 : '100%',
    maxHeight: Platform.OS === 'web' ? 844 : '100%',
    borderRadius: Platform.OS === 'web' ? 32 : 0,
    overflow: 'hidden',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  helloText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountText: {
    color: '#ffe0c2',
    fontSize: 13,
  },
});