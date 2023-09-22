import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 *
 * @param {string} searchTerm - Term to search for
 * @returns {Array} - Array of restaurants or an empty array if no results
 */

const searchRestaurants = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      'http://192.168.50.210:3002/restaurants/',
      {
        params: {
          q: searchTerm,
        },
      },
    );

    if (response.data.status !== 'OK') {
      console.log(
        'Error fetching data from Google Places: ',
        response.data.status,
      );
    }

    return response.data.results;
  } catch (err) {
    console.log('Error fetching data from Google Places', err);
    return [];
  }
};

// Main App component
export default function App() {
  // State variables
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch restaurants on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const results = await searchRestaurants('restaurants in Lisbon');
        setRestaurants(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Render UI
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item: { name } }) => (
            <View style={styles.listItem}>
              <Text style={{ fontSize: 18 }}>{name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

// Styling for the App components
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
