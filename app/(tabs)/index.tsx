import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleMode, colors } = useTheme();
  const styles = createStyles(colors);
  
  return (
    <View style={styles.container}>
      <Text>Hello, Expo!</Text>
      <TouchableOpacity onPress={toggleMode}>
        <Text>Toggle The Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
  });
return styles;
}