import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import config from "../../../config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(config.API_URL);
  const handleProductSelect = id => {
    navigation.navigate("DetailPage",{id});
  };
  const renderProduct = ({ item }) => (
    <ProductCard 
    product={item} 
    onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.contianer}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contianer: {
    backgroundColor: "#606c38",
  },
});

export default Products;
