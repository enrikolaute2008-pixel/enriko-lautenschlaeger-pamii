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
              <Text style={styles.helloText}>Olá, joãozinho</Text>
              <Text style={styles.accountText}>agência ••63  conta •••13-</Text>
            </View>
            <Ionicons name="chevron-down" size={22} color="#fff" style={{ marginLeft: 'auto' }} />
          </View>

          {/* Card grande com cadeado */}
          <View style={styles.lockCard}>
            <Ionicons name="lock-closed" size={26} color="#fff" />
            <Text style={styles.lockText}>acessar conta</Text>
          </View>

          {/* Banner azul de aviso */}
          <View style={styles.banner}>
            <Ionicons name="chatbubble-ellipses-outline" size={22} color="#fff" />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.bannerTitle}>Seu app está de cara nova!</Text>
              <Text style={styles.bannerSubtitle}>Os seus dados continuam seguros e protegidos</Text>
            </View>
            <Ionicons name="close" size={20} color="#fff" />
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
  lockCard: {
    borderWidth: 1,
    borderColor: '#ffb380',
    borderRadius: 16,
    height: 220,
    padding: 16,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  lockText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1565C0',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },
  bannerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bannerSubtitle: {
    color: '#dce8fb',
    fontSize: 12,
    marginTop: 2,
  },
});